import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <select id="select">
        <optgroup label="Option Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
      </select>

      <select id="select_multiple" multiple>
        <optgroup label="Option Group">
          <option>Option One</option>
          <option>Option Two</option>
          <option>Option Three</option>
        </optgroup>
      </select>
    </>
  );
}
