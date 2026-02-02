"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: "🏆",
      title: t.about.highlights.award.title,
      description: t.about.highlights.award.description,
    },
    {
      icon: "🇸🇪",
      title: t.about.highlights.swedish.title,
      description: t.about.highlights.swedish.description,
    },
    {
      icon: "⚡",
      title: t.about.highlights.fast.title,
      description: t.about.highlights.fast.description,
    },
    {
      icon: "💰",
      title: t.about.highlights.price.title,
      description: t.about.highlights.price.description,
    },
  ];

  return (
    <section id="om" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Profile photo and heading */}
            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src="/profile.png"
                  alt="Kevin El-Zarka"
                  fill
                  className="object-cover object-right-top rounded-full ring-4 ring-white dark:ring-slate-700 shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {t.about.title}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{t.about.name}</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            {/* Why choose me */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">{t.about.whyMe}</h3>
              <ul className="space-y-3">
                {t.about.reasons.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
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
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-900 dark:text-white">{item.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
