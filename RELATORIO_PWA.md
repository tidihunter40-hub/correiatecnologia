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
