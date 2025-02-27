interface FoundersArticle {
  heading: string;
  paragraph: string;
}

export default function Route() {
  const logos: string[] = [
    "https://cdn.freebiesupply.com/logos/large/2x/apple-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/microsoft-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/samsung-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/google-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/paypal-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/apple-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/microsoft-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/samsung-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/google-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/paypal-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/apple-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/microsoft-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/samsung-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/google-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/paypal-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/apple-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/microsoft-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/samsung-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/google-logo-png-transparent.png",
    "https://cdn.freebiesupply.com/logos/large/2x/paypal-logo-png-transparent.png",
  ];

  const foundersArticles: FoundersArticle[] = [
    {
      heading: "Research",
      paragraph:
        "We dive into your idea, learn about your audience, and create a strategy to bring your idea to life.",
    },
    {
      heading: "Branding",
      paragraph:
        "We craft a well-suited and positioned brand so that you can build awareness from day one.",
    },
    {
      heading: "Design",
      paragraph:
        "We design every detail to ensure you showcase your idea clearly and provide a seamless user experience",
    },
    {
      heading: "Build",
      paragraph:
        "We code from scratch so you can learn from each user interaction and iterate to product-market fit.",
    },
  ];

  return (
    <div className="font-sans">
      <div className="bg-lime-100 min-h-screen flex flex-col items-center justify-center">
        <nav className="text-gray-800 flex justify-between items-center w-full pt-8 px-6">
          <a href="{void:0}" className="text-inherit">
            <span className="material-icons">blur_on</span>
          </a>
          <div className="flex gap-8 items-center">
            <a href="{void:0}" className="text-inherit">Process</a>
            <a href="{void:0}" className="text-inherit">Projects</a>
            <a href="{void:0}" className="text-inherit">FAQ</a>
            <a
              href="{void:0}"
              className="text-inherit border border-current px-4 py-2 rounded text-sm flex items-center"
            >
              Packages
            </a>
          </div>
        </nav>

        <header className="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center flex-grow min-h-[40ch]">
          <h1 className="text-6xl font-semibold">
            We craft minimum <br /> viable SaaS products
          </h1>
          <p className="max-w-[32ch]">
            Helping founders bring their product to life, attract early users,
            and validate their idea.
          </p>
          <button className="bg-lime-300 text-lime-900 rounded px-6 py-3 font-semibold">
            See available packages
          </button>
        </header>

        <div className="flex gap-8 pb-8 overflow-hidden w-full">
          <div className="animate-scroll flex gap-8">
            {logos.map((logo, index) => (
              <figure
                key={index}
                className="w-64 aspect-[21/9] rounded flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain grayscale mix-blend-difference"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center gap-8 py-16 min-h-[75vh]">
        <header className="flex flex-col items-center text-center">
          <small>THE PROCESS</small>
          <h2 className="text-4xl font-semibold">
            Built by founders, for founders
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
          {foundersArticles.map((article, index) => (
            <article key={index} className="bg-lime-100 p-4 rounded">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-lime-300 rounded text-lime-900">
                  {index}
                </span>
                <small>week {index}</small>
              </div>
              <div className="mt-4">
                <h6 className="font-semibold">{article.heading}</h6>
                <p className="mt-2">{article.paragraph}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style
        lang="css"
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `,
        }}
      />
    </div>
  );
}
