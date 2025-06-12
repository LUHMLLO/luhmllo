export interface RouteItem {
  path: string
  name: string
  title: string
  description?: string
  icon?: string
  component?: unknown
}

const modules = import.meta.glob( '/src/pages/**/*.{astro,mdx}', { eager: true } )

const routes: RouteItem[] = []

for ( const path in modules ) {
  const mod = modules[ path ] as Record<string, any>

  const cleanPath = path
    .replace( '/src/pages', '' )
    .replace( /\/?index\.(astro|mdx)$/, '' )
    .replace( /\.(astro|mdx)$/, '' )

  const name = cleanPath.split( '/' ).pop() || 'unknown'

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
  } )
}

const getFolder = ( route: RouteItem ) =>
  route.path.split( '/' )[ 1 ] || 'root'

const groupedRoutes = routes.reduce( ( acc, route ) => {
  const folder = getFolder( route )
  acc[ folder ] ||= []
  acc[ folder ].push( route )
  return acc
}, {} as Record<string, RouteItem[]> )

for ( const folder in groupedRoutes ) {
  groupedRoutes[ folder ].sort( ( a, b ) => a.name.localeCompare( b.name ) )
}

export const getRoutesByGroup = ( group: string ) => groupedRoutes[ group ] || []
