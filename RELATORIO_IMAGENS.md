# Correia Tecnologia — auditoria final de imagens

**Data:** 13/10/2026  
**Evidência:** `artifacts/image-audit/resultado-etapa5.json`.

## Resultado da varredura

- 21 arquivos raster: 2 logomarcas excluídas da comparação e 19 fotografias/visuais de conteúdo.
- Nenhuma duplicata exata por SHA-256; nenhum candidato a duplicata perceptual no limite DCT adotado.
- Nenhuma referência raster estática ausente.
- 8 arquivos de foto estão reutilizados em múltiplas páginas/usos: `acesso-catraca.png` (5), `acesso-escritorio.png` (3), `reference/hero-acesso.webp` (8), `reference/institucional-edificio.webp` (3), `reference/servico-instalacao.webp` (4), `reference/servico-locacao.webp` (2), `reference/servico-venda.webp` (3), `relogio-ponto-foto.webp` (9).
- 14 visuais têm pelo menos uma dimensão abaixo de 300 px: 13 recortes pequenos da referência e `relogio-ponto-foto.webp` (470×290). Inventário completo no JSON.
- Duas conversões para WebP continuam otimizadas: atendimento 401.133 B → 113.376 B; suprimentos 1.869.916 B → 52.502 B.

## Status e autorização

**REPROVADO para os requisitos de exclusividade, qualidade global e licenças.** Ausência de hashes duplicados não significa que cada card tenha uma fotografia diferente. Recortes do mockup continuam pequenos, algumas fotos repetidas e o repositório não registra origem/licença/autorização de todos os arquivos. Catálogo contém imagens ilustrativas e precisa de fotografias oficiais por modelo confirmado.

Não foram inventados projetos/clientes. A galeria de projetos reais continua dependendo de fotografias de instalações e autorização de publicação. As imagens fornecidas pelo cliente e suas conversões permanecem identificadas no código/inventário, mas isso não confirma por si só que todos os visuais existentes têm autorização comercial.

## Pendências

1. Confirmar modelos comercializados e receber fotografias oficiais com autorização.
2. Documentar origem, fotógrafo e licença para cada imagem restante.
3. Substituir thumbnails e usos repetidos por originais autorizados de resolução adequada.
4. Receber imagens de projetos reais e autorizações antes de ativar a galeria.
5. Reexecutar hash, carregamento responsivo e revisão visual após as substituições.
