import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <label htmlFor="checkbox1">
        <input
          id="checkbox1"
          name="checkbox"
          type="checkbox"
          checked
        />{" "}
        Choice A
      </label>

      <label htmlFor="checkbox2">
        <input id="checkbox2" name="checkbox" type="checkbox" /> Choice B
      </label>

      <label htmlFor="checkbox3">
        <input id="checkbox3" name="checkbox" type="checkbox" /> Choice C
      </label>
    </>
  );
}
