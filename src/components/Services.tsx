import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Hemsida för företag",
    description: "Komplett hemsida som presenterar ditt företag professionellt. Perfekt för hantverkare, butiker, restauranger och tjänsteföretag.",
    features: ["Modern design", "Mobilanpassad", "Kontaktformulär", "Google Maps", "SEO-optimerad"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Webbshop & E-handel",
    description: "Sälj produkter online med en snygg och enkel webbshop. Perfekt för butiker och produktföretag.",
    features: ["Produktkatalog", "Kategorier & filter", "Betalningslösning", "Orderhantering"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Landningssida",
    description: "En effektiv enstaka sida för kampanjer eller när du snabbt behöver komma igång online.",
    features: ["Snabb leverans", "Kampanjfokuserad", "Tydlig CTA", "Mobilanpassad"],
  },
];

const addons = [
  { name: "Priskalkylator", price: "2 500 kr" },
  { name: "Bokningssystem", price: "2 000 kr" },
  { name: "Google Företagsprofil", price: "1 500 kr" },
  { name: "Extra sidor", price: "800 kr/st" },
];

export function Services() {
  return (
    <section id="tjanster" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tjänster
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jag hjälper dig att få en professionell närvaro online
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Assistant highlight section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-10 text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Smarta Tillägg
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Gör din hemsida smartare med AI
              </h3>
              <p className="text-blue-100 mb-6">
                Lägg till en AI-assistent som svarar på kundfrågor 24/7 – även när du sover.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Svarar på vanliga frågor automatiskt",
                  "Bokar möten åt dig",
                  "Anpassad till ditt företag",
                  "Fungerar på svenska",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Kontakta mig för demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                {/* Chat bubble illustration */}
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-sm">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm">
                      🤖
                    </div>
                    <div className="bg-white/20 rounded-lg rounded-tl-none p-3 text-sm">
                      Hej! Hur kan jag hjälpa dig idag?
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end mb-4">
                    <div className="bg-white rounded-lg rounded-tr-none p-3 text-sm text-gray-700">
                      Vad kostar en hemsida?
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
                      👤
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm">
                      🤖
                    </div>
                    <div className="bg-white/20 rounded-lg rounded-tl-none p-3 text-sm">
                      En företagshemsida börjar på 9 900 kr. Vill du boka ett samtal för att diskutera dina behov?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Addons */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Övriga tillägg</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon, index) => (
              <div key={index} className="flex items-center justify-between gap-2 p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700 text-sm">{addon.name}</span>
                <span className="font-semibold text-gray-900 whitespace-nowrap">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
