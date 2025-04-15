import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-wrap style="gap: var(--nm, 20px); grid-auto-rows: max-content; min-height: 100dvh; place-content: safe center;">
      <x-stack style="gap: var(--md);">
        <button type="button">
          <i className="icon">arrow_left_alt</i>
          <span>lead icon</span>
        </button>
        <button type="button">no icons</button>
        <button type="button">
          <i className="icon">add_2</i>
        </button>
        <button type="button">
          <i className="icon">globe</i>
          <span>both icons</span>
          <i className="icon">
            open_in_new
          </i>
        </button>
        <button type="button">
          <span>trail icon</span>
          <i className="icon">arrow_right_alt</i>
        </button>
        <button type="button" disabled>
          <span>disabled</span>
          <i className="icon">block</i>
        </button>
      </x-stack>

      <x-stack style="gap: var(--md);">
        <button type="button" data-props="--primary">
          <i className="icon">arrow_left_alt</i>
          <span>lead icon</span>
        </button>
        <button type="button" data-props="--primary">no icons</button>
        <button type="button" data-props="--primary">
          <i className="icon">add_2</i>
        </button>
        <button type="button" data-props="--primary">
          <i className="icon">globe</i>
          <span>both icons</span>
          <i className="icon">
            open_in_new
          </i>
        </button>
        <button type="button" data-props="--primary">
          <span>trail icon</span>
          <i className="icon">arrow_right_alt</i>
        </button>
        <button type="button" disabled data-props="--primary">
          <span>disabled</span>
          <i className="icon">block</i>
        </button>
      </x-stack>

      <x-stack style="gap: var(--md);">
        <button type="button" data-props="--secondary">
          <i className="icon">arrow_left_alt</i>
          <span>lead icon</span>
        </button>
        <button type="button" data-props="--secondary">no icons</button>
        <button type="button" data-props="--secondary">
          <i className="icon">add_2</i>
        </button>
        <button type="button" data-props="--secondary">
          <i className="icon">globe</i>
          <span>both icons</span>
          <i className="icon">
            open_in_new
          </i>
        </button>
        <button type="button" data-props="--secondary">
          <span>trail icon</span>
          <i className="icon">arrow_right_alt</i>
        </button>
        <button type="button" disabled data-props="--secondary">
          <span>disabled</span>
          <i className="icon">block</i>
        </button>
      </x-stack>

      <x-stack style="gap: var(--md);">
        <button type="button" data-props="--tertiary">
          <i className="icon">arrow_left_alt</i>
          <span>lead icon</span>
        </button>
        <button type="button" data-props="--tertiary">no icons</button>
        <button type="button" data-props="--tertiary">
          <i className="icon">add_2</i>
        </button>
        <button type="button" data-props="--tertiary">
          <i className="icon">globe</i>
          <span>both icons</span>
          <i className="icon">
            open_in_new
          </i>
        </button>
        <button type="button" data-props="--tertiary">
          <span>trail icon</span>
          <i className="icon">arrow_right_alt</i>
        </button>
        <button type="button" disabled data-props="--tertiary">
          <span>disabled</span>
          <i className="icon">block</i>
        </button>
      </x-stack>

      <x-stack style="gap: var(--md);">
        <button type="button" data-props="--accent">
          <i className="icon">arrow_left_alt</i>
          <span>lead icon</span>
        </button>
        <button type="button" data-props="--accent">no icons</button>
        <button type="button" data-props="--accent">
          <i className="icon">add_2</i>
        </button>
        <button type="button" data-props="--accent">
          <i className="icon">globe</i>
          <span>both icons</span>
          <i className="icon">
            open_in_new
          </i>
        </button>
        <button type="button" data-props="--accent">
          <span>trail icon</span>
          <i className="icon">arrow_right_alt</i>
        </button>
        <button type="button" disabled data-props="--accent">
          <span>disabled</span>
          <i className="icon">block</i>
        </button>
      </x-stack>

      <x-stack style="gap: var(--md);">
        <button type="button" data-props="--context">
          <i className="icon">arrow_left_alt</i>
          <span>lead icon</span>
        </button>
        <button type="button" data-props="--context">no icons</button>
        <button type="button" data-props="--context">
          <i className="icon">add_2</i>
        </button>
        <button type="button" data-props="--context">
          <i className="icon">globe</i>
          <span>both icons</span>
          <i className="icon">
            open_in_new
          </i>
        </button>
        <button type="button" data-props="--context">
          <span>trail icon</span>
          <i className="icon">arrow_right_alt</i>
        </button>
        <button type="button" disabled data-props="--context">
          <span>disabled</span>
          <i className="icon">block</i>
        </button>
      </x-stack>
    </x-wrap>
  );
}
