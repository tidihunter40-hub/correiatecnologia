# Etapa 3 — Auditoria de responsividade (revalidação Etapa 5)

**Data:** 13/10/2026  
**Build:** checkout de validação isolado em `C:\Dev\CorreiaTecnologia-Validacao-20261013`; Chrome 155.

## Cobertura e resultado

A execução final percorreu **28 rotas em 15 viewports (420 combinações)**. O JSON `artifacts/responsividade/resultado-etapa5.json` registra `failures: []`.

Resoluções: celulares 320×568, 360×800, 375×812, 390×844, 430×932; tablets 768×1024, 820×1180, 1024×1366, 1024×768 e 1180×820; desktops 1280×800, 1366×768, 1440×900, 1536×1024 e 1920×1080.

Verificações: rolagem horizontal do documento, controles fora da tela, imagens carregadas, destinos internos e fragmentos/âncoras. Resultado: nenhum overflow, controle fora da viewport, imagem quebrada, URL interna inexistente ou fragmento sem alvo nas páginas/viewport abrangidas.

## Capturas

- Home: celular, tablet e desktop: `artifacts/responsividade/etapa5-home-mobile.png`, `etapa5-home-tablet.png`, `etapa5-home-desktop.png`.
- Páginas desktop: Sobre, Soluções, Equipamentos, Segmentos, Projetos e Contato: arquivos `etapa5-*-desktop.png` no mesmo diretório.
- Estado ativo e menu Mais mobile: `etapa5-item-ativo-mobile.png`, `etapa5-menu-mais-mobile.png`.

A captura full-page posiciona barras fixas na altura do viewport original; isso não é uma afirmação de sobreposição durante a rolagem. O menu e o item ativo também foram exercitados em Chrome local. Orientações físicas e aparelhos reais não foram testados.

## Build e limites

`npm ci`, `npm run lint` e `npm run build` foram executados na cópia fora do OneDrive; build gerou 33 rotas. O working tree original não foi limpo/resetado e não houve publicação. Não há Lighthouse ou auditoria de acessibilidade assistiva nesta evidência.
