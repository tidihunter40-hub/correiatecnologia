# Relatório SEO local — Correia Tecnologia e Automações

**Revisão:** 14/10/2026
**Estado:** código publicado na branch `main` pelo commit `7ff6336`; produção verificada no domínio `www` em 14/10/2026.

## 1. Problemas encontrados

- O title e o H1 de `/relogio-de-ponto-facial-salvador` não correspondiam à redação solicitada. A meta description anterior não citava leitor de ponto nem o nome completo da empresa.
- O title e o H1 de `/controle-de-acesso-facial-salvador` não incluíam “BA” e “Bahia” conforme solicitado.
- O texto da página de ponto era breve na explicação de funcionamento, benefícios, aplicações e como pedir orçamento. A página de acesso também podia distinguir melhor o objetivo de liberar entradas do registro de jornada.
- O catálogo não tinha links contextuais para as duas páginas prioritárias. Home e Serviços já tinham links diretos.
- Havia código de uma página antiga em `/solucoes/relogios-de-ponto`, embora a rota já redirecionasse por 301 para a página prioritária.

## 2. Correções realizadas

- Aplicados exatamente o title, a meta description e o H1 solicitados à página de leitor e relógio de ponto facial.
- Aplicados o title e o H1 solicitados à página de controle de acesso facial.
- Ampliado o conteúdo original de ambas as páginas com explicações específicas, usos possíveis, critérios para escolher a solução, atendimento em Salvador e região e informações úteis para solicitar orçamento. Modelos, disponibilidade, integração, instalação e suporte permanecem sob consulta.
- Adicionados links contextuais no catálogo para as duas páginas prioritárias, reutilizando o estilo de links já presente no site. Confirmados os links existentes na Home e em Serviços.
- Removido o arquivo da página antiga de ponto. O redirecionamento 301 configurado para seu endereço permanece ativo.
- Mantidos layout, CSS, imagens, funcionalidades, DNS e dados de contato existentes. Nenhum endereço, telefone, avaliação ou certificação foi criado nesta revisão.

## 3. Páginas otimizadas

- `/relogio-de-ponto-facial-salvador` — prioridade principal; title, description, H1, conteúdo e nome do serviço em JSON-LD.
- `/controle-de-acesso-facial-salvador` — title, H1, conteúdo sobre controle de entradas e orientação para orçamento.
- `/catalogo` — links internos contextuais. Home e `/servicos` foram verificados como fontes de links para ambas as páginas.

## 4. Testes executados

| Verificação | Resultado |
|---|---|
| `npm run build` | Aprovado; páginas prioritárias pré-renderizadas em HTML. |
| `npm run lint` | Aprovado após o build regenerar os tipos do Next.js. |
| `git diff --check` | Sem erro de whitespace. |
| Auditoria dos 21 HTMLs do sitemap | 21 titles únicos; todos têm meta description, canonical correspondente no host `www`, um H1, H2 e JSON-LD parseável. |
| Sitemap e robots | 21 URLs únicas no domínio `www`; páginas prioritárias incluídas; `robots.txt` anuncia o sitemap. Ambos retornaram HTTP 200 no servidor local. |
| Meta robots | As páginas prioritárias declaram `index, follow`; preview permanece `noindex` e bloqueado em `robots.txt` pela configuração existente. |
| Redirecionamentos locais | `/solucoes/relogios-de-ponto` e `/servicos/controle-de-acesso-facial` retornaram HTTP 301 para as páginas prioritárias. |
| Renderização e responsividade | Conferência visual desktop e celular 390 × 844 px nas duas páginas; títulos e CTAs visíveis, sem rolagem horizontal. Catálogo também sem rolagem horizontal e com os dois links acessíveis. |
| Desempenho mobile | O build informa cerca de 111 kB de JavaScript inicial nas páginas prioritárias. Lighthouse e métricas reais de usuários não foram medidos nesta revisão. |
| Produção HTTPS | Home, duas páginas prioritárias, Serviços, Catálogo, sitemap e robots responderam HTTP 200. Titles, descriptions, H1 e canonicals das páginas prioritárias correspondem ao código publicado. Home, Serviços e Catálogo contêm links para ambas as páginas. Sitemap público contém 21 URLs. |

O JSON-LD foi validado como JSON no HTML gerado. Não foi possível executar o teste externo de resultados avançados do Google nem medir Lighthouse no domínio público.

## 5. Publicação e pendências de indexação

- A revisão foi enviada ao repositório e confirmada no domínio público por HTTPS. O canonical declarado no HTML usa `www`. A escolha efetiva de canonical pelo Googlebot precisa ser acompanhada no Search Console.
- Segundo as informações fornecidas, o domínio já está verificado no Search Console, o sitemap com 21 URLs já foi processado e a Home já está indexada. Não é necessário repetir essas etapas.
- Após publicar esta revisão, inspecionar as URLs `/relogio-de-ponto-facial-salvador` e `/controle-de-acesso-facial-salvador` no Search Console, confirmar o canonical selecionado pelo Google e solicitar indexação se o conteúdo atualizado ainda não tiver sido rastreado.
- Acompanhar impressões e consultas locais no relatório de desempenho do Search Console e medir Core Web Vitals mobile em produção. A indexação e as posições nas buscas dependem do Google; não há promessa de primeira posição.
