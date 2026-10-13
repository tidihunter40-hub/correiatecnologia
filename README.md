# Correia Tecnologia

Site institucional em Next.js e TypeScript, com estilos responsivos próprios.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run lint
npm run build
npm run start
```

## Preparação para Vercel

- Importe a raiz deste repositório como projeto Next.js; o `vercel.json` declara o framework sem substituir o build automático.
- O projeto usa o `package-lock.json`, o comando `npm run build` e a saída padrão `.next` do Next.js. Não configure um diretório de saída estático.
- O runtime está fixado em Node.js 24.x pelo `package.json`.
- O código não exige variáveis de ambiente nem serviços externos para compilar. `GOOGLE_SITE_VERIFICATION` é opcional e serve somente à verificação por meta tag no Search Console. Nunca inclua tokens em arquivos versionados ou variáveis `NEXT_PUBLIC_*`.
- Deploy Preview recebe `noindex` e `robots.txt` bloqueia rastreamento. A produção mantém indexação pública.
- Depois de uma publicação autorizada, configure `correiatecnologia.com.br` e `www.correiatecnologia.com.br` em **Project → Settings → Domains**, conclua as instruções DNS mostradas pela Vercel e valide o domínio canônico. Nenhuma vinculação, publicação ou mudança DNS foi feita nesta preparação.

## Páginas

- Início, Sobre e apresentação institucional
- Soluções e seis páginas de detalhe
- Catálogo sem checkout
- Segmentos e seis páginas de detalhe
- Projetos (galeria reservada a imagens autorizadas)
- Blog, Contato e Política de Privacidade
- Sitemap XML, robots.txt, metadados por página, canonicals e LocalBusiness JSON-LD

## Conteúdo a confirmar antes da publicação

- Telefone, WhatsApp e endereço conferidos no site original.
- O endereço de e-mail do site atual diverge entre o texto visível e o destino `mailto`; por isso não foi incluído.
- A composição e as imagens ilustrativas seguem os modelos visuais fornecidos e imagens que já aparecem no site oficial.
- Estatísticas, depoimentos, clientes e certificações não foram inventados nem publicados.
- A galeria de projetos permanece sem imagens até a empresa fornecer registros autorizados.
- Revisar a política de privacidade com o processo real de atendimento antes de publicar.

O site não contém checkout, pagamento ou painel administrativo. Nenhuma publicação foi feita.

## Verificações realizadas

- `npm run lint` (TypeScript) aprovado.
- `npm run build` aprovado; o Next.js gerou 28 páginas estáticas/pré-renderizadas.
- Checagem estática de 660 links internos e 20 caminhos de imagem.
- Inspeção visual desktop/celular e verificação do menu móvel, CTAs e destino de WhatsApp no navegador local.
- Relatório com escopo, verificações e itens pendentes: [RELATORIO_TECNICO.md](./RELATORIO_TECNICO.md).
## Google Search Console

O sitemap público está em `https://correiatecnologia.com.br/sitemap.xml` e é anunciado em `/robots.txt`.

Para verificar uma propriedade de prefixo de URL pelo método da meta tag HTML, configure o token fornecido pelo Google (sem a tag `<meta>`) na variável `GOOGLE_SITE_VERIFICATION` do projeto Vercel e faça novo build/deploy depois de confirmar o projeto e o domínio. Para uma propriedade do tipo Domínio, adicione o registro DNS TXT fornecido pelo Search Console ao provedor DNS. Após a verificação, envie o sitemap no Search Console e use Inspeção de URL para pedir rastreamento de `/` e `/solucoes/relogios-de-ponto`.

O repositório não contém o token de verificação. Não use um token presumido nem publique a configuração antes de confirmar a propriedade.
