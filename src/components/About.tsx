export function About() {
  const highlights = [
    {
      icon: "🏆",
      title: "#2 globalt",
      description: "Lovable Shipped 2025",
    },
    {
      icon: "🇸🇪",
      title: "Svenska företag",
      description: "Erfarenhet av lokala behov",
    },
    {
      icon: "⚡",
      title: "1-2 veckor",
      description: "Snabb leverans",
    },
    {
      icon: "💰",
      title: "Fast pris",
      description: "Inga dolda kostnader",
    },
  ];

  return (
    <section id="om" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Om mig
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Jag heter Kevin och bor i Åseda, Småland.
              </p>
              <p>
                Jag har byggt hemsidor för svenska företag inom bygg, möbel och
                tjänstesektorn. Nu fokuserar jag på att hjälpa lokala företag i
                Uppvidinge och Småland att synas online.
              </p>
              <p>
                Med erfarenhet av både enkla företagshemsidor och avancerade
                tech-produkter kan jag leverera precis det du behöver – varken
                mer eller mindre.
              </p>
            </div>

            {/* Why choose me */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-900 mb-4">Varför välja mig?</h3>
              <ul className="space-y-3">
                {[
                  "Erfarenhet av svenska företag",
                  "Baserad i Småland – förstår lokala behov",
                  "Hemsida klar på 1-2 veckor",
                  "Fast pris utan dolda kostnader",
                  "Personlig service på svenska",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
