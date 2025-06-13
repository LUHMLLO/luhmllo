/**
 * Extracts the base path from a given pathname by segment count.
 * Example: /projects/halo/about -> basePath('/projects/halo/about', 2) => "/projects/halo"
 */
export function getBasePath( pathname: string, segmentCount = 2 ): string {
  const segments = pathname.split( '/' ).filter( Boolean )
  const base = segments.slice( 0, segmentCount ).join( '/' )
  return `/${ base }`
}