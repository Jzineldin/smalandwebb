"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 block">
              <Image src="/logo.png" alt="SmålandWebb" width={120} height={34} />
            </Link>
            <p className="text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  {t.header.portfolio}
                </Link>
              </li>
              <li>
                <Link href="#tjanster" className="hover:text-white transition-colors">
                  {t.header.services}
                </Link>
              </li>
              <li>
                <Link href="#priser" className="hover:text-white transition-colors">
                  {t.header.pricing}
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="hover:text-white transition-colors">
                  {t.header.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:kevin@smalandwebb.se" className="hover:text-white transition-colors">
                  kevin@smalandwebb.se
                </a>
              </li>
              <li>Åseda, Småland</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kevin-el-zarka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 dark:border-slate-800 pt-8 text-center text-sm">
          <p>© {currentYear} SmålandWebb. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
