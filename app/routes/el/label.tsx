import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <label htmlFor="example">
      im a label example{" "}
      <input
        type="text"
        name="example"
        placeholder="im just an example"
        disabled
      />
    </label>
  );
}
