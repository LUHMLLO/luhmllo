export function Route() {
  return (
    <>
      <h2>
        Anchor <small class="clr-subtext txt-nm txt-lowercase">native</small>
      </h2>

      <p>
        <code lang="html">
          <a />
        </code>{" "}
        elements in web development create hyperlinks, which are used to
        navigate to other pages, sections within a page, or external resources.
        They can be styled to look like buttons or other interactive elements,
        making them versatile for navigation and linking purposes. Anchors are
        essential for creating a connected and interactive web experience.
      </p>

      <div data-props="--2" class="grid outln outln-primary radius-3xs">
        <code lang="html">
          <a>
            <span>
              anchor
            </span>
          </a>
        </code>
        <div class="align-center[items] flex flex-col place-center p-5xl">
          <a>
            <span>
              anchor
            </span>
          </a>
        </div>
      </div>

      <div data-props="--2" class="grid outln outln-primary radius-3xs">
        <code lang="html">
          <a href="#">
            <span>
              anchor
            </span>
          </a>
        </code>
        <div class="align-center[items] flex flex-col place-center p-5xl">
          <a href="#anchor--a">
            <span>
              anchor
            </span>
          </a>
        </div>
      </div>

      <h3>
        -- parentElement <small class="clr-subtext txt-sm">PROPS</small>
      </h3>

      | prop | description | requires | | ----------- |
      ----------------------------------- | ---------- | | - - button | changes
      style to look like a button | - | | - - outline | sets outline style | - -
      button | | - - fab | changes style to look like a FAB | - - button |

      <div data-props="--2" class="grid g-sm">
        <div class="grid outln outln-primary radius-3xs">
          <code lang="html">
            <a data-props="--button --outline">
              <span>
                anchor
              </span>
            </a>
          </code>

          <div class="flex place-center p-5xl">
            <a data-props="--button --outline">
              <span>anchor</span>
            </a>
          </div>
        </div>

        <div class="grid outln outln-primary radius-3xs">
          <code lang="html">
            <a href="javascript:void(0)" data-props="--button --outline --fab">
              <span className="icon">
                add_circle
              </span>
            </a>
          </code>

          <div class="flex place-center p-5xl">
            <a data-props="--button --outline --fab">
              <span className="icon">
                add_circle
              </span>
            </a>
          </div>
        </div>
      </div>

      ### -- childrenElements <small class="clr-subtext txt-sm">PROPS</small>

      | prop | description | purpose | | --------- | ---------------------- |
      ------------------------------ | | - - lead | set’s as leading item | left
      side optical corrections | | - - trail | set’s as trailing item | right
      side optical corrections |

      <div data-props="--2" class="grid g-sm">
        <div class="grid outln outln-primary radius-3xs">
          <code lang="html">
            <a data-props="--button --outline">
              <span className="icon" data-props="--lead">
                add_circle
              </span>
              <span>anchor</span>
            </a>
          </code>

          <div class="flex place-center p-5xl">
            <a data-props="--button --outline">
              <span className="icon" data-props="--lead">
                add_circle
              </span>
              <span>anchor</span>
            </a>
          </div>
        </div>

        <div class="grid outln outln-primary radius-3xs">
          <code lang="html">
            <a data-props="--button --outline">
              <span>anchor</span>
              <span className="icon" data-props="--trail">
                add_circle
              </span>
            </a>
          </code>

          <div class="flex place-center p-5xl">
            <a data-props="--button --outline">
              <span>anchor</span>
              <span className="icon" data-props="--trail">
                add_circle
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
