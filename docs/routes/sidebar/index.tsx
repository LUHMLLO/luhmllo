import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <link rel="stylesheet" href={asset("/styles/sidebar.css")} />
      <x-stack id="navigation">
        <nav id="rail">
          <a href="#">
            <i className="icon" style="--fill: 1;">
              health_metrics
            </i>
          </a>
          <x-flex id="menu-icons" className="items-center content-end">
            <a href="#">
              <i className="icon">
                search
              </i>
            </a>
            <a href="#">
              <i className="icon">
                co_present
              </i>
            </a>
            <a href="#">
              <i className="icon">
                docs
              </i>
            </a>
            <a href="#">
              <i className="icon">
                smart_display
              </i>
            </a>
            <hr />
            <button type="button">
              <i className="icon">
                menu
              </i>
            </button>
          </x-flex>
        </nav>

        <x-group id="drawer">
          <span>label</span>
          <a href="#">
            <i className="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i className="icon">
              search
            </i>
            <span>search</span>
            <i class="icon">
              keyboard_command_key
            </i>
          </a>
          <hr />
          <span>label</span>
          <a href="#">
            <i className="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i className="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i className="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i className="icon">
              home
            </i>
            <span>home</span>
          </a>
          <hr />
          <a href="#">
            <i className="icon">
              home
            </i>
            <span>home</span>
          </a>
          <a href="#">
            <i className="icon">
              home
            </i>
            <span>home</span>
          </a>
        </x-group>
      </x-stack>
    </>
  );
}
