"use client";

import Link from "next/link";
import { BrowserFrame } from "./BrowserFrame";
import { useLanguage } from "@/contexts/LanguageContext";

export function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Tale Forge",
      category: t.portfolio.projects.taleForge.category,
      badge: t.portfolio.projects.taleForge.badge,
      description: t.portfolio.projects.taleForge.description,
      image: "/projects/tale-forge.png",
      url: "https://tale-forge.app",
      tags: ["AI", "React", "Award-winning"],
      featured: true,
    },
    {
      title: "XLify",
      category: t.portfolio.projects.xlify.category,
      description: t.portfolio.projects.xlify.description,
      image: "/projects/xlify.png",
      url: "https://www.xlify.app",
      tags: ["AI/ML", "OCR", "B2B SaaS"],
    },
    {
      title: "Gim-Vea",
      category: t.portfolio.projects.gimVea.category,
      description: t.portfolio.projects.gimVea.description,
      image: "/projects/gim-vea.png",
      url: "https://gim-vea.com",
      tags: ["Service Business", "Booking", "Testimonials"],
    },
    {
      title: "Postrilo",
      category: t.portfolio.projects.postrilo.category,
      description: t.portfolio.projects.postrilo.description,
      image: "/projects/postrilo.png",
      url: "https://postrilo.com",
      tags: ["AI", "Content Creation", "Social Media"],
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-800 rounded-2xl border overflow-hidden hover:shadow-xl dark:hover:shadow-slate-700/30 transition-all duration-300 ${
                project.featured
                  ? "border-blue-200 dark:border-blue-700 ring-2 ring-blue-100 dark:ring-blue-900"
                  : "border-gray-100 dark:border-slate-700"
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
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
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
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {t.portfolio.visitSite}
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
          <div className="inline-flex items-center gap-3 bg-gray-50 dark:bg-slate-800 px-6 py-3 rounded-full">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t.portfolio.techBadge}
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              <span>Next.js</span>
              <span className="text-gray-300 dark:text-slate-600">•</span>
              <span>React</span>
              <span className="text-gray-300 dark:text-slate-600">•</span>
              <span>TypeScript</span>
              <span className="text-gray-300 dark:text-slate-600">•</span>
              <span>AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
