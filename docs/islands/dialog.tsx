import { useEffect, useRef } from "preact/hooks";

export default function DialogDemostration() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    modalRef.current = document.getElementById("modal") as HTMLDialogElement;
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => modalRef.current?.showModal()}
      >
        open modal
      </button>

      <dialog id="modal">
        <x-flex className="items-center px-md h-[50px]">
          <p>Service clients</p>
          <button type="button" className="contents">
            <i className="icon">close_small</i>
          </button>
        </x-flex>

        <label htmlFor="searchbar" className="flex">
          <i className="icon">search</i>
          <input
            type="text"
            className="rounded-none w-full"
            name="searchbar"
            placeholder="Type in to filter list"
          />
          <i className="icon">close</i>
        </label>

        <x-grid className="gap-md place-items-center p-xl text-center">
          <i className="icon">block</i>
          <x-block>
            <p>No service clients found.</p>
            <p>Try another search query or add a new service client.</p>
          </x-block>
          <button type="button">
            <i className="icon">add_2</i>Add client
          </button>
        </x-grid>
      </dialog>
    </>
  );
}
