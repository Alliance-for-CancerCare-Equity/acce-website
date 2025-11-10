/** @type {import('next').NextConfig} */
const isGithubPages = process.env.IS_GITHUB_PAGES === 'true'

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/acce-website' : '',
  assetPrefix: isGithubPages ? '/acce-website' : '',
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

module.exports = withMDX(nextConfig)
