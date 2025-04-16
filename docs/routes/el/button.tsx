import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-wrap style="gap: var(--nm, 20px); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      {["--primary", "--secondary", "--accent", "", "--text"].map((
        prop,
      ) => (
        <x-stack style="gap: var(--md);">
          <button type="button" data-props={`${prop}`}>
            <i className="icon">arrow_left_alt</i>
            <span>lead icon</span>
          </button>
          <button type="button" data-props={`${prop}`}>
            <span>no icons</span>
          </button>
          <button type="button" data-props={`${prop}`}>
            <i className="icon">add_2</i>
          </button>
          <button type="button" data-props={`${prop}`}>
            <i className="icon">globe</i>
            <span>both icons</span>
            <i className="icon">
              open_in_new
            </i>
          </button>
          <button type="button" data-props={`${prop}`}>
            <span>trail icon</span>
            <i className="icon">arrow_right_alt</i>
          </button>
          <button type="button" data-props={`${prop}`} disabled>
            <span>disabled</span>
            <i className="icon">block</i>
          </button>
        </x-stack>
      ))}
    </x-wrap>
  );
}
