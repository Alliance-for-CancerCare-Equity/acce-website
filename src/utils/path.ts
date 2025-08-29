const basePath = '/acce-website'

export const prefixPath = (path: string) => {
  // Check if the path is a root-relative URL (starts with '/')
  // and not a protocol-relative URL (doesn't start with '//')
  // and not our basePath already.
  if (path.startsWith('/') && !path.startsWith('//') && !path.startsWith(basePath)) {
    return `${basePath}${path}`
  }

  return path
}
