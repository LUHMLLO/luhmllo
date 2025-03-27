import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <div className="grid gap-xs place-content-center w-100 h-[100dvh]">
      <div className="flex gap-[inherit]">
        <button type="button">
          <i className="icon">asterisk</i>lead icon
        </button>
        <button type="button">no icons</button>
        <button type="button">
          <i className="icon">asterisk</i>both icons<i className="icon">
            asterisk
          </i>
        </button>
        <button type="button">
          trail icon<i className="icon">asterisk</i>
        </button>
      </div>
      <div className="flex gap-[inherit]">
        <button type="button">
          <i className="icon">asterisk</i>lead icon
        </button>
        <button type="button">no icons</button>
        <button type="button">
          <i className="icon">asterisk</i>both icons<i className="icon">
            asterisk
          </i>
        </button>
        <button type="button">
          trail icon<i className="icon">asterisk</i>
        </button>
      </div>
    </div>
  );
}
