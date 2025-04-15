import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <x-window style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">
        <x-sublayer className="gridlines" style="visibility: visible;" />
        <x-grid style="gap: var(--sm, 10px); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
          <Component />
        </x-grid>
      </x-window>
    </>
  );
}
