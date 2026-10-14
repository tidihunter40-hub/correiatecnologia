# Auditoria visual de imagens — Correia Tecnologia

**Data:** 14/10/2026

**Escopo:** auditoria de imagens no código e revisão da mídia estática em todas as rotas geradas. Nenhuma publicação foi realizada.

## Resultado da implementação

- O build do Next.js gerou **33 páginas estáticas**. Foram inspecionadas as rotas principais e seus templates dinâmicos: Home, serviços (6), soluções (5 + página dedicada de relógio de ponto), catálogo, segmentos (6), projetos, institucional, contato, blog, privacidade, offline, sitemap e robots.
- **25 composições Hero** identificadas contando as rotas dinâmicas e a imagem do contato. Hero da Home e componentes internos agora têm altura de 520–620 px no desktop; o mobile mantém composição vertical com imagem no quadro inferior.
- **4 novas imagens** geradas localmente em WebP (máster 1672×941; 129–164 KB), para acesso facial, relógio de ponto, instalação e conjunto de equipamentos. Foram feitas com OpenAI ImageGen nesta tarefa; são imagens ilustrativas, não fotografias de instalações da Correia nem modelos de catálogo confirmados.
- **4 imagens do catálogo** foram trocadas por fotos temáticas existentes em resolução maior, incluindo 1448×1086 para suprimentos. As dimensões atuais e usos estão no inventário CSV.
- **4 novos arquivos** foram convertidos do PNG gerado para WebP de qualidade 89 (129–164 KB); as referências de 4 cards de catálogo foram redirecionadas a fontes maiores já existentes. Não houve ampliação artificial de resolução.
- Dois arquivos WebP com extensão .png foram corrigidos para .webp e todas as referências atualizadas.
- Removidas as referências ativas aos thumbnails de 78–202 px, imagens de segmento de 130 px e hero de 716 px. Os arquivos antigos foram preservados sem uso para evitar remoção destrutiva.
- Componentes usam Next/Image, object-fit: cover e qualidade 88 para fotografias; imagens de hero têm prioridade, enquanto o restante usa carregamento responsivo padrão. O alt foi revisado nas imagens informativas e o catálogo identifica fotos como ilustrativas.
- A seção de projetos continua sem falsos cases; usa uma imagem ilustrativa identificada e mantém a galeria aguardando registros reais autorizados.
- A logo oficial selecionada pelo cliente permanece única no cabeçalho, rodapé e ícones PWA.

**Rotas/código alterados:** Home, serviços e detalhes de serviço, soluções e detalhes, relógio de ponto facial, catálogo, segmentos e detalhes, institucional, projetos, contato, blog, privacidade, layout e componentes de imagem.

## Evidências e testes

| Verificação | Resultado | Evidência / limite |
|---|---|---|
| Inventário raster | 43 arquivos; 20 ativos detectados e 23 legados sem referência | [Inventário completo](INVENTARIO_IMAGENS.csv) |
| Resolução/extensão dos ativos | Metadados lidos; extensões e formatos conferidos | [Dados JSON](artifacts/image-audit/auditoria-visual-20261014.json) |
| Referências de arquivo | Sem referências estáticas ausentes identificadas; caminhos dinâmicos de segmento correspondem aos 6 arquivos | Auditoria de código e checagem de existência |
| Lint / TypeScript | **Aprovado** | npm run lint → tsc --noEmit, exit 0 |
| Build de produção | **Aprovado** | npm run build, Next.js 15.5.27, 33 páginas estáticas |
| Testes automatizados | **Não configurados** | package.json não contém script de teste |
| Navegador / screenshots pós-alteração | **Não testado** | O servidor local inicia, mas sandbox impede acesso ao socket localhost; não foi possível inspecionar todas as rotas no browser |
| Responsividade nos 10 tamanhos solicitados | **Não testada nesta rodada** | Não há evidência nova de navegador para 4K, desktop, tablet ou mobile |
| LCP / CLS / Lighthouse | **Não testados** | Requer execução browser/Lighthouse em ambiente que alcance o servidor |
| Licenças do acervo preexistente | **Pendente** | Origem/licença não está registrada para 37 imagens anteriores; consultar coluna do CSV |

## Inventário e origem das imagens

O acervo atual contém 43 arquivos raster: 4 criados nesta tarefa, a logo e a foto de atendimento fornecidas pelo cliente, e 37 arquivos anteriores. Não encontrei registro de origem/licença para os 37 arquivos anteriores; por isso, **o uso comercial do acervo completo não está juridicamente confirmado**. As quatro imagens ImageGen não vieram de banco externo/hotlink; são ilustrações geradas, sem alegação de representação de clientes, projeto concluído ou modelo comercial específico. A foto de atendimento e o logo foram fornecidos pelo cliente, mas a autorização formal de uso comercial não foi auditada separadamente.

O [contact sheet original](artifacts/image-contact-sheet.png) registra a mídia antes da troca do catálogo. A [folha de ativos atuais](artifacts/image-audit/ativos-20261014.png) mostra os arquivos ainda usados no site, com dimensões e tamanho. Não há screenshot de página após a mudança porque o browser não conseguiu conectar-se ao servidor local.

## Pendências antes de declarar apto

1. Abrir a versão local em navegador com acesso ao servidor e revisar cada rota nos tamanhos indicados, corrigindo enquadramentos com evidência de screenshot.
2. Executar Lighthouse e medir LCP/CLS em ambiente de navegador.
3. Obter origem/licença/autorização do acervo anterior e confirmação de autorização para os arquivos fornecidos pelo cliente.
4. Substituir imagens ilustrativas por fotos oficiais de modelos específicos quando o cliente fornecer fotos autorizadas.

**Status:** alterações implementadas no código; lint e build aprovados. **Ainda não considerado visualmente aprovado para entrega ao cliente** porque a revisão de navegador, responsividade medida, métricas de desempenho e verificação de licenças não foram concluídas.
