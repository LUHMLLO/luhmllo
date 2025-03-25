import { Handlers } from "$fresh/server.ts";
import { destroySession } from "$lib/session.ts";

export const handler: Handlers = {
  POST() {
    const headers = new Headers();
    destroySession(headers);
    headers.set("Location", "/demos/dcoms/login"); // Redirect after logout
    return new Response(null, { status: 302, headers });
  },
};
