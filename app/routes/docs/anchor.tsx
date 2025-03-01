export default function Route() {
  return (
    <>
      <h2>
        Anchor <small class="clr-subtext txt-nm txt-lowercase">native</small>
      </h2>

      <p>
        <code lang="html" className="text-accent">{`<a/>`}</code>{" "}
        elements in web development create hyperlinks, which are used to
        navigate to other pages, sections within a page, or external resources.
        They can be styled to look like buttons or other interactive elements,
        making them versatile for navigation and linking purposes. Anchors are
        essential for creating a connected and interactive web experience.
      </p>

      <div
        data-props="--2"
        class="grid grid-cols-2 outline"
      >
        <code lang="html">
          <a>
            <span>
              anchor
            </span>
          </a>
        </code>
        <div class="align-center[items] flex flex-col place-center p-xl">
          <a>
            <span>
              anchor
            </span>
          </a>
        </div>
      </div>

      <div
        data-props="--2"
        class="grid grid-cols-2 outline"
      >
        <code lang="html">
          <a href="#">
            <span>
              anchor
            </span>
          </a>
        </code>
        <div class="align-center[items] flex flex-col place-center p-xl">
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

      <table>
        <thead>
          <tr>
            <th>prop</th>
            <th>description</th>
            <th>requires</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--button</td>
            <td>changes style to look like a button</td>
            <td>-</td>
          </tr>
          <tr>
            <td>--outline</td>
            <td>sets outline style</td>
            <td>--button</td>
          </tr>
          <tr>
            <td>--fab</td>
            <td>changes style to look like a FAB</td>
            <td>
              <span>--button</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div data-props="--2" class="grid grid-cols-2 g-sm">
        <div class="grid outlne">
          <code lang="html">
            <a data-props="--button --outline">
              <span>
                anchor
              </span>
            </a>
          </code>

          <div class="flex place-center p-xl">
            <a data-props="--button --outline">
              <span>anchor</span>
            </a>
          </div>
        </div>

        <div class="grid outline">
          <code lang="html">
            <a href="javascript:void(0)" data-props="--button --outline --fab">
              <span className="icon">
                add_circle
              </span>
            </a>
          </code>

          <div class="flex place-center p-xl">
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

      <div data-props="--2" class="grid grid-cols-2 g-sm">
        <div class="grid outline">
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

        <div class="grid outline">
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
