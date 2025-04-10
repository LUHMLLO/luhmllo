import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <button type="button">
        <i className="icon">arrow_left_alt</i>
        <span>lead icon</span>
      </button>

      <button type="button">no icons</button>

      <button type="button">
        <i className="icon">add_2</i>
      </button>

      <button type="button">
        <i className="icon">globe</i>
        <span>both icons</span>
        <i className="icon">
          open_in_new
        </i>
      </button>

      <button type="button">
        <span>trail icon</span>
        <i className="icon">arrow_right_alt</i>
      </button>

      <button type="button" disabled>
        <span>disabled</span>
        <i className="icon">block</i>
      </button>
    </>
  );
}
