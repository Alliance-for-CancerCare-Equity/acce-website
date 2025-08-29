const basePath = process.env.NODE_ENV === 'production' ? '/acce-website' : ''

export const prefixPath = (path: string) => {
  if (basePath && path.startsWith('/') && !path.startsWith(basePath)) {
    return `${basePath}${path}`
  }
  return path
}
