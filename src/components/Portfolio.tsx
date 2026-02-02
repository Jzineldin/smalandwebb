import Link from "next/link";
import { BrowserFrame } from "./BrowserFrame";

const projects = [
  {
    title: "Tale Forge",
    category: "AI Storytelling Platform",
    badge: "🏆 #2 Globalt - Lovable Shipped 2025",
    description:
      "AI-driven berättarplattform för familjer och pedagoger. Skapa illustrerade berättelser med egna karaktärer.",
    image: "/projects/tale-forge.png",
    url: "https://tale-forge.app",
    tags: ["AI", "React", "Award-winning"],
    featured: true,
  },
  {
    title: "XLify",
    category: "SaaS / Faktura-automation",
    description:
      "AI-verktyg som automatiserar fakturainmatning. Sparar tid för revisorer och ekonomiavdelningar.",
    image: "/projects/xlify.png",
    url: "https://www.xlify.app",
    tags: ["AI/ML", "OCR", "B2B SaaS"],
  },
  {
    title: "Gim-Vea",
    category: "Tjänsteföretag",
    description:
      "Professionell hemsida för virtuell assistanstjänst med kundrecensioner och bokningsfunktion.",
    image: "/projects/gim-vea.png",
    url: "https://gim-vea.com",
    tags: ["Service Business", "Booking", "Testimonials"],
  },
  {
    title: "Postrilo",
    category: "AI Content Platform",
    description:
      "Plattform för AI-genererat innehåll till sociala medier. Skapa engagerande inlägg på minuter.",
    image: "/projects/postrilo.png",
    url: "https://postrilo.com",
    tags: ["AI", "Content Creation", "Social Media"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tidigare arbeten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projekt jag har byggt och lanserat
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 ${
                project.featured
                  ? "border-blue-200 ring-2 ring-blue-100"
                  : "border-gray-100"
              }`}
            >
              {/* Browser Frame with Screenshot */}
              <div className="p-4 pb-0">
                <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
                  {project.badge && (
                    <div className="absolute -top-2 -left-2 z-10">
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {project.badge}
                      </span>
                    </div>
                  )}
                  <BrowserFrame
                    src={project.image}
                    alt={project.title}
                    url={project.url}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Besök sidan
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full">
            <span className="text-sm text-gray-500">
              Byggt med modern teknik:
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <span>Next.js</span>
              <span className="text-gray-300">•</span>
              <span>React</span>
              <span className="text-gray-300">•</span>
              <span>TypeScript</span>
              <span className="text-gray-300">•</span>
              <span>AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
