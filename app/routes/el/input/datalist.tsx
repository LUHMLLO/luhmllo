import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <input type="text" id="idl" list="example-list" />{" "}
      <datalist id="example-list">
        <option value="Example #1"></option>
        <option value="Example #2"></option>
        <option value="Example #3"></option>
      </datalist>
    </>
  );
}
