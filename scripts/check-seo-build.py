"""Check the rendered Next.js production output against the public sitemap."""

import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.description = ""
        self.canonical = ""
        self.robots = ""
        self.h1_count = 0
        self.json_ld = []
        self.links = set()
        self._capture = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self._capture = "title"
        elif tag == "script" and attrs.get("type") == "application/ld+json":
            self._capture = "json_ld"
            self.json_ld.append("")
        elif tag == "meta" and attrs.get("name") == "description":
            self.description = attrs.get("content", "")
        elif tag == "meta" and attrs.get("name") == "robots":
            self.robots = attrs.get("content", "")
        elif tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href", "")
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "a":
            self.links.add(attrs.get("href", ""))

    def handle_endtag(self, tag):
        if tag == self._capture or (tag == "script" and self._capture == "json_ld"):
            self._capture = None

    def handle_data(self, data):
        if self._capture == "title":
            self.title += data
        elif self._capture == "json_ld":
            self.json_ld[-1] += data


def main():
    output = Path(sys.argv[1]) / "server" / "app"
    sitemap = ElementTree.parse(output / "sitemap.xml.body")
    urls = [node.text for node in sitemap.findall(".//{*}loc")]
    assert len(urls) == len(set(urls)), "Sitemap contains duplicate URLs"
    assert len(urls) >= 30, f"Expected at least 30 public URLs, found {len(urls)}"
    titles = set()
    descriptions = set()
    pages = {}

    for url in urls:
        parsed_url = urlparse(url)
        assert parsed_url.scheme == "https" and parsed_url.netloc == "www.correiatecnologia.com.br", url
        path = parsed_url.path
        html_file = output / (path.lstrip("/") + ".html" if path else "index.html")
        assert html_file.is_file(), f"Missing rendered HTML: {path}"
        page = PageParser()
        page.feed(html_file.read_text(encoding="utf-8"))
        assert page.title and page.title not in titles, f"Missing or duplicate title: {path}"
        assert page.description and page.description not in descriptions, f"Missing or duplicate description: {path}"
        assert page.canonical == url, f"Incorrect canonical: {path}: {page.canonical}"
        assert page.h1_count == 1, f"Expected one H1: {path}: {page.h1_count}"
        assert "noindex" not in page.robots, f"Public page marked noindex: {path}"
        assert page.json_ld, f"Missing structured data: {path}"
        for item in page.json_ld:
            json.loads(item)
        titles.add(page.title)
        descriptions.add(page.description)
        pages[path or "/"] = page

    for path in ("/sistemas/secullum-ponto-web", "/sistemas/secullum-ponto-offline"):
        assert path in pages["/"].links, f"Home lacks link to {path}"
        assert path in pages["/servicos"].links, f"Services lacks link to {path}"
    assert "/catalogo/coletor-ponto-facial-dixi" in pages["/relogio-de-ponto-facial-salvador"].links
    assert "/catalogo/reconhecimento-facial-evo" in pages["/controle-de-acesso-facial-salvador"].links

    robots = (output / "robots.txt.body").read_text(encoding="utf-8")
    assert "Allow: /" in robots and "https://www.correiatecnologia.com.br/sitemap.xml" in robots
    print(f"OK: {len(urls)} unique sitemap URLs, rendered metadata, canonicals, H1, JSON-LD, links and robots.txt")


if __name__ == "__main__":
    main()
