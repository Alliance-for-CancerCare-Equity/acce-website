import nextConfig from '../../next.config.js'

export const prefixPath = (path: string) => {
  if (nextConfig.basePath && !path.startsWith(nextConfig.basePath)) {
    return `${nextConfig.basePath}${path}`
  }
  return path
}
