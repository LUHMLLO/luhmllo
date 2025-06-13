// 1. Flexible Options System:

// includeSubfolders: Control whether to include routes from subfolders
// maxDepth: Limit how deep into the folder structure to go
// excludeFolders: Exclude specific subfolders by name

// 2. Convenience Functions:

// getTopLevelRoutesByGroup(): Only gets direct children (no subfolders)
// getRoutesByGroupExcluding(): Excludes specific subfolders
// getSubfoldersInGroup(): Lists all subfolders in a group
// getRoutesForSubfolder(): Gets routes for a specific subfolder

// 3. Enhanced Route Metadata:

// depth: How many levels deep the route is
// parentFolder: The immediate parent folder name

// ---
// import { getTopLevelRoutesByGroup } from 'src/utils/getPageGroup';
// const pages = getTopLevelRoutesByGroup('projects');
// ---

// ---
// import { getRoutesByGroupExcluding } from 'src/utils/getPageGroup';
// const pages = getRoutesByGroupExcluding('projects', ['halo']);
// ---

export interface RouteItem {
  path: string
  name: string
  title: string
  description?: string
  icon?: string
  component?: unknown
  depth: number
  parentFolder?: string
}

export interface RouteGroupOptions {
  includeSubfolders?: boolean
  maxDepth?: number
  excludeFolders?: string[]
}

// Cache for routes to avoid re-processing
let routesCache: RouteItem[] | null = null

// Function to get all routes (lazy loading)
const getAllRoutes = async (): Promise<RouteItem[]> => {
  // Return cached routes if already processed
  if ( routesCache ) {
    return routesCache
  }

  // Use non-eager import to avoid circular dependencies
  const modules = import.meta.glob( '/src/pages/**/*.{astro,mdx}' )
  const routes: RouteItem[] = []

  // Process modules one by one
  for ( const path in modules ) {
    try {
      const mod = await modules[ path ]() as Record<string, any>

      const cleanPath = path
        .replace( '/src/pages', '' )
        .replace( /\/?index\.(astro|mdx)$/, '' )
        .replace( /\.(astro|mdx)$/, '' )

      const pathSegments = cleanPath.split( '/' ).filter( Boolean )
      const name = pathSegments[ pathSegments.length - 1 ] || 'unknown'
      const depth = pathSegments.length
      const parentFolder = pathSegments[ pathSegments.length - 2 ]

      routes.push( {
        path: cleanPath || '/',
        name,
        title:
          mod.title ||
          name.replace( /[-_]/g, ' ' ).replace( /\b\w/g, l => l.toUpperCase() ) ||
          'Untitled',
        description:
          mod.description ||
          mod.frontmatter?.description ||
          'No description available',
        icon: mod.icon || mod.frontmatter?.icon,
        component: mod.default,
        depth,
        parentFolder,
      } )
    } catch ( error ) {
      console.warn( `Failed to load module: ${ path }`, error )
    }
  }

  // Cache the results
  routesCache = routes
  return routes
}

export const getFolder = ( route: RouteItem ) =>
  route.path.split( '/' )[ 1 ] || 'root'

// Enhanced function to get routes with subfolder control
export const getRoutesByGroup = async (
  group: string,
  options: RouteGroupOptions = {}
): Promise<RouteItem[]> => {
  const routes = await getAllRoutes()

  const {
    includeSubfolders = true,
    maxDepth = Infinity,
    excludeFolders = []
  } = options

  const groupRoutes = routes.filter( route => {
    const routeFolder = getFolder( route )

    // Must belong to the requested group
    if ( routeFolder !== group ) return false

    // Check depth restrictions
    if ( route.depth > maxDepth ) return false

    // Check excluded folders
    if ( excludeFolders.some( excluded => route.path.includes( `/${ excluded }/` ) ) ) {
      return false
    }

    // If not including subfolders, only include direct children
    if ( !includeSubfolders ) {
      // For group 'projects', only include routes like '/projects/something'
      // but not '/projects/halo/about' (which would be depth 3)
      const expectedDepth = group === 'root' ? 1 : 2
      return route.depth <= expectedDepth
    }

    return true
  } )

  // Sort by name
  return groupRoutes.sort( ( a, b ) => a.name.localeCompare( b.name ) )
}

// Convenience functions for common use cases
export const getTopLevelRoutesByGroup = async ( group: string ): Promise<RouteItem[]> =>
  getRoutesByGroup( group, { includeSubfolders: false } )

export const getRoutesByGroupExcluding = async (
  group: string,
  excludeFolders: string[]
): Promise<RouteItem[]> =>
  getRoutesByGroup( group, { excludeFolders } )

// Get all unique folders for a group (useful for navigation)
export const getSubfoldersInGroup = async ( group: string ): Promise<string[]> => {
  const routes = await getAllRoutes()
  const groupRoutes = routes.filter( route => getFolder( route ) === group )
  const subfolders = new Set<string>()

  groupRoutes.forEach( route => {
    if ( route.parentFolder && route.depth > 2 ) {
      subfolders.add( route.parentFolder )
    }
  } )

  return Array.from( subfolders ).sort()
}

// Get routes for a specific subfolder within a group
export const getRoutesForSubfolder = async (
  group: string,
  subfolder: string
): Promise<RouteItem[]> => {
  const routes = await getAllRoutes()
  return routes.filter( route => {
    const routeFolder = getFolder( route )
    return routeFolder === group && route.path.startsWith( `/${ group }/${ subfolder }/` )
  } ).sort( ( a, b ) => a.name.localeCompare( b.name ) )
}