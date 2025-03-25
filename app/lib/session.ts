import {
  deleteCookie,
  getCookies,
  setCookie,
} from "https://deno.land/std@0.224.0/http/cookie.ts";

const SESSION_COOKIE_NAME = "session_token";

export function createSession(username: string): string {
  // Generate a simple session token (Use a proper UUID or JWT in production)
  return btoa(`${username}:${crypto.randomUUID()}`);
}

export function setSessionCookie(headers: Headers, token: string) {
  setCookie(headers, {
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true, // Prevents JavaScript access
    secure: true, // Use HTTPS in production
    sameSite: "Lax",
    path: "/",
  });
}

export function getSession(req: Request): string | null {
  const cookies = getCookies(req.headers);
  return cookies[SESSION_COOKIE_NAME] || null;
}

export function destroySession(headers: Headers) {
  deleteCookie(headers, SESSION_COOKIE_NAME, { path: "/" });
}
