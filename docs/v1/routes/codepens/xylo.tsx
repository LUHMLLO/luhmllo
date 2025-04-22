import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oi&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <x-sublayer>
        <figure style="inset:0; position: absolute; width: 100%;">
          <img
            src="https://images.unsplash.com/photo-1697538022268-c565529e616f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </figure>
        <span style="background-color: hsl(from var(--clr-text) h s l / 75%); filter: invert(100%); height: 100%; position: absolute; width: 100%;">
        </span>
      </x-sublayer>

      <x-body style="display: flex; flex-direction: column;   font-family: 'Poppins', sans-serif; gap: var(--xl); padding: var(--xl);">
        <nav style="place-content: space-between; place-items: center;">
          <button type="button">
            <i className="icon">
              menu
            </i>
            <span>
              menu
            </span>
          </button>

          <h6 style="font-family: 'Oi', system-ui; text-align: center; text-box: trim-both cap alphabetic; white-space: nowrap;">
            Xylo
          </h6>

          <a href={"#" + crypto.randomUUID()} type="button">
            <span>Get in touch</span>
            <i className="icon">
              arrow_right_alt
            </i>
          </a>
        </nav>

        <x-grid style="--gap: var(--nm); --cols: 4;">
          <div>
            <p style="font-size: var(--nm);">
              THE DAWN of a NEW ERA in<br />which BUILDINGS are GROWN.
            </p>
          </div>
        </x-grid>

        <x-row style="border-bottom: solid 1px var(--clr-text); flex: 1 0 max-content; padding-block: var(--nm); place-content: space-between; place-items: end; flex-wrap: wrap;">
          <span style="text-box: trim-both cap alphabetic;">SCROLL</span>
          <h1 style="font-family: 'Oi', system-ui; text-box: trim-both cap alphabetic;">
            AMENITIES
          </h1>
        </x-row>

        <p style="font-size: var(--nm); place-self: end; text-align: right;">
          Timber is more than a material. It is<br />a cornerstoen for athriving
          future in which<br />the built environment can support.
        </p>

        <x-grid style="--gap: var(--nm); --cols: 4;">
          <div></div>
          <div></div>
          <x-group style="gap: var(--nm);">
            <p>
              As climate change accelerates, the urgency to rethink how we
              design and build our workplaces has never been greater. With the
              building sector responsaible for nearly 40% of global carbon
              emissions, every decision in design and construction shapes our
              collective future.
            </p>
            <p>
              Timber buildings offer a powerful solution. As a carbon negative
              material, timber absorbs and stores{" "}
              <span>
                CO<sub>2</sub>
              </span>{" "}
              throughout its life cycle, making it an essential tool in our
              fight against climate change. Strong, renewable, and endlessly
              versatile, timber is starting to replace high-emission materiales
              like concrete and steel.
            </p>
          </x-group>

          <x-group style="gap: var(--nm);">
            <p>
              Welcome to a new epoch in which buildings are grown, relationships
              blossom, and businesses thrive. Across the world, mass timber
              construction is reducing emissions, enhancing wellbeing, and
              unifiying nature and tecnology. But what's behind the renaissance
              of humanity's oldest building material?
            </p>
            <p>
              The opportunities afforded by the timber structure are compelling
              from both the embodied carbon perspective, and in terms embodied
              carbon perspective, and in terms of the human benefits of a
              building that will bring occupiers into daily contact with the
              warmth, tactility, beauty and een the scent of timber.
            </p>

            <a href={"#" + crypto.randomUUID()}>
              <span>Enquire Now</span>
              <i className="icon">
                arrow_right_alt
              </i>
            </a>
          </x-group>
        </x-grid>
      </x-body>
    </>
  );
}
