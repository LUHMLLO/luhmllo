export const prerender = false
import type { APIRoute } from "astro"

export const POST: APIRoute = async ( { request } ) => {
  const data = await request.formData()

  console.log( 'Form received:', Object.fromEntries( data ) )

  return new Response(
    JSON.stringify( { message: 'Form submitted successfully.' } ),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}
