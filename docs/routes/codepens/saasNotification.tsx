import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>      <link rel="stylesheet" href={asset("/styles/codepens/saasNotification.css")} />

      <x-block id="notification">
        <x-row style="flex-wrap: wrap;">
          <figure>
            <img
              src="https://cdn.dribbble.com/userupload/36827646/file/original-24ed8e5b476e7896326891445660a9f4.png?resize=1024x768&vertical=center"
              alt="thumbnail"
            />
          </figure>

          <x-group>
            <span>Time Sensitive</span>
            <h6>Gross House</h6>
            <p>Property Offer</p>
          </x-group>
        </x-row>

        <hr />

        <x-row style="align-items: start;">
          <i class="icon" style="--fill: 1; --size: var(--xl);">
            schedule
          </i>
          <p>
            Leave on Time Sensitive notifications from Props? This allows Props
            to deliver important notifications inmmediately
          </p>
        </x-row>

        <hr />

        <x-row style="flex-wrap: wrap;">
          <button>Turn Off</button>
          <button>Leave On</button>
        </x-row>
      </x-block>
    </>
  );
}
