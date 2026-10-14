# Relatório SEO — Correia Tecnologia e Automações

**Atualizado em:** 14/10/2026
**Escopo:** SEO local para Salvador, Bahia; correção e validação da base canônica.
**Estado desta revisão:** commit `6de304e` enviado à branch `main`; produção atualizada e verificada em 14/10/2026.

## Alterações implementadas no código local

- Home: title **“Correia Tecnologia | Ponto Facial e Controle de Acesso em Salvador BA”**.
- Home: meta description solicitada, com marca, Salvador/BA, relógio de ponto facial, controle de acesso, reconhecimento facial e automação.
- Home: H1 **“Tecnologia e Automação para Empresas em Salvador, Bahia”**. O texto foi ajustado sem alterar estilos, cores, imagens ou estrutura do layout.
- Open Graph e Twitter Cards da Home acompanham o novo title e description.
- Mantidas as páginas locais `/relogio-de-ponto-facial-salvador` e `/controle-de-acesso-facial-salvador`, com metadados próprios, conteúdo original, H1/H2, imagens com alt, links internos, contato e dados estruturados `Service`/`BreadcrumbList`.
- As demais páginas de soluções mantêm metadados exclusivos e conteúdo local em Salvador, conforme os serviços efetivamente cadastrados.
- Domínio canônico no código: `https://www.correiatecnologia.com.br/`. Sitemap, robots, canonicals e Schema.org usam o host `www`.
- Sitemap dinâmico inclui páginas públicas principais, seis soluções (incluindo as duas páginas locais prioritárias) e seis segmentos. A rota offline não é listada.
- `robots.txt` permite rastreamento em produção e declara `Sitemap: https://www.correiatecnologia.com.br/sitemap.xml`. Previews continuam bloqueados contra indexação.
- Redirecionamentos de domínio e aliases existentes foram preservados. Nenhuma configuração DNS foi alterada.
- Dados `Organization` e `LocalBusiness` usam dados já cadastrados no site e área atendida em Salvador/Bahia. Nenhuma avaliação, endereço, telefone ou credencial nova foi inventada.

## Verificações desta revisão

| Item | Status | Evidência |
|---|---|---|
| TypeScript / lint | **APROVADO** | `npm run lint` (`tsc --noEmit`) terminou com código 0. |
| Build de produção | **APROVADO** | `npm run build` terminou com código 0 e gerou 34 rotas estáticas/SSG. |
| Metadados da Home | **APROVADO localmente** | HTML estático contém o title, description, canonical `www`, Open Graph e Twitter atualizados. |
| H1 da Home | **APROVADO localmente** | HTML estático contém “Tecnologia e Automação para Empresas em Salvador, Bahia”. |
| Metadados e conteúdo das páginas principais | **APROVADO localmente** | HTML gerado das páginas públicas inclui canonical, description e H1. `/offline` não tem canonical e está `noindex` intencionalmente. |
| Canonical / SEO local das páginas de ponto e acesso | **APROVADO localmente** | As duas páginas prioritárias são pré-renderizadas com conteúdo, canonical e Schema.org próprios. |
| Sitemap | **APROVADO no artefato de build** | XML parseado com sucesso; 21 URLs, todas no host `www`, incluindo as duas páginas locais. Content-Type declarado pela rota Next.js como `application/xml`. |
| Robots | **APROVADO no artefato de build** | Inclui permissão de rastreamento em produção e URL do sitemap `www`. |
| Redirecionamentos | **CONFIGURAÇÃO CONFERIDA** | Regras permanentes no `next.config.mjs` preservam redirecionamento do host apex para HTTPS `www` e aliases de serviço. Não foi possível repetir requisição HTTP ao servidor local neste sandbox. |
| Responsividade visual | **NÃO TESTADO nesta revisão** | Nenhuma regra CSS/layout foi alterada, mas a mudança de H1 precisa de conferência visual em desktop, tablet e celular antes da homologação final. |
| Performance / Lighthouse | **NÃO TESTADO** | Build aprovado; Lighthouse e medições de campo não foram executados. |
| Respostas públicas após publicação | **APROVADO** | Home, páginas de ponto/acesso, sitemap e robots retornaram HTTP 200. O title, description, canonical e H1 novos da Home foram confirmados no HTML de produção. Sitemap XML válido com 21 URLs no host `www`; robots declara o sitemap. |
| Indexação / posição no Google | **NÃO CONFIRMADO** | Requer a propriedade verificada no Google Search Console; nenhum resultado ou ranking é prometido. |

## Estado de publicação

O commit `6de304e` foi enviado à branch `main` do GitHub. A produção em `https://www.correiatecnologia.com.br/` serve a nova Home e os metadados desta revisão. Home, páginas prioritárias, sitemap e robots foram verificados por HTTPS; o sitemap e robots respondem 200. A CLI da Vercel não estava disponível, portanto o ID do deployment não foi consultado; a confirmação de produção foi feita pelas respostas públicas.

## Etapas que dependem do Google Search Console

1. Verificar a propriedade de domínio `correiatecnologia.com.br` no Search Console com o registro TXT fornecido pelo próprio Google.
2. Enviar `https://www.correiatecnologia.com.br/sitemap.xml` após a publicação desta revisão.
3. Inspecionar Home, `/relogio-de-ponto-facial-salvador` e `/controle-de-acesso-facial-salvador`, e acompanhar rastreamento e indexação.

A verificação DNS depende do acesso ao provedor do domínio; nenhum código TXT foi inventado. Enviar sitemap ou solicitar indexação não garante inclusão, posição ou prazo nos resultados.

**Resultado:** SEO local e técnico atualizado e publicado; lint, build, sitemap, robots e metadados de produção aprovados. **Ainda não apto para homologação final** até validar responsividade visual em desktop, tablet e celular.
