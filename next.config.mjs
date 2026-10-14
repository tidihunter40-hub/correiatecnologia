/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }];
  },
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'host', value: 'correiatecnologia.com.br' }], destination: 'https://www.correiatecnologia.com.br/:path*', permanent: true },
      { source: '/servicos/controle-de-acesso-facial', destination: '/controle-de-acesso-facial-salvador', statusCode: 301 },
      { source: '/servicos/relogios-de-ponto', destination: '/relogio-de-ponto-facial-salvador', statusCode: 301 },
      { source: '/solucoes/controle-de-acesso-facial', destination: '/controle-de-acesso-facial-salvador', statusCode: 301 },
      { source: '/solucoes/relogios-de-ponto', destination: '/relogio-de-ponto-facial-salvador', statusCode: 301 },
      { source: '/servicos/automacao-de-entradas', destination: '/solucoes/automacao-de-entradas', statusCode: 301 },
      { source: '/servicos/venda-de-equipamentos', destination: '/solucoes/venda-de-equipamentos', statusCode: 301 },
      { source: '/servicos/locacao-de-equipamentos', destination: '/solucoes/locacao-de-equipamentos', statusCode: 301 },
      { source: '/servicos/instalacao-de-solucoes', destination: '/solucoes/instalacao-e-suporte', statusCode: 301 },
    ];
  },
};
export default nextConfig;
