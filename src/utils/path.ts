const basePath = '/acce-website'

export const prefixPath = (path: string) => {
  // Ensure the path starts with a slash and doesn't already have the prefix
  if (path.startsWith('/') && !path.startsWith(basePath)) {
    return `${basePath}${path}`
  }
  return path
}
