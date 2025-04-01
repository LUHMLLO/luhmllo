import { Handlers, PageProps } from "$fresh/server.ts";
import { getSession } from "#lib/functions/session.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const session = getSession(req);
    if (!session) {
      return new Response(null, {
        status: 302,
        headers: { Location: "/" }, // Redirect to login if no session
      });
    }
    return ctx.render({ username: atob(session).split(":")[0] });
  },
};

export default function Dashboard({ data }: PageProps<{ username: string }>) {
  return (
    <div>
      <h1>Welcome, {data.username}!</h1>
      <form method="POST" action="/logout">
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
