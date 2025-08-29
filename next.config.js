/** @type {import('next').NextConfig} */
const isGithubPages = process.env.IS_GITHUB_PAGES === 'true'

console.log(
  '[next.config] IS_GITHUB_PAGES =',
  process.env.IS_GITHUB_PAGES ?? '(unset)',
  '| basePath =',
  isGithubPages ? '/acce-website' : '',
  '| assetPrefix =',
  isGithubPages ? '/acce-website' : ''
)

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/acce-website' : '',
  assetPrefix: isGithubPages ? '/acce-website' : '',
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
}

module.exports = nextConfig
