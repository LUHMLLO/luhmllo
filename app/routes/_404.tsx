import { asset, Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <img
        src={asset("/media/logo.svg")}
        width="128"
        height="128"
        alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      <h1>404 - Page not found</h1>
      <p>
        The page <code>{props.url.pathname}</code> doesn't exist.
      </p>
      <a href="/">Go back home</a>
    </>
  );
}
