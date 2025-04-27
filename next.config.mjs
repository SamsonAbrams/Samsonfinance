/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['localhost', 'samsonfinance.pages.dev'],
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig; 