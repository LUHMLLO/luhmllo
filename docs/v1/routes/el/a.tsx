import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-grid style="gap: var(--nm); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <a>
        <i className="icon">asterisk</i>lead icon
      </a>
      <a href={"#" + crypto.randomUUID()}>
        <i className="icon">asterisk</i>span
      </a>

      <a>no icons</a>
      <a href={"#" + crypto.randomUUID()}>no icons</a>

      <a>
        <i className="icon">asterisk</i>both icons<i className="icon">
          asterisk
        </i>
      </a>
      <a href={"#" + crypto.randomUUID()}>
        <i className="icon">asterisk</i>both icons<i className="icon">
          asterisk
        </i>
      </a>

      <a>
        trail icon<i className="icon">asterisk</i>
      </a>
      <a href={"#" + crypto.randomUUID()}>
        trail icon<span className="icon">asterisk</span>
      </a>
    </x-grid>
  );
}
