import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <x-sublayer className="gridlines" style="visibility: visible;" />
      <x-window style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <Component />
      </x-window>
    </>
  );
}
