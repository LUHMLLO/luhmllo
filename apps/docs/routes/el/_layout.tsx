import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <main id="app" className="min-h-[100dvh]">
      <underlay className="gridlines fixed inset-0 w-[100dvw] h-[100dvh] pointer-events-none -z-10" />
      <div
        className="grid auto-rows-max gap-sm p-xl min-h-[100dvh]"
        style="place-content: safe center;"
      >
        <Component />
      </div>
    </main>
  );
}
