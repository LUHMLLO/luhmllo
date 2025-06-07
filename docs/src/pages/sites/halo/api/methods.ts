import type { APIRoute } from "astro"

// export const POST: APIRoute = async ( { request } ) => {
//   const data = await request.formData()
//   const name = data.get( "name" )
//   const email = data.get( "email" )
//   const message = data.get( "message" )
//   // Validate the data - you'll probably want to do more than this
//   if ( !name || !email || !message ) {
//     return new Response(
//       JSON.stringify( {
//         message: "Missing required fields",
//       } ),
//       { status: 400 }
//     )
//   }

//   return new Response(
//     JSON.stringify( {
//       message: "Success!"
//     } ),
//     { status: 200 }
//   )
// }

export const POST: APIRoute = async ( { request } ) => {
  const data = await request.formData()

  // Debug log
  console.log( 'Form received:', Object.fromEntries( data ) )

  // Dummy JSON response
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
