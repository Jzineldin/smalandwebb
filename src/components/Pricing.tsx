import Link from "next/link";

const plans = [
  {
    name: "Landningssida",
    price: "4 900",
    description: "Perfekt för att komma igång snabbt",
    features: [
      "1 sida",
      "Mobilanpassad design",
      "Kontaktformulär",
      "Grundläggande SEO",
      "Leverans: 5 dagar",
    ],
    popular: false,
  },
  {
    name: "Företagshemsida",
    price: "9 900",
    description: "Komplett hemsida för de flesta småföretag",
    features: [
      "Upp till 5 sidor",
      "Responsiv design",
      "Kontaktformulär",
      "Google Maps",
      "Bildgalleri",
      "SEO-optimerad",
      "Leverans: 2 veckor",
    ],
    popular: true,
  },
  {
    name: "E-handel",
    price: "14 900",
    pricePrefix: "från",
    description: "Sälj produkter online",
    features: [
      "Produktkatalog",
      "Betalningslösning",
      "Orderhantering",
      "Anpassad design",
      "Alla funktioner från Företag",
      "Leverans: 3-4 veckor",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="priser" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Priser
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparenta priser – inga överraskningar
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border-2 ${
                plan.popular
                  ? "border-blue-600 bg-blue-50/50"
                  : "border-gray-100 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Populärast
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.pricePrefix && (
                    <span className="text-gray-500 text-sm">{plan.pricePrefix}</span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">kr</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#kontakt"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Kom igång
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Alla priser är exklusive moms. Hosting och domän tillkommer.
        </p>
      </div>
    </section>
  );
}
