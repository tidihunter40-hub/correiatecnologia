# Relatório PWA — Correia Tecnologia

**Data:** 13/10/2026  
**Escopo:** código/build local isolado e automação Chrome 155.

## Implementação inspecionada

- Manifesto com nome, `start_url`, escopo raiz, `display: standalone`, cores e orientação.
- Ícones PNG 192/512, maskable, Apple Touch e favicon.
- Service Worker que guarda a página `/offline`, atualiza os caches e não intercepta métodos/requisições privadas fora das regras do projeto.
- Detecção de instalação/atualização e navegação inferior mobile/tablet com cinco itens, rota ativa, foco visível e painel “Mais”.

## Testes com evidência

- `npm run lint`: aprovado; `npm run build`: aprovado na cópia de validação fora do OneDrive, 33 rotas geradas.
- `node --check public/sw.js`: aprovado.
- Chrome 155 local: worker `activated`, escopo raiz, página controlada e página offline em cache.
- Offline real: servidor local parado de propósito após confirmar o cache; a URL inédita de teste exibiu “Sem conexão”. O servidor foi reiniciado em seguida. Evidência: `artifacts/functional-audit/offline-real-etapa5.json` e `etapa5-pagina-offline-real.png`.
- Matriz responsiva em 420 combinações não encontrou controles/overflow que escondessem a navegação inferior; screenshots do item ativo e menu “Mais” em `artifacts/responsividade/`.

## Pendências

- Não foram instalados/testados Android/Chrome, iPhone/iPad/Safari, desktop com instalação ou atualização entre versões.
- Não foi validado o PWA no domínio oficial atual: ele ainda mostra a versão antiga. O domínio `vercel.app` responde visualmente com a página SEO, mas não comprova associação do domínio oficial nem coincide integralmente com o build local final.
- A conectividade do mapa externo foi limitada no ambiente; não é uma falha do PWA confirmada.

**Conclusão PWA:** fallback offline aprovado em teste local automatizado; instalação real e comportamento em produção permanecem não testados. Não declarar homologação completa.

## Reauditoria e ajustes locais — 13/10/2026

### Evidências atuais

- No painel Vercel, o projeto `correiatecnologia` mostra o deployment de produção `31db8c3` (`Prepare Correia site for production`) como **Ready**; `correiatecnologia.vercel.app` está com configuração válida.
- O manifesto abre como JSON em `https://correiatecnologia.vercel.app/manifest.webmanifest`.
- `https://correiatecnologia.com.br/` ainda serve outra versão do site, com o título antigo **“Home - Correia Tecnologia e Automações”**. A URL `/manifest.webmanifest` é redirecionada para uma página do site antigo, e não entrega o manifesto PWA.
- O domínio oficial permanece **Invalid Configuration** no painel. A Vercel informa que o registro necessário é `A`, nome `@`, valor `216.198.79.1`. Nenhum DNS foi alterado.
- A abertura direta de `/sw.js` no Chrome de auditoria foi bloqueada pelo navegador (`ERR_BLOCKED_BY_CLIENT`); isso não prova se o arquivo está ou não acessível ao registro do Service Worker. O estado ativo/escopo do worker em produção ficou **não testado**.

### Ajustes feitos no código local

- Regenerados os cinco PNGs com a marca oficial ampliada e centralizada. O ícone de 512 px anterior continha a marca em uma área aproximada de 72×75 px; os ícones padrão e maskable eram cópias binárias. Agora têm escalas distintas e os arquivos maskable e padrão são diferentes.
- Adicionado botão de instalação para desktop, condicionado à disponibilidade real do evento `beforeinstallprompt`.
- Adicionadas instruções de instalação para Android quando o navegador não disponibiliza o prompt programático. As instruções para iPhone/iPad, Safari para Mac e Chrome/Edge mostram o procedimento adequado à plataforma.
- Substituído o glifo genérico da tela offline por um ícone vetorial de conexão indisponível, mantendo o layout.

### Testes desta revisão

| Verificação | Resultado | Evidência/limite |
| --- | --- | --- |
| JSON do manifesto local e caminhos dos ícones | **APROVADO** | Parse JSON e existência dos três ícones referenciados. |
| Dimensões dos PNGs locais | **APROVADO** | 192×192, 512×512, 512×512 maskable, 180×180 Apple Touch e 48×48 favicon. |
| Separação do ícone maskable | **APROVADO** | Hash diferente do ícone padrão; desenho dimensionado com margem para recorte. |
| Sintaxe do Service Worker | **APROVADO** | `node --check public/sw.js`. |
| `git diff --check` | **APROVADO** | Sem erros de whitespace. |
| Lint / TypeScript | **NÃO TESTADO** | `npm run lint` não pôde iniciar porque `tsc` não existe no `node_modules` local. |
| Build de produção local | **NÃO TESTADO** | `npm run build` não pôde iniciar porque o binário `next` não existe no `node_modules` local. |
| Restauração limpa fora do OneDrive | **REPROVADO pelo ambiente** | `npm ci` na cópia temporária falhou após cerca de 65 s com o erro interno do npm `Exit handler never called!`; o cache local não contém `next` nem `typescript`. |
| Service Worker ativo em `vercel.app` | **NÃO TESTADO** | O Chrome bloqueou a abertura direta do script; sem Playwright/CDP conectado neste ambiente. |
| Instalação Android, iOS, Windows | **NÃO TESTADO** | Nenhuma instalação real foi acionada; não houve dispositivos físicos. |
| Responsividade e screenshots após os ajustes | **NÃO TESTADO** | Servidores locais estão inacessíveis ao processo de auditoria e as dependências estão ausentes. |

### Estado para homologação

**NÃO APTO ainda.** As correções estão apenas no código local e não estão no deployment `31db8c3`. Faltam restaurar as dependências para executar lint e build, validar o Service Worker e os fluxos instaláveis no build atualizado, e conectar o domínio oficial ao deployment correto. A etapa de DNS exige alteração no provedor do domínio e não foi realizada.
