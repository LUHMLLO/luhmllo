import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <div id="top">
      <header>
        <h1>HTML5 Test Page</h1>
        <p>
          This is a test page filled with common HTML elements to be used to
          provide visual feedback whilst building CSS systems and frameworks.
        </p>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#text">Text</a>
            <ul>
              <li>
                <a href="#text__headings">Headings</a>
              </li>
              <li>
                <a href="#text__paragraphs">Paragraphs</a>
              </li>
              <li>
                <a href="#text__lists">Lists</a>
              </li>
              <li>
                <a href="#text__blockquotes">Blockquotes</a>
              </li>
              <li>
                <a href="#text__details">Details/Summary</a>
              </li>
              <li>
                <a href="#text__address">Address</a>
              </li>
              <li>
                <a href="#text__hr">Horizontal rules</a>
              </li>
              <li>
                <a href="#text__tables">Tabular data</a>
              </li>
              <li>
                <a href="#text__code">Code</a>
              </li>
              <li>
                <a href="#text__inline">Inline elements</a>
              </li>
              <li>
                <a href="#text__ruby">Ruby annotations</a>
              </li>
              <li>
                <a href="#text__bidirectional">Bidirectional text</a>
              </li>
              <li>
                <a href="#text__comments">HTML Comments</a>
              </li>
              <li>
                <a href="#text__legacy">Legacy text formatting</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#embedded">Embedded</a>
            <ul>
              <li>
                <a href="#embedded__images">Images</a>
              </li>
              <li>
                <a href="#embedded__image_maps">Image maps</a>
              </li>
              <li>
                <a href="#embedded__bgimages">BG images</a>
              </li>
              <li>
                <a href="#embedded__audio">Audio</a>
              </li>
              <li>
                <a href="#embedded__video">Video</a>
              </li>
              <li>
                <a href="#embedded__canvas">Canvas</a>
              </li>
              <li>
                <a href="#embedded__meter">Meter</a>
              </li>
              <li>
                <a href="#embedded__progress">Progress</a>
              </li>
              <li>
                <a href="#embedded__svg">SVG</a>
              </li>
              <li>
                <a href="#embedded__iframe">IFrames</a>
              </li>
              <li>
                <a href="#embedded__embed">Embed</a>
              </li>
              <li>
                <a href="#embedded__object">Object</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#forms">Forms</a>
            <ul>
              <li>
                <a href="#forms__input">Inputs</a>
              </li>
              <li>
                <a href="#forms__select">Selects</a>
              </li>
              <li>
                <a href="#forms__checkbox">Checkboxes</a>
              </li>
              <li>
                <a href="#forms__radio">Radios</a>
              </li>
              <li>
                <a href="#forms__textareas">Textareas</a>
              </li>
              <li>
                <a href="#forms__html5">HTML5 Inputs</a>
              </li>
              <li>
                <a href="#forms__output">Output</a>
              </li>
              <li>
                <a href="#forms__action">Buttons</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#interactive">Interactive</a>
            <ul>
              <li>
                <a href="#interactive__details">Details</a>
              </li>
              <li>
                <a href="#interactive__dialog">Dialog</a>
              </li>
              <li>
                <a href="#interactive__menu">Menu</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#sectioning">Sectioning</a>
            <ul>
              <li>
                <a href="#sectioning__aside">Aside</a>
              </li>
              <li>
                <a href="#sectioning__article">Article</a>
              </li>
              <li>
                <a href="#sectioning__main">Main</a>
              </li>
              <li>
                <a href="#sectioning__nav">Nav</a>
              </li>
              <li>
                <a href="#sectioning__section">Section</a>
              </li>
              <li>
                <a href="#sectioning__headers">Headers</a>
              </li>
              <li>
                <a href="#sectioning__footers">Footers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#template">Templates</a>
            <ul>
              <li>
                <a href="#template__basic">Template</a>
              </li>
              <li>
                <a href="#template__slot">Slot</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#legacy">Legacy</a>
            <ul>
              <li>
                <a href="#legacy__marquee">Marquee</a>
              </li>
              <li>
                <a href="#legacy__frameset">Frames</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <main>
        {/* Text Section */}
        <section id="text">
          <article id="text__headings">
            <header>
              <h2>Headings</h2>
            </header>
            <div>
              <h1>h1</h1>
              <h2>h2</h2>
              <h3>h3</h3>
              <h4>h4</h4>
              <h5>h5</h5>
              <h6>h6</h6>
            </div>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="text__paragraphs">
            <header>
              <h2>Paragraphs</h2>
            </header>
            <div>
              <p>
                Paragraph with <wbr />word<wbr />break opportunities.
              </p>
            </div>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="text__lists">
            <header>
              <h2>Lists</h2>
            </header>
            <div>
              <h3>Definition List</h3>
              <dl>
                <dt>Term</dt>
                <dd>Definition</dd>
              </dl>
              <h3>Ordered</h3>
              <ol>
                <li>Item</li>
                <li>
                  Item<ol>
                    <li>Subitem</li>
                  </ol>
                </li>
              </ol>
              <h3>Unordered</h3>
              <ul>
                <li>Item</li>
                <li>
                  Item<ul>
                    <li>Subitem</li>
                  </ul>
                </li>
              </ul>
              <h3>Menu</h3>
              <menu>
                <li>Menu Item</li>
              </menu>
            </div>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="text__tables">
            <header>
              <h2>Tables</h2>
            </header>
            <table>
              <caption>Table Caption</caption>
              <colgroup>
                <col />
                <col span={2} />
                <col span={2} />
              </colgroup>
              <thead>
                <tr>
                  <th>Header</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Footer</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Cell</td>
                  <td colSpan={2}>Colspan</td>
                  <td rowSpan={2}>Rowspan</td>
                </tr>
              </tbody>
            </table>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="text__code">
            <header>
              <h2>Code</h2>
            </header>
            <div>
              <kbd>Keyboard</kbd> <code>&lt;code&gt;</code> <samp>Output</samp>
              <pre>{`Preformatted\nText`}</pre>
            </div>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="text__legacy">
            <header>
              <h2>Legacy Formatting</h2>
            </header>
            <div>
              <font face="Arial" size={3}>Font Tag</font>
              <br />
              <center>Centered</center>
              <br />
              <marquee>Scrolling Text</marquee>
            </div>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>
        </section>

        {/* Embedded Content */}
        <section id="embedded">
          <article id="embedded__images">
            <header>
              <h2>Images</h2>
            </header>
            <img src={asset("/media/cat.webp")} alt="Sample" />
            <figure>
              <img src={asset("/media/cat.webp")} alt="Figure" />
              <figcaption>Caption</figcaption>
            </figure>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="embedded__audio">
            <header>
              <h2>Audio</h2>
            </header>
            <audio controls src={asset("/media/trex.mp3")} />
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="embedded__video">
            <header>
              <h2>Video</h2>
            </header>
            <video controls src={asset("/media/flower.webm")} />
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>

          <article id="embedded__canvas">
            <header>
              <h2>Canvas</h2>
            </header>
            <canvas width="100" height="100"></canvas>
            <footer>
              <p>
                <a href="#top">[Top]</a>
              </p>
            </footer>
          </article>
        </section>

        {/* Forms Section */}
        <section id="forms">
          <form>
            <fieldset id="forms__input">
              <legend>Inputs</legend>
              <p>
                <label>
                  Text <input type="text" placeholder="Text" />
                </label>
              </p>
              <p>
                <label>
                  Color <input type="color" />
                </label>
              </p>
              <p>
                <label>
                  Range <input type="range" />
                </label>
              </p>
              <p>
                <label>
                  File <input type="file" />
                </label>
              </p>
            </fieldset>

            <fieldset id="forms__select">
              <legend>Selects</legend>
              <select>
                <option>Option</option>
              </select>
              <datalist id="datalist">
                <option>Option</option>
              </datalist>
            </fieldset>

            <fieldset id="forms__action">
              <legend>Buttons</legend>
              <input type="submit" value="Submit" />
              <button type="button">Button</button>
              <output name="result">Output</output>
            </fieldset>
          </form>
        </section>

        {/* Interactive Elements */}
        <section id="interactive">
          <details>
            <summary>Details</summary>Content
          </details>
          <dialog open>
            <form method="dialog">
              <button type="button">Close</button>
            </form>
          </dialog>
        </section>

        {/* Template Section */}
        <section id="template">
          <template id="tpl">
            <p>Template Content</p>
          </template>
          <div hidden>
            <slot name="test">Default Slot</slot>
          </div>
        </section>
      </main>

      <footer>
        <address>Contact Info</address>
        <p>
          Made by <a href="https://fresh.deno.dev">Fresh</a>
        </p>
      </footer>
    </div>
  );
}
