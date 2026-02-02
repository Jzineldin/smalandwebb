import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-xl text-white mb-4 block">
              Småland<span className="text-blue-400">Webb</span>
            </Link>
            <p className="text-sm">
              Professionella hemsidor för småföretag i Småland.
              Baserad i Åseda, Uppvidinge.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Arbeten
                </Link>
              </li>
              <li>
                <Link href="#tjanster" className="hover:text-white transition-colors">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link href="#priser" className="hover:text-white transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
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
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} SmålandWebb. Alla rättigheter förbehållna.</p>
          <p>
            Organisationsnummer: [Lägg till senare]
          </p>
        </div>
      </div>
    </footer>
  );
}
