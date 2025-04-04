import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <x-flex className="gap-xl h-[100dvh] overflow-clip p-xl w-full">
      <aside className="h-100 overflow-auto shrink-0">
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
                  <a href="#text__details">Details / Summary</a>
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
                  <a href="#text__comments">HTML Comments</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#embedded">Embedded content</a>
              <ul>
                <li>
                  <a href="#embedded__images">Images</a>
                </li>
                <li>
                  <a href="#embedded__bgimages">Background images</a>
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
                  <a href="#embedded__svg">Inline SVG</a>
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
              <a href="#forms">Form elements</a>
              <ul>
                <li>
                  <a href="#forms__input">Input fields</a>
                </li>
                <li>
                  <a href="#forms__select">Select menus</a>
                </li>
                <li>
                  <a href="#forms__checkbox">Checkboxes</a>
                </li>
                <li>
                  <a href="#forms__radio">Radio buttons</a>
                </li>
                <li>
                  <a href="#forms__textareas">Textareas</a>
                </li>
                <li>
                  <a href="#forms__html5">HTML5 inputs</a>
                </li>
                <li>
                  <a href="#forms__action">Action buttons</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      <x-grid className="gap-xl h-100 overflow-auto">
        <header id="top">
          <h1>
            HTML5
          </h1>
          <p>
            This is a test page filled with common HTML elements to be used to
            provide visual feedback whilst building CSS systems and frameworks.
          </p>
        </header>

        <x-stack className="gap-xl">
          <section
            id="text"
            className="border border-solid border-primary p-xl"
          >
            <header>
              <h1>Text</h1>
            </header>

            <article id="text__headings">
              <header>
                <h2>Headings</h2>
              </header>

              <div>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
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
                  A paragraph (from the Greek paragraphos, “to write beside” or
                  “written beside”) is a self-contained unit of a discourse in
                  writing dealing with a particular point or idea. A paragraph
                  consists of one or more sentences. Though not required by the
                  syntax of any language, paragraphs are usually an expected
                  part of formal writing, used to organize longer prose.
                </p>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>

            <article id="text__blockquotes">
              <header>
                <h2>Blockquotes</h2>
              </header>

              <div>
                <blockquote>
                  <p>
                    A block quotation (also known as a long quotation or
                    extract) is a quotation in a written document, that is set
                    off from the main text as a paragraph, or block of text.
                  </p>
                  <p>
                    It is typically distinguished visually using indentation and
                    a different typeface or smaller size quotation. It may or
                    may not include a citation, usually placed at the bottom.
                  </p>{" "}
                  <cite>
                    <a href="#!">Said no one, ever.</a>
                  </cite>
                </blockquote>
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
                <h3>Definition list</h3>
                <dl>
                  <dt>Definition List Title</dt>
                  <dd>This is a definition list division.</dd>
                  <dt>Definition List Title</dt>
                  <dd>This is a definition list division.</dd>
                  <dt>Definition List Title</dt>
                  <dd>This is a definition list division.</dd>
                </dl>

                <h3>Ordered List</h3>
                <ol type="1">
                  <li>List Item 1</li>
                  <li>
                    List Item 2
                    <ol type="A">
                      <li>List Item 1</li>
                      <li>
                        List Item 2
                        <ol type="a">
                          <li>List Item 1</li>
                          <li>
                            List Item 2
                            <ol type="I">
                              <li>List Item 1</li>
                              <li>
                                List Item 2
                                <ol type="i">
                                  <li>List Item 1</li>
                                  <li>List Item 2</li>
                                  <li>List Item 3</li>
                                </ol>
                              </li>
                              <li>List Item 3</li>
                            </ol>
                          </li>
                          <li>List Item 3</li>
                        </ol>
                      </li>
                      <li>List Item 3</li>
                    </ol>
                  </li>
                  <li>List Item 3</li>
                </ol>

                <h3>Unordered List</h3>
                <ul>
                  <li>List Item 1</li>
                  <li>
                    List Item 2
                    <ul>
                      <li>List Item 1</li>
                      <li>
                        List Item 2
                        <ul>
                          <li>List Item 1</li>
                          <li>
                            List Item 2
                            <ul>
                              <li>List Item 1</li>
                              <li>
                                List Item 2
                                <ul>
                                  <li>List Item 1</li>
                                  <li>List Item 2</li>
                                  <li>List Item 3</li>
                                </ul>
                              </li>
                              <li>List Item 3</li>
                            </ul>
                          </li>
                          <li>List Item 3</li>
                        </ul>
                      </li>
                      <li>List Item 3</li>
                    </ul>
                  </li>
                  <li>List Item 3</li>
                </ul>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>

            <article id="text__details">
              <header>
                <h1>Details / Summary</h1>
              </header>

              <details>
                <summary>Expand for details</summary>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  odio! Odio natus ullam ad quaerat, eaque necessitatibus,
                  aliquid distinctio similique voluptatibus dicta consequuntur
                  animi. Quaerat facilis quidem unde eos! Ipsa.
                </p>
              </details>

              <details name="accordion">
                <summary>Expand for details</summary>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  odio! Odio natus ullam ad quaerat, eaque necessitatibus,
                  aliquid distinctio similique voluptatibus dicta consequuntur
                  animi. Quaerat facilis quidem unde eos! Ipsa.
                </p>
              </details>
              <details name="accordion">
                <summary>Expand for details</summary>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  odio! Odio natus ullam ad quaerat, eaque necessitatibus,
                  aliquid distinctio similique voluptatibus dicta consequuntur
                  animi. Quaerat facilis quidem unde eos! Ipsa.
                </p>
              </details>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>

            <article id="text__address">
              <header>
                <h1>Address</h1>
              </header>

              <address>
                You can contact author at{" "}
                <a href="http://www.example.com/contact">
                  www.example.com
                </a>.If you see any bugs, please{" "}
                <a href="mailto:webmaster@example.com">
                  contact webmaster
                </a>.You may also want to visit us:Mozilla Foundation331 E
                Evelyn AveMountain View, CA 94041USA
              </address>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>

            <article id="text__hr">
              <header>
                <h2>Horizontal rules</h2>
              </header>

              <div>
                <hr />
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>

            <article id="text__tables">
              <header>
                <h2>Tabular data</h2>
              </header>

              <div>
                <h3>1. Basic Table (Original)</h3>
                <table>
                  <caption>Standard Table Layout</caption>
                  <thead>
                    <tr>
                      <th>Table Heading 1</th>
                      <th>Table Heading 2</th>
                      <th>Table Heading 3</th>
                      <th>Table Heading 4</th>
                      <th>Table Heading 5</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Table Footer 1</th>
                      <th>Table Footer 2</th>
                      <th>Table Footer 3</th>
                      <th>Table Footer 4</th>
                      <th>Table Footer 5</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Table Cell 1</td>
                      <td>Table Cell 2</td>
                      <td>Table Cell 3</td>
                      <td>Table Cell 4</td>
                      <td>Table Cell 5</td>
                    </tr>
                    <tr>
                      <td>Table Cell 1</td>
                      <td>Table Cell 2</td>
                      <td>Table Cell 3</td>
                      <td>Table Cell 4</td>
                      <td>Table Cell 5</td>
                    </tr>
                    <tr>
                      <td>Table Cell 1</td>
                      <td>Table Cell 2</td>
                      <td>Table Cell 3</td>
                      <td>Table Cell 4</td>
                      <td>Table Cell 5</td>
                    </tr>
                    <tr>
                      <td>Table Cell 1</td>
                      <td>Table Cell 2</td>
                      <td>Table Cell 3</td>
                      <td>Table Cell 4</td>
                      <td>Table Cell 5</td>
                    </tr>
                  </tbody>
                </table>

                <h3>2. Table with Long Content</h3>
                <table>
                  <caption>Table with Long Content</caption>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>
                        This is a very long description that should test how the
                        cell handles content that exceeds the available space.
                        We want to see how text wrapping and overflow handling
                        work with this CSS configuration.
                      </td>
                      <td>Electronics</td>
                      <td>Available</td>
                      <td>2023-05-15</td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>
                        Another lengthy description that includes technical
                        specifications and detailed information about the
                        product features and benefits to customers looking for
                        specific solutions.
                      </td>
                      <td>Home & Garden</td>
                      <td>Out of Stock</td>
                      <td>2023-06-22</td>
                    </tr>
                    <tr>
                      <td>003</td>
                      <td>Short description</td>
                      <td>Clothing</td>
                      <td>Available</td>
                      <td>2023-07-10</td>
                    </tr>
                    <tr>
                      <td>004</td>
                      <td>
                        Medium length description with some details about the
                        item that provides context but isn't excessively long.
                      </td>
                      <td>Books</td>
                      <td>Pre-order</td>
                      <td>2023-08-05</td>
                    </tr>
                  </tbody>
                </table>

                <h3>3. Product Table</h3>
                <table>
                  <caption>Product Inventory</caption>
                  <thead>
                    <tr>
                      <th>SKU</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P001</td>
                      <td>Wireless Bluetooth Headphones</td>
                      <td>Audio</td>
                      <td>$89.99</td>
                      <td>124</td>
                    </tr>
                    <tr>
                      <td>P002</td>
                      <td>Ultra HD 4K Smart TV 55"</td>
                      <td>Television</td>
                      <td>$599.99</td>
                      <td>45</td>
                    </tr>
                    <tr>
                      <td>P003</td>
                      <td>Ergonomic Office Chair</td>
                      <td>Furniture</td>
                      <td>$199.99</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <td>P004</td>
                      <td>Smartphone Protective Case</td>
                      <td>Accessories</td>
                      <td>$24.99</td>
                      <td>210</td>
                    </tr>
                    <tr>
                      <td>P005</td>
                      <td>Portable Bluetooth Speaker</td>
                      <td>Audio</td>
                      <td>$79.99</td>
                      <td>98</td>
                    </tr>
                  </tbody>
                </table>

                <h3>4. Financial Data Table</h3>
                <table>
                  <caption>Quarterly Financial Results</caption>
                  <thead>
                    <tr>
                      <th>Quarter</th>
                      <th>Revenue</th>
                      <th>Expenses</th>
                      <th>Profit</th>
                      <th>Growth %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Q1 2023</td>
                      <td>$1,250,000</td>
                      <td>$875,000</td>
                      <td>$375,000</td>
                      <td>4.2%</td>
                    </tr>
                    <tr>
                      <td>Q2 2023</td>
                      <td>$1,450,000</td>
                      <td>$950,000</td>
                      <td>$500,000</td>
                      <td>5.8%</td>
                    </tr>
                    <tr>
                      <td>Q3 2023</td>
                      <td>$1,650,000</td>
                      <td>$1,100,000</td>
                      <td>$550,000</td>
                      <td>6.1%</td>
                    </tr>
                    <tr>
                      <td>Q4 2023</td>
                      <td>$1,900,000</td>
                      <td>$1,250,000</td>
                      <td>$650,000</td>
                      <td>7.2%</td>
                    </tr>
                  </tbody>
                </table>

                <h3>5. Variable Width Columns Table</h3>
                <table>
                  <caption>Employee Information</caption>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Department</th>
                      <th>Position</th>
                      <th>Contact Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>E101</td>
                      <td>John Smith</td>
                      <td>Marketing</td>
                      <td>Director</td>
                      <td>
                        john.smith@example.com+1 (555) 123-4567
                      </td>
                    </tr>
                    <tr>
                      <td>E102</td>
                      <td>Sarah Johnson</td>
                      <td>Human Resources</td>
                      <td>Manager</td>
                      <td>
                        sarah.johnson@example.com+1 (555) 234-5678
                      </td>
                    </tr>
                    <tr>
                      <td>E103</td>
                      <td>Michael Williams</td>
                      <td>Engineering</td>
                      <td>Senior Developer</td>
                      <td>
                        michael.williams@example.com+1 (555) 345-6789
                      </td>
                    </tr>
                    <tr>
                      <td>E104</td>
                      <td>Emily Davis</td>
                      <td>Sales</td>
                      <td>Account Executive</td>
                      <td>
                        emily.davis@example.com+1 (555) 456-7890
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                <p>
                  <strong>Keyboard input:</strong> <kbd>Cmd</kbd>
                </p>
                <p>
                  <strong>Inline code:</strong>{" "}
                  <code>&lt;div&gt;code&lt;/div&gt;</code>
                </p>
                <p>
                  <strong>Sample output:</strong>{" "}
                  <samp>This is sample output from a computer program.</samp>
                </p>
                <h2>Pre-formatted text</h2>
                <pre>{`
      P R E F O R M A T T E D T E X T
      ! " # $ % & ' ( ) * + , - . /
      0 1 2 3 4 5 6 7 8 9 : ; < = > ?
      @ A B C D E F G H I J K L M N O
      P Q R S T U V W X Y Z [ \\ ] ^ _
      \` a b c d e f g h i j k l m n o
      p q r s t u v w x y z { | } ~
              `}</pre>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>

            <article id="text__inline">
              <header>
                <h2>Inline elements</h2>
              </header>

              <div>
                <p>
                  <a href="#!">This is a text link</a>.
                </p>
                <p>
                  <a>
                    This is a text link without href
                  </a>.
                </p>
                <p>
                  <strong>
                    Strong is used to indicate strong importance.
                  </strong>
                </p>
                <p>
                  <em>This text has added emphasis.</em>
                </p>
                <p>
                  The <b>b element</b>{" "}
                  is stylistically different text from normal text, without any
                  special importance.
                </p>
                <p>
                  The <i>i element</i>{" "}
                  is text that is offset from the normal text.
                </p>
                <p>
                  The <u>u element</u>{" "}
                  is text with an unarticulated, though explicitly rendered,
                  non-textual annotation.
                </p>
                <p>
                  <del>This text is deleted</del> and
                  <ins>This text is inserted</ins>.
                </p>
                <p>
                  <s>This text has a strikethrough</s>.
                </p>
                <p>
                  Superscript<sup>®</sup>.
                </p>
                <p>
                  Subscript for things like H<sub>2</sub>O.
                </p>
                <p>
                  <small>This small text is small for fine print, etc.</small>
                </p>
                <p>
                  Abbreviation:{" "}
                  <abbr title="HyperText Markup Language">HTML</abbr>
                </p>
                <p>
                  <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
                    This text is a short inline quotation.
                  </q>
                </p>
                <p>
                  <cite>This is a citation.</cite>
                </p>
                <p>
                  The <dfn>dfn element</dfn> indicates a definition.
                </p>
                <p>
                  The <mark>mark element</mark> indicates a highlight.
                </p>
                <p>
                  The <var>variable element</var>, such as <var>x</var> ={" "}
                  <var>y</var>.
                </p>
                <p>
                  The time element:
                  <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
                </p>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>

            <article id="text__comments">
              <header>
                <h2>HTML Comments</h2>
              </header>

              <div>
                <p>
                  There is comment here:
                  {/* <!--This comment should not be displayed--> */}
                </p>
                <p>
                  There is a comment spanning multiple tags and lines below
                  here.
                </p>
                {
                  /* <!--<p><a href="#!">This is a text link. But it should not be displayed in a comment</a>.</p>
              <p><strong>Strong is used to indicate strong importance. But, it should not be displayed in a comment</strong></p>
              <p><em>This text has added emphasis. But, it should not be displayed in a comment</em></p>--> */
                }
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
          </section>

          <hr />

          <section
            id="embedded"
            className="flex flex-col gap-xl border border-solid border-primary p-xl"
          >
            <header>
              <h2>Embedded content</h2>
            </header>
            <article id="embedded__images">
              <header>
                <h2>Images</h2>
              </header>
              <div>
                <h3>
                  Plain image element
                </h3>
                <p>
                  <img
                    src={asset("/media/cat.webp")}
                    alt="kitten"
                  />
                </p>
                <h3>
                  figure element with image element inside
                </h3>
                <figure>
                  <img
                    src={asset("/media/cat.webp")}
                    alt="kitten"
                  />
                </figure>
                <h3>
                  figure element with image element inside and figcaption
                </h3>
                <figure>
                  <img
                    src={asset("/media/cat.webp")}
                    alt="kitten"
                  />
                  <figcaption>Here is a caption for this image.</figcaption>
                </figure>
                <h3>
                  figure element with picture element inside
                </h3>
                <figure>
                  <picture>
                    <source
                      src={asset("/media/cat.webp")}
                      media="(min-width: 800px)"
                    />
                    <img
                      src={asset("/media/cat.webp")}
                      alt="kitten"
                    />
                  </picture>
                </figure>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
            <article id="embedded__bgimages">
              <header>
                <h2>Background images</h2>
              </header>
              <div style="
              background-image:url('../media/cat.webp'); 
              background-position: center;
              background-size: cover;
              width:300px; 
              height: 300px; 
              ">
              </div>
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
              <div>
                <audio controls src={asset("/media/trex.mp3")}>
                  <track kind="captions" />
                </audio>
              </div>
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
              <div>
                <video controls src={asset("/media/flower.webm")}>
                  <track kind="captions" />
                </video>
              </div>
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
              <div>
                <canvas>canvas</canvas>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
            <article id="embedded__meter">
              <header>
                <h2>Meter</h2>
              </header>
              <div>
                <meter value="2" min="0" max="10">2 out of 10</meter>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
            <article id="embedded__progress">
              <header>
                <h2>Progress</h2>
              </header>
              <div>
                <progress>progress</progress>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
            <article id="embedded__svg">
              <header>
                <h2>Inline SVG</h2>
              </header>
              <div>
                <svg width="100px" height="100px">
                  <circle cx="100" cy="100" r="100" fill="#1fa3ec"></circle>
                </svg>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
            <article id="embedded__iframe">
              <header>
                <h2>IFrame</h2>
              </header>
              <div>
                <iframe src="/" title="index.html" height="300"></iframe>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
            <article id="embedded__embed">
              <header>
                <h2>Embed</h2>
              </header>
              <div>
                <embed src="/" height="300" />
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
            <article id="embedded__object">
              <header>
                <h2>Object</h2>
              </header>
              <div>
                <object data="/" height="300">
                  this object represents its own index.html file
                </object>
              </div>
              <footer>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </footer>
            </article>
          </section>

          <hr />

          <section
            id="forms"
            className="flex flex-col gap-xl border border-solid border-primary p-xl"
          >
            <header>
              <h2>Form elements</h2>
            </header>
            <form>
              <fieldset id="forms__input">
                <legend>Input fields</legend>
                <p>
                  <label htmlFor="input__text">Text Input</label>
                  <input
                    id="input__text"
                    type="text"
                    placeholder="Text Input"
                  />
                </p>
                <p>
                  <label htmlFor="input__password">Password</label>
                  <input
                    id="input__password"
                    type="password"
                    placeholder="Type your Password"
                  />
                </p>
                <p>
                  <label htmlFor="input__webaddress">Web Address</label>
                  <input
                    id="input__webaddress"
                    type="url"
                    placeholder="https://yoursite.com"
                  />
                </p>
                <p>
                  <label htmlFor="input__emailaddress">Email Address</label>
                  {" "}
                  <input
                    id="input__emailaddress"
                    type="email"
                    placeholder="name@email.com"
                  />
                </p>
                <p>
                  <label htmlFor="input__phone">Phone Number</label>
                  <input
                    id="input__phone"
                    type="tel"
                    placeholder="(999) 999-9999"
                  />
                </p>
                <p>
                  <label htmlFor="input__search">Search</label>
                  <input
                    id="input__search"
                    type="search"
                    placeholder="Enter Search Term"
                  />
                </p>
                <p>
                  <label htmlFor="input__text2">Number Input</label>
                  <input
                    id="input__text2"
                    type="number"
                    placeholder="Enter a Number"
                  />
                </p>
                <p>
                  <label htmlFor="input__file">File Input</label>
                  <input id="input__file" type="file" />
                </p>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </fieldset>

              <fieldset id="forms__select">
                <legend>Select menus</legend>
                <p>
                  <label htmlFor="select">Select</label>
                  <select id="select">
                    <optgroup label="Option Group">
                      <option>Option One</option>
                      <option>Option Two</option>
                      <option>Option Three</option>
                    </optgroup>
                  </select>
                </p>
                <p>
                  <label htmlFor="select_multiple">Select (multiple)</label>
                  <select id="select_multiple" multiple>
                    <optgroup label="Option Group">
                      <option>Option One</option>
                      <option>Option Two</option>
                      <option>Option Three</option>
                    </optgroup>
                  </select>
                </p>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </fieldset>

              <fieldset id="forms__checkbox">
                <legend>Checkboxes</legend>
                <ul>
                  <li>
                    <label htmlFor="checkbox1">
                      <input
                        id="checkbox1"
                        name="checkbox"
                        type="checkbox"
                        checked
                      />
                      Choice A
                    </label>
                  </li>
                  <li>
                    <label htmlFor="checkbox2">
                      <input id="checkbox2" name="checkbox" type="checkbox" />
                      {" "}
                      Choice B
                    </label>
                  </li>
                  <li>
                    <label htmlFor="checkbox3">
                      <input id="checkbox3" name="checkbox" type="checkbox" />
                      {" "}
                      Choice C
                    </label>
                  </li>
                </ul>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </fieldset>

              <fieldset id="forms__radio">
                <legend>Radio buttons</legend>
                <ul>
                  <li>
                    <label htmlFor="radio1">
                      <input
                        id="radio1"
                        name="radio"
                        type="radio"
                        checked
                      />
                      Option 1
                    </label>
                  </li>
                  <li>
                    <label htmlFor="radio2">
                      <input id="radio2" name="radio" type="radio" /> Option 2
                    </label>
                  </li>
                  <li>
                    <label htmlFor="radio3">
                      <input id="radio3" name="radio" type="radio" /> Option 3
                    </label>
                  </li>
                </ul>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </fieldset>

              <fieldset id="forms__textareas">
                <legend>Textareas</legend>
                <p>
                  <textarea
                    id="textarea"
                    rows={8}
                    cols={48}
                    placeholder="Enter your message here"
                  >
                  </textarea>
                </p>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </fieldset>

              <fieldset id="forms__html5">
                <legend>HTML5 inputs</legend>
                <p>
                  <label htmlFor="ic">Color input</label>
                  <input type="color" id="ic" value="#c22424" />
                </p>
                <p>
                  <label htmlFor="in">Number input</label>
                  <input type="number" id="in" min="0" max="10" value="5" />
                </p>
                <p>
                  <label htmlFor="ir">Range input</label>
                  <input type="range" id="ir" value="10" />
                </p>
                <p>
                  <label htmlFor="idd">Date input</label>
                  <input type="date" id="idd" value="1970-01-01" />
                </p>
                <p>
                  <label htmlFor="idm">Month input</label>
                  <input type="month" id="idm" value="1970-01" />
                </p>
                <p>
                  <label htmlFor="idw">Week input</label>
                  <input type="week" id="idw" value="1970-W01" />
                </p>
                <p>
                  <label htmlFor="idt">Datetime input</label>
                  <input type="time" id="idt" value="1970-01-01T00:00:00Z" />
                </p>
                <p>
                  <label htmlFor="idtl">Datetime-local input</label>
                  <input
                    type="datetime-local"
                    id="idtl"
                    value="1970-01-01T00:00"
                  />
                </p>
                <p>
                  <label htmlFor="idl">Datalist</label>
                  <input type="text" id="idl" list="example-list" />
                  <datalist id="example-list">
                    <option value="Example #1"></option>
                    <option value="Example #2"></option>
                    <option value="Example #3"></option>
                  </datalist>
                </p>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </fieldset>

              <fieldset id="forms__action">
                <legend>Action buttons</legend>
                <p>
                  <input type="submit" value="<input type=submit>" />
                  <input type="button" value="<input type=button>" />
                  <input type="reset" value="<input type=reset>" />
                  <input type="submit" value="<input disabled>" disabled />
                </p>
                <p>
                  <button type="submit">&lt;button type=submit&gt;</button>
                  <button type="button">&lt;button type=button&gt;</button>
                  <button type="reset">&lt;button type=reset&gt;</button>
                  <button type="button" disabled>
                    &lt;button disabled&gt;
                  </button>
                </p>
                <p>
                  <a href="#top">[Top]</a>
                </p>
              </fieldset>
            </form>
          </section>
        </x-stack>

        <footer>
          <p>
            Made by <a href="https://www.threads.net/@luhmllo06">@luhmllo06</a>
          </p>
        </footer>
      </x-grid>
    </x-flex>
  );
}
