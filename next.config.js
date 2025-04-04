/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'hoquochung.cloud',
          },
        ],
        destination: 'https://www.hoquochung.cloud',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig; 