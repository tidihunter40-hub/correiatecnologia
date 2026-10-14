# Relatório SEO — Correia Tecnologia e Automações

**Atualizado em:** 14/10/2026

**Escopo:** SEO local e técnico solicitado para Salvador, Bahia.
**Publicação:** commit `cec7a19` enviado à branch `main` do GitHub; produção verificada no domínio oficial em 14/10/2026.

## Implementado no código

- Home com title **“Correia Tecnologia e Automações | Ponto e Acesso Facial em Salvador”**, description solicitada, canonical, Open Graph e Twitter Card.
- Base canônica atualizada para `https://www.correiatecnologia.com.br/`. Links canônicos, sitemap, robots e identificadores do Schema usam o host `www`.
- Redirecionamento permanente do host `correiatecnologia.com.br` para `https://www.correiatecnologia.com.br`, configurado no Next.js. A Vercel ainda precisa ter os dois domínios conectados e HTTPS ativo para que o redirecionamento e o certificado funcionem em produção.
- Página `/relogio-de-ponto-facial-salvador` com title e description próprios, H1 local, conteúdo original sobre reconhecimento facial, uso empresarial, venda e locação, instalação, suporte e contato em Salvador. Inclui imagem com alt, links internos, CTA por WhatsApp, `Service` e `BreadcrumbList` em JSON-LD.
- Página `/controle-de-acesso-facial-salvador` com metadados próprios, H1 local, explicação de reconhecimento facial e controle biométrico, aplicações em empresas e condomínios, benefícios, instalação, suporte, observação sobre tratamento de dados biométricos, links internos e CTA. Inclui imagem com alt e JSON-LD `Service` e `BreadcrumbList`.
- Endereços anteriores `/solucoes/controle-de-acesso-facial`, `/solucoes/relogios-de-ponto` e aliases correspondentes em `/servicos/` redirecionam permanentemente para as novas URLs.
- Sitemap dinâmico inclui as duas páginas novas, páginas institucionais, soluções e segmentos. Robots permite rastreamento em produção, anuncia o sitemap no domínio `www` e continua bloqueando previews da Vercel.
- O layout raiz publica `WebSite`, `Organization` e `LocalBusiness` com nome, telefone e endereço já presentes no código do site. Não foram inventados token de Search Console, avaliação, certificação, parceiro, coordenada ou informação comercial.
- As mudanças não alteraram CSS, layout, cores, imagens ou componentes visuais. Os textos das novas páginas usam componentes e estilos existentes; o conteúdo de cada rota é renderizado estaticamente pelo Next.js.

## Verificações locais

| Item | Status | Evidência |
|---|---|---|
| TypeScript (`npm run lint`) | **APROVADO** | `tsc --noEmit` terminou com código 0. |
| Build de produção | **APROVADO** | `npm run build` terminou com código 0 e gerou 34 rotas estáticas/SSG, incluindo as duas páginas locais. O build foi direcionado temporariamente a `.next-validation` para evitar arquivos de build reparse do OneDrive; essa configuração temporária foi removida do código. |
| Title, description e canonical das páginas alvo | **APROVADO** | HTML pré-renderizado contém os titles esperados, descriptions, canonicals e o domínio `www`. O canonical da Home é serializado sem a barra final, equivalente à URL raiz. |
| Open Graph e Twitter Cards | **APROVADO** | Metadados das três páginas foram encontrados no HTML pré-renderizado. |
| H1 e conteúdo indexável | **APROVADO** | Home e novas páginas têm H1; conteúdo das páginas locais está no HTML gerado, sem depender de autenticação ou execução no navegador. |
| Meta robots | **APROVADO** | Páginas públicas geradas com `index, follow`; preview continua `noindex`. |
| Dados estruturados | **APROVADO** | HTML contém JSON-LD global e tipos `Service`/`BreadcrumbList` nas páginas locais. |
| Sitemap | **APROVADO em produção** | GET com User-Agent Googlebot: HTTP 200, `application/xml`, XML válido, 21 URLs e nenhuma URL fora do host `www`. As 21 URLs responderam HTTP 200. |
| Robots | **APROVADO em produção** | GET com User-Agent Googlebot: HTTP 200, `text/plain`, permite rastreamento e anuncia `https://www.correiatecnologia.com.br/sitemap.xml`. |
| Redirecionamentos | **APROVADO em produção** | HTTP apex, HTTPS apex e HTTP `www` terminam em `https://www.correiatecnologia.com.br/sitemap.xml` com HTTP 200. |
| Responsividade em navegadores/dispositivos | **NÃO TESTADO nesta alteração** | Não houve mudança de CSS ou layout; é necessária uma rodada visual em celular, tablet e desktop para certificar o comportamento. |
| HTTP 200 e HTTPS no domínio oficial | **APROVADO nas rotas verificadas** | Home, sitemap, robots e as duas páginas locais responderam HTTP 200 por HTTPS. Os três acessos de origem HTTP/apex testados chegaram ao host canônico HTTPS `www`. |
| Lighthouse / performance / acessibilidade | **NÃO TESTADO** | Lighthouse não foi executado nesta etapa. O build reportou 113 kB de First Load JS na Home, sem comparação anterior para afirmar melhora ou regressão. |
| Indexação no Google | **NÃO CONFIRMADA** | Não há acesso ao Search Console da propriedade. Nenhuma afirmação de indexação ou posição é feita. |

## Estado publicado

O commit `cec7a19` foi enviado para `main`. Em 14/10/2026, as respostas públicas de `https://www.correiatecnologia.com.br/`, `/relogio-de-ponto-facial-salvador`, `/controle-de-acesso-facial-salvador`, `/sitemap.xml` e `/robots.txt` corresponderam às alterações: páginas indexáveis com canonical `www`, sitemap válido no host `www` e robots anunciando o sitemap. Isso confirma que a versão atual está servida em produção. A CLI e o vínculo local da Vercel não estavam disponíveis, então não foi possível registrar ID ou duração do deployment; a verificação foi feita pelas respostas públicas.

## Etapas do Google Search Console

1. Publicar o código e confirmar que `www.correiatecnologia.com.br` e `correiatecnologia.com.br` estão conectados ao projeto correto da Vercel, com HTTPS funcional.
2. No Search Console, adicionar a propriedade **Domínio** `correiatecnologia.com.br`.
3. Copiar o registro TXT gerado pelo próprio Google e adicioná-lo ao DNS do domínio. A validação depende de acesso ao provedor DNS; nenhum código foi inventado.
4. Depois da verificação, enviar `https://www.correiatecnologia.com.br/sitemap.xml` e inspecionar as URLs da Home e das duas páginas locais.
5. Acompanhar os relatórios de rastreamento e indexação. O envio não garante inclusão, prazo ou posição nos resultados.

**Resultado desta etapa:** correção publicada e endpoints SEO validados em produção. TypeScript e build aprovados. Inspeção visual responsiva, Lighthouse e confirmação de indexação continuam pendentes; a indexação depende do Google Search Console.
