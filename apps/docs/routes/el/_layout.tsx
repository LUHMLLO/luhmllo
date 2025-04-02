import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <main id="app" className="min-h-[100dvh]">
      <x-sublayer className="gridlines visible" />
      <x-grid
        className="auto-rows-max gap-sm p-xl min-h-[100dvh]"
        style="place-content: safe center;"
      >
        <Component />
      </x-grid>
    </main>
  );
}
