import { Handlers, PageProps } from "$fresh/server.ts";
import { createSession, setSessionCookie } from "#lib/functions/session.ts";

export const handler: Handlers = {
  async POST(req) {
    const formData = await req.formData();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      return new Response("Missing username or password", { status: 400 });
    }

    // Replace this with real authentication (e.g., DB lookup)
    const isAuthenticated = username === "admin" && password === "admin";

    if (!isAuthenticated) {
      return new Response("Invalid credentials", { status: 401 });
    }

    // Generate session token
    const token = createSession(username);
    const headers = new Headers();
    setSessionCookie(headers, token);
    headers.set("Location", "/app/dashboard"); // Redirect after login

    return new Response(null, { status: 302, headers });
  },
};

export default function Page(_props: PageProps) {
  return (
    <form method="POST" action="/">
      <header>
        <i className="icon" aria-hidden="true">
          for_you
        </i>
        <div>
          <h1>DCOMS</h1>
          <p>Sign into your account</p>
        </div>
      </header>

      <fieldset>
        <label for="username">
          <span>Username</span>
          <input
            name="username"
            type="text"
            autocomplete="on"
          />
        </label>
        <label for="password">
          <span>Password</span>
          <input
            name="password"
            type="password"
            autocomplete="current-password"
          />
        </label>
      </fieldset>

      <button type="submit">
        Sign In <i className="icon" aria-hidden="true">login</i>
      </button>
    </form>
  );
}
