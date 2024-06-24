import { z } from "astro/zod"

const Zod_Axis = z.enum( [ "x", "y" ] )
export type Axis = z.infer<typeof Zod_Axis>

const Zod_LayerStack = z.enum( [ "under", "over" ] )
export type LayerStack = z.infer<typeof Zod_LayerStack>

const Zod_Boolean = z.boolean()
export type IconSolid = z.infer<typeof Zod_Boolean>
export type IsOpen = z.infer<typeof Zod_Boolean>
