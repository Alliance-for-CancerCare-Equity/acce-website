/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isGithubActions ? '/acce-website' : '',
  assetPrefix: isGithubActions ? '/acce-website' : '',
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
