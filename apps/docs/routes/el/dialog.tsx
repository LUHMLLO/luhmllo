import { type PageProps } from "$fresh/server.ts";
import DialogDemostration from "#islands/dialog.tsx";

export default function Page(_props: PageProps) {
  return (
    <>
      <dialog open>
      </dialog>

      <DialogDemostration />
    </>
  );
}
