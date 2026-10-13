# Relatório técnico — Correia Tecnologia

## Escopo entregue

- Site institucional responsivo em Next.js 15, React 19 e TypeScript.
- PWA com manifest instalável, ícones derivados da marca oficial, Service Worker com cache limitado a recursos públicos e tela offline.
- Navegação inferior compartilhada em celular e tablet, com estado ativo por rota e painel acessível de páginas adicionais.
- Controles de instalação para navegadores compatíveis e instruções específicas para iPhone/iPad; aviso de atualização sem recarga automática.
- Página inicial fiel ao modelo visual aprovado, com a identidade da Correia, banner, serviços, apresentação institucional, indicadores informativos e segmentos.
- Páginas de Sobre, Soluções, Equipamentos, Segmentos, Projetos, Blog, Contato e Privacidade.
- Páginas individuais para seis soluções e seis segmentos.
- Catálogo sem checkout, pagamento ou processamento de pedidos.
- Formulário que prepara uma mensagem para revisão e envio pelo WhatsApp; o site não persiste os campos.
- Galeria de Projetos reservada a registros reais autorizados.

## SEO e segurança

- Metadados únicos por rota pública, com títulos e descrições por página, canonical absoluto baseado no domínio oficial, Open Graph e Twitter Cards.
- Home otimizada para marca e controle de acesso em Salvador; páginas de serviços e segmentos têm títulos e descrições específicos, sem criar rotas duplicadas para os mesmos conteúdos.
- Sitemap inclui páginas públicas, serviços e segmentos existentes. `lastModified` foi removido porque o projeto não mantém datas confiáveis por página; páginas de erro e offline ficam fora.
- `robots.txt` permite rastreamento público e aponta para o sitemap oficial.
- JSON-LD `WebSite`, `Organization` e `LocalBusiness` consistente com a marca e com os dados centralizados do projeto; páginas individuais de serviço têm schema `Service` e BreadcrumbList, e segmentos têm BreadcrumbList.
- Sem `Product` ou `BlogPosting` estruturados: o catálogo não identifica modelos comerciais específicos e o blog ainda não tem artigos em URLs individuais.
- SEO local direcionado a Salvador e Bahia; sem coordenadas, horários, avaliações ou perfis sociais inventados.
- Não foi encontrado token de verificação do Search Console ou ID GA4 no código. Nenhum token ou Measurement ID foi criado.
- Cabeçalhos configurados: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy`.
- Texto alternativo nas imagens informativas; imagens ilustrativas identificadas como tais.
- Cache do Service Worker exclui requisições não GET, APIs, URLs com parâmetros, respostas privadas ou `no-store`, recursos com `Set-Cookie` e requisições com `Authorization`.
- Campos de formulário, tokens e dados de autenticação não são gravados pelo Service Worker.

## Verificações executadas

- `npm run lint` (`tsc --noEmit`): aprovado após as alterações de SEO e Contato.
- `npm run build`: um build em cópia isolada concluiu e pré-renderizou as 27 páginas/rotas listadas. Essa cópia desabilitou a checagem interna do Next para TypeScript e ESLint; a checagem de tipos foi feita separadamente com `npm run lint`.
- Build e servidor de desenvolvimento no diretório OneDrive: a compilação iniciou, mas o Next falhou ao ler `.next-output/diagnostics/framework.json` (erro `EINVAL` em arquivo reparse-point). Em outra tentativa, o Next ficou tentando instalar dependências que já estão presentes. Portanto, não foi possível confirmar build final no diretório original após a última alteração apenas de texto dos títulos.
- Rotas estáticas inspecionadas na cópia: Home, páginas principais, seis serviços e seis segmentos; títulos individuais e canonicals foram gerados. Sitemap e robots foram gerados pela arquitetura Next (`/sitemap.xml`, `/robots.txt`).
- Google Maps: links são gerados com `api=1`, com busca de local separada da rota (`/maps/search/` e `/maps/dir/`), conforme o formato oficial de Maps URLs. O destino usa o endereço central sem o CEP pendente de confirmação.
- O iframe do mapa, o carregamento externo do Google Maps e a abertura real de rotas não puderam ser testados no navegador: a sandbox bloqueou a conexão local ao servidor de homologação.
- O formulário, WhatsApp, links de telefone e botão de cópia foram revisados no código; não houve teste de envio real para não abrir conversa ou transmitir dados.
- Capturas de tela desktop/mobile/tablet não foram produzidas porque o navegador de revisão não conseguiu acessar o servidor local nesta execução.
- `node --check public/sw.js`: aprovado.
- `manifest.webmanifest`: JSON válido; ícones PNG verificados em 192×192, 512×512 e 512×512 maskable.
- Saída estática da seção de equipamentos: 3 cards e 3 links de orçamento personalizados verificados.
- Checagem estática de 660 destinos de links internos: sem rotas ausentes.
- Checagem de 20 caminhos únicos de imagens locais: todos encontrados.
- Destino comercial WhatsApp verificado: `5571991504761`.
- A inspeção visual anterior do site não cobre a nova navegação PWA. A verificação automatizada do navegador foi interrompida porque a ferramenta não conseguiu confirmar com segurança a URL da janela.
- Os fluxos reais de instalação, atualização e operação offline ainda precisam de homologação em navegador seguro (HTTPS) e dispositivos compatíveis.
- A barra foi configurada por CSS para telas de até 1199px, incluindo safe area; não foi possível confirmar visualmente todas as resoluções solicitadas nesta rodada.

## Limites e itens antes da publicação

- Não foi feita publicação nem alteração de DNS.
- Search Console e Perfil da Empresa do Google não foram acessados. O domínio está preparado no código, mas propriedade, indexação, desempenho e presença no Maps não foram confirmados. Uma propriedade de domínio exige verificação do proprietário via DNS TXT; o token deve ser obtido no Search Console, sem ser inventado.
- Acesso ao domínio público foi indisponível na ferramenta de navegação desta execução; não foi possível auditar a resposta real de `www`/sem `www`, HTTP/HTTPS, redirecionamentos ou indexação. Nenhum redirecionamento foi criado sem mapa confirmado de URLs antigas.
- O endereço central atual no projeto é Av. Fernandes da Cunha, 340, sala 301, Mares, Salvador–BA, CEP 40410-200. O CEP ainda precisa ser confirmado pelo responsável antes de publicar. O código não usa coordenadas nem Place ID.
- O projeto não fornece um e-mail comercial único confirmado. A página oferece formulário, telefone e WhatsApp; não foi criado endereço `mailto:` fictício. Confirmar e-mail para adicionar o quarto canal solicitado.
- A página Contato agora tem mapa incorporado com links de fallback para busca e rotas, formulário com máscara de WhatsApp e mensagem explícita de que o usuário ainda precisa revisar e enviar a mensagem. A incorporação do mapa pode depender de disponibilidade/regras externas do Google.
- Homologação PWA pendente: inspeção visual mobile/tablet/desktop, instalação em Android/iOS/desktop, atualização do Service Worker e navegação offline.
- A galeria segue sem projetos porque ainda não foram fornecidas fotos reais com autorização de uso.
- Não há estatísticas, depoimentos, clientes ou certificações inventados. Indicadores numéricos do mockup não foram usados.
- Revisar a política de privacidade conforme o processo real de atendimento.
- Não foi executada auditoria automatizada Lighthouse, varredura de vulnerabilidade, teste de penetração ou auditoria de acessibilidade com ferramenta automatizada.
