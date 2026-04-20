import Link from "next/link";

const footerLinks = [
  {
    title: "Casinos",
    links: [
      { label: "Meilleurs casinos en ligne", href: "/casino-en-ligne/" },
      { label: "Bonus de bienvenue", href: "/bonus/" },
      { label: "Tours gratuits", href: "/bonus/tours-gratuits/" },
      { label: "Comparatif casinos", href: "/casino-en-ligne/#comparatif" },
    ],
  },
  {
    title: "Jeux",
    links: [
      { label: "Machines à sous", href: "/jeux/machines-a-sous/" },
      { label: "Blackjack", href: "/jeux/blackjack/" },
      { label: "Roulette", href: "/jeux/roulette/" },
      { label: "Casino en direct", href: "/jeux/casino-en-direct/" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Régulation ANJ", href: "/regulation/" },
      { label: "Paris sportifs", href: "/paris-sportifs/" },
      { label: "Actualités", href: "/actualites/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales/" },
      { label: "Politique de confidentialité", href: "/politique-de-confidentialite/" },
      { label: "Jeu responsable", href: "/regulation/jeu-responsable/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-gray-300 mt-auto">
      {/* Responsible gambling banner */}
      <div className="bg-amber-900/30 border-t border-amber-700/30">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-sm">
          <p>
            ⚠️ Le jeu comporte des risques : endettement, isolement, dépendance. Appelez le{" "}
            <strong className="text-gold">09 74 75 13 13</strong> (appel non surtaxé).
            Jouez responsablement. Interdit aux moins de 18 ans.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gold text-xl">♠</span>
            <span className="font-bold text-white">
              JouerEnLigne<span className="text-accent-light">.eu</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 text-center md:text-right max-w-xl">
            JouerEnLigne.eu est un guide informatif indépendant. Ce site contient des liens affiliés.
            Nous ne sommes pas un opérateur de jeux d&apos;argent. Le contenu est fourni à titre informatif uniquement.
            Les jeux d&apos;argent sont interdits aux mineurs.
          </p>
        </div>

        <div className="text-center mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} JouerEnLigne.eu — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
