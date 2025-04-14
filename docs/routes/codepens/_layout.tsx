import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <x-sublayer className="gridlines" style="visibility: visible;" />
      <x-window>
        <Component />
      </x-window>
    </>
  );
}
