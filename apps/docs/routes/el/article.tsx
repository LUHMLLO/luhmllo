import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <article>
      <header>
        <h1>Artitle Heading</h1>
        <time>Published on January 1, 2024 by Lily</time>
      </header>
      <p>Content of the article goes here...</p>
      <footer>
        <p>
          Tags: <a href={"#" + crypto.randomUUID()}>tag1</a>,{" "}
          <a href={"#" + crypto.randomUUID()}>tag2</a>,{" "}
          <a href={"#" + crypto.randomUUID()}>tag3</a>
        </p>
      </footer>
    </article>
  );
}
