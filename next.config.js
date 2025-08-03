/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',
  assetPrefix: '/website/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig