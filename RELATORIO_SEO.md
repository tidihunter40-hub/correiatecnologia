# Relatório de auditoria SEO — Correia Tecnologia

**Data:** 13/10/2026  
**Escopo:** inspeção somente leitura da produção, revisão do código local e preparação para indexação. Nenhuma publicação foi feita.

## Produção observada

- `https://correiatecnologia.com.br/` abre o site público, mas o título exposto pelo navegador é **“Home - Correia Tecnologia e Automações”**. O conteúdo visível também difere do Next.js deste repositório. Isso indica que a produção observada não corresponde ao código local auditado.
- `https://correiatecnologia.com.br/solucoes/relogios-de-ponto/` exibiu a mesma home e o mesmo título genérico, em vez de uma página de relógios de ponto. Não foi possível confirmar o status HTTP bruto, mas a rota não apresentou o conteúdo esperado.
- Não foi possível validar os corpos HTTP de `/robots.txt` e `/sitemap.xml` na produção: a navegação do navegador tratou esses caminhos como páginas da home. Portanto, seus status e conteúdo atuais em produção permanecem sem confirmação.
- O checkout não tem vínculo local `.vercel` e o comando `vercel` não está instalado. No painel Vercel acessível, o projeto Correia não apareceu na busca do workspace aberto. Por isso, **não foi possível confirmar** qual projeto/deployment da Vercel serve o domínio nem comparar seu commit de produção com `main`.

## Correções preparadas no código

- Home: title SEO definido como **“Correia Tecnologia | Controle de Acesso em Salvador”**, também alinhado nos metadados Open Graph e Twitter.
- Nova página estática `/solucoes/relogios-de-ponto`, com title, H1, meta description, canonical, Open Graph, Twitter Card e conteúdo original sobre reconhecimento facial, empresas, venda, locação, instalação, suporte, atendimento local e orçamento.
- A URL antiga `/servicos/relogios-de-ponto` redireciona para a nova URL canônica; os cards de soluções apontam diretamente para a rota nova.
- Sitemap Next.js inclui `/solucoes/relogios-de-ponto` e deixa de listar a URL antiga como página distinta.
- `/robots.txt` permite rastreamento na produção, bloqueia Deploy Previews e anuncia o sitemap. A diretiva `Host` foi removida por não ser necessária para o Google.
- Os metadados gerados para a página nova incluem `index, follow`. `noindex` permanece apenas na página offline; previews recebem `noindex` globalmente.
- Dados estruturados globais existentes incluem `WebSite`, `Organization` e `LocalBusiness`; a página de ponto acrescenta `Service` e `BreadcrumbList`.
- O conteúdo da página é renderizado estaticamente pelo Next.js. O Service Worker faz network-first para navegações e usa a página offline somente quando a rede falha; a revisão do código não encontrou bloqueio de crawler.
- A verificação do Search Console por meta tag está preparada por meio da variável opcional `GOOGLE_SITE_VERIFICATION`. As instruções de configuração estão no README.

## Verificações locais

- `npm run lint`: aprovado (TypeScript).
- `npm run build`: aprovado; a nova rota foi gerada como página estática.
- HTML gerado da nova página: title, meta description, H1, canonical e `index, follow` confirmados; `noindex` ausente.
- Sitemap gerado: contém a URL canônica nova e não contém a URL antiga.
- Robots gerado localmente: `User-Agent: *`, `Allow: /` e URL do sitemap.
- A tentativa de acessar o servidor local de teste pelo navegador foi bloqueada pelo isolamento de rede do ambiente; assim, o status HTTP não foi medido diretamente. A resposta 200 ainda precisa ser verificada no deployment após publicação.

## Pendências antes de indexar a produção

1. Confirmar o workspace/projeto correto da Vercel e conectar `correiatecnologia.com.br` ao deployment produzido a partir deste repositório e branch.
2. Publicar as alterações somente após autorização; depois confirmar HTTP 200, canonical, robots e sitemap diretamente no domínio oficial.
3. Verificar a propriedade no Google Search Console. Para propriedade Domínio, criar o TXT DNS fornecido pelo Google; para prefixo de URL, configurar `GOOGLE_SITE_VERIFICATION` com o token real, fazer deploy e concluir a verificação.
4. Enviar `https://correiatecnologia.com.br/sitemap.xml` no Search Console e inspecionar a home e `/solucoes/relogios-de-ponto`, solicitando rastreamento quando disponíveis.
5. Acompanhar os relatórios de indexação. A verificação técnica e o pedido de rastreamento não confirmam indexação, prazo nem posição nos resultados.
