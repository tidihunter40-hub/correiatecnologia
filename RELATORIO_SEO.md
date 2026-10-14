# Relatório SEO — Correia Tecnologia e Automações

**Atualizado em:** 13/10/2026
**Escopo:** Etapa 4 — SEO técnico e local. **Nenhuma publicação, alteração DNS ou cadastro em serviço externo foi realizado.** O design e as fotografias aprovadas foram preservados.

## O que foi preparado no código

- Home com title exato **“Correia Tecnologia | Controle de Acesso em Salvador”**, meta description local, canonical, Open Graph e imagem de compartilhamento.
- Titles, descriptions, canonicals e Open Graph próprios para páginas públicas indexáveis; páginas de solução e segmento também recebem metadados específicos por rota. `offline` continua intencionalmente `noindex` e fora do sitemap.
- Seis páginas públicas em `/solucoes/…`, incluindo controle de acesso facial, relógio de ponto facial, automação de entradas, venda, locação e instalação/suporte. O conteúdo distingue o serviço, explica como é avaliado, indica aplicações e benefícios, relaciona categorias de equipamentos e responde dúvidas sem inventar especificações.
- A página `/solucoes/relogios-de-ponto` contém conteúdo local sobre reconhecimento facial, uso empresarial, venda, locação, instalação, suporte e orçamento em Salvador.
- Rotas antigas de detalhe `/servicos/…` redirecionam permanentemente com status **301** para as novas rotas. Links internos e sitemap usam os endereços canônicos `/solucoes/…`.
- `/sitemap.xml` lista 21 URLs públicas: páginas institucionais, seis soluções e seis segmentos. Não lista páginas de detalhe antigas nem a página offline.
- `/robots.txt` permite rastrear a produção e aponta para `https://correiatecnologia.com.br/sitemap.xml`. Deploy Previews continuam bloqueados para indexação.
- Dados JSON-LD: `WebSite`, `Organization` e `LocalBusiness` no layout; `Service` e `BreadcrumbList` nas páginas de solução. Endereço e telefone usam os dados já confirmados no site. Não foram adicionados preços, avaliações, estrelas, clientes, certificações, coordenadas ou produtos estruturados sem dados de modelo suficientes.
- O PWA mantém páginas públicas em estratégia network-first. O Service Worker não exige login, não substitui HTML conectado pela página offline e usa o fallback offline somente quando a rede falha.
- Instruções para Search Console e Perfil da Empresa no Google adicionadas ao README.

## Verificações locais

- `npm run lint` — aprovado (TypeScript).
- `npm ci` e `npm run build` — aprovados em cópia de validação isolada fora do OneDrive; a compilação final gerou 33 rotas. O working tree original foi preservado. Essa aprovação valida o código local, não o deployment da Vercel.
- Metadados/HTML do build final foram revisados por código e execução em Chrome no domínio `vercel.app`: a rota de relógios mostra título “Relógio de Ponto Facial em Salvador | Correia Tecnologia”, H1 esperado e conteúdo local sobre identificação, aplicação, venda/locação e instalação/suporte. O build local gerou as rotas; status HTTP e canonical/headers públicos não foram lidos.
- Sitemap gerado contém seis soluções canônicas; robots anuncia o sitemap e permite rastreamento. O código de sitemap e robots permaneceu igual após essa inspeção.
- Manifest de rotas Next.js da primeira compilação confirma seis redirecionamentos 301 de `/servicos/…` para `/solucoes/…`.
- Canonicals apontam para o domínio oficial; as imagens Open Graph declaradas referenciam arquivos existentes no projeto.
- Teste HTTP pelo terminal local foi bloqueado pelas permissões de socket localhost. A navegação pública no browser confirmou conteúdo visual de páginas do site, mas não permitiu ler status HTTP, canonical, headers ou XML. Em `https://correiatecnologia.com.br/robots.txt` e `/sitemap.xml`, o navegador mostrou conteúdo do site antigo em vez de XML/robots legíveis; validar por uma ferramenta de rede autorizada antes de declarar esses endpoints publicados.
- Lighthouse não está instalado/disponível neste ambiente; nenhuma pontuação de desempenho, SEO, acessibilidade ou boas práticas foi estimada.

## Estado da produção

Na auditoria final em 13/10/2026, Chrome abriu `https://correiatecnologia.com.br/` com título “Home - Correia Tecnologia e Automações” e conteúdo do site anterior. A rota `/solucoes/relogios-de-ponto/` no domínio oficial também mostrou a experiência antiga, sem a página SEO implementada neste código. Já `https://correiatecnologia.vercel.app/solucoes/relogios-de-ponto` mostrou o conteúdo novo e o título esperado, porém ainda exibe um CEP removido do código local final. Isso evidencia versões diferentes; não comprova qual projeto/deployment controla o domínio, nem status HTTP. Não foi publicado nem alterado DNS. Não há confirmação de indexação.

O domínio e os redirects HTTP/HTTPS e `www`/apex dependem da configuração de Domains/DNS do projeto Vercel. O código define canonicals no domínio oficial e redirects 301 para as URLs antigas de serviços; não altera DNS nem associa domínios.

## Próximas etapas do proprietário

1. Depois de autorizar e concluir a publicação, confirmar no domínio oficial os status HTTP 200 das páginas, `/robots.txt` e `/sitemap.xml`; verificar também o redirecionamento de HTTP e `www` para `https://correiatecnologia.com.br`.
2. No Google Search Console, adicionar a propriedade de domínio `correiatecnologia.com.br` e publicar o registro TXT fornecido pelo Google no provedor DNS. Isso requer acesso e autorização do proprietário. Alternativamente, uma propriedade de prefixo de URL pode usar o token meta real do Google via `GOOGLE_SITE_VERIFICATION` no ambiente de produção; nenhum token foi inventado ou armazenado.
3. Após verificar a propriedade, enviar `https://correiatecnologia.com.br/sitemap.xml`, inspecionar `/` e `/solucoes/relogios-de-ponto` e solicitar rastreamento. Acompanhar relatórios de cobertura e erros. Esses pedidos não garantem indexação, prazo ou posição.
4. Antes de editar o Perfil da Empresa no Google, procurar um perfil existente por nome, telefone e endereço para evitar duplicatas. O proprietário deve confirmar os dados e categoria, reivindicar/verificar o perfil e então informar o site oficial. Nenhum cadastro ou edição externa foi feito.

**Resultado:** código local preparado para rastreamento e indexação técnica, aguardando publicação autorizada e verificação de domínio no Search Console. Não há promessa de posição ou afirmação de indexação.
