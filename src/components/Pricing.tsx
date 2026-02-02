"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.plans.landing.name,
      price: t.pricing.plans.landing.price,
      description: t.pricing.plans.landing.description,
      features: t.pricing.plans.landing.features,
      popular: false,
    },
    {
      name: t.pricing.plans.business.name,
      price: t.pricing.plans.business.price,
      description: t.pricing.plans.business.description,
      features: t.pricing.plans.business.features,
      popular: true,
    },
    {
      name: t.pricing.plans.ecommerce.name,
      price: t.pricing.plans.ecommerce.price,
      pricePrefix: t.pricing.from,
      description: t.pricing.plans.ecommerce.description,
      features: t.pricing.plans.ecommerce.features,
      popular: false,
    },
  ];

  return (
    <section id="priser" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border-2 ${
                plan.popular
                  ? "border-blue-600 bg-blue-50/50 dark:bg-blue-900/20"
                  : "border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t.pricing.popular}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.pricePrefix && (
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{plan.pricePrefix}</span>
                  )}
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">kr</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
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
                    : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"
                }`}
              >
                {t.pricing.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          {t.pricing.note}
        </p>
      </div>
    </section>
  );
}
