import Link from "next/link";
import CasinoCard from "./components/CasinoCard";
import Newsletter from "./components/Newsletter";
import FAQ from "./components/FAQ";
import { casinos } from "./data/casinos";
import { blogArticles, newsArticles } from "./data/articles";

const homeFAQ = [
  {
    question: "Les casinos en ligne sont-ils légaux en France ?",
    answer:
      "Oui, les casinos en ligne sont légaux en France à condition qu'ils détiennent une licence délivrée par l'Autorité Nationale des Jeux (ANJ). Seuls les opérateurs agréés par l'ANJ peuvent proposer légalement des jeux d'argent en ligne aux joueurs résidant en France. Nous recommandons de toujours vérifier la présence de cette licence avant de s'inscrire.",
  },
  {
    question: "Quel est le meilleur casino en ligne en France ?",
    answer:
      "Le choix du meilleur casino en ligne dépend de vos préférences personnelles : catalogue de jeux, bonus proposés, méthodes de paiement et qualité du service client. Nous évaluons chaque plateforme selon des critères objectifs (licence, sécurité, conditions de bonus, avis des joueurs) pour vous aider à faire un choix éclairé. Consultez notre comparatif détaillé pour trouver le casino qui vous convient.",
  },
  {
    question: "Comment fonctionnent les bonus de casino en ligne ?",
    answer:
      "Les bonus de casino en ligne sont des offres promotionnelles destinées à attirer et fidéliser les joueurs. Le plus courant est le bonus de bienvenue, qui double généralement votre premier dépôt. Attention : chaque bonus est soumis à des conditions de mise (wagering) qui précisent combien de fois vous devez jouer le montant du bonus avant de pouvoir retirer vos gains. Lisez toujours les conditions générales.",
  },
  {
    question: "Est-ce que JouerEnLigne.eu est un casino ?",
    answer:
      "Non, JouerEnLigne.eu n'est pas un opérateur de jeux d'argent. Nous sommes un guide informatif indépendant qui analyse et compare les casinos en ligne et les sites de paris sportifs licenciés en France. Notre objectif est de fournir des informations fiables pour vous aider à faire des choix éclairés.",
  },
  {
    question: "Comment jouer de manière responsable ?",
    answer:
      "Le jeu responsable implique de fixer des limites de temps et de budget avant de jouer, de ne jamais jouer avec de l'argent dont vous avez besoin, et de ne pas considérer le jeu comme une source de revenus. Si vous ressentez une perte de contrôle, contactez le 09 74 75 13 13 (appel non surtaxé) ou consultez le site joueurs-info-service.fr pour obtenir de l'aide.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Guide complet des jeux en ligne
            <br />
            <span className="text-gold-light">en France</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Avis d&apos;experts, comparatifs de bonus, guides de jeux et actualités.
            Votre source d&apos;information fiable et indépendante pour jouer en ligne en toute sécurité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/casino-en-ligne/"
              className="px-8 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Comparer les casinos
            </Link>
            <Link
              href="/bonus/"
              className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Voir les bonus
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            18+ | Jouez responsablement | Les jeux d&apos;argent comportent des risques
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-text-light">
          <div className="flex items-center gap-2">
            <span className="text-success text-lg">✓</span>
            <span>Casinos licenciés ANJ</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success text-lg">✓</span>
            <span>Avis indépendants</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success text-lg">✓</span>
            <span>Contenu mis à jour régulièrement</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success text-lg">✓</span>
            <span>Jeu responsable</span>
          </div>
        </div>
      </section>

      {/* Top Casinos */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Meilleurs casinos en ligne 2025
            </h2>
            <p className="text-text-light mt-1">
              Sélectionnés et testés par notre équipe d&apos;experts
            </p>
          </div>
          <Link href="/casino-en-ligne/" className="text-accent font-medium text-sm hover:underline hidden md:block">
            Voir tous les casinos →
          </Link>
        </div>
        <div className="space-y-4">
          {casinos.slice(0, 3).map((casino) => (
            <CasinoCard key={casino.slug} casino={casino} />
          ))}
        </div>
        <div className="text-center mt-6 md:hidden">
          <Link href="/casino-en-ligne/" className="text-accent font-medium hover:underline">
            Voir tous les casinos →
          </Link>
        </div>
      </section>

      {/* Category Cards */}
      <section className="bg-surface py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Explorez nos guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bonus & Promotions",
                desc: "Comparatif des meilleures offres de bienvenue, tours gratuits et bonus sans dépôt.",
                href: "/bonus/",
                icon: "🎁",
              },
              {
                title: "Jeux de Casino",
                desc: "Guides complets sur les machines à sous, le blackjack, la roulette et le casino en direct.",
                href: "/jeux/",
                icon: "🎮",
              },
              {
                title: "Paris Sportifs",
                desc: "Comprendre les cotes, les stratégies et les tendances des paris sportifs en France.",
                href: "/paris-sportifs/",
                icon: "📊",
              },
              {
                title: "Régulation & Légalité",
                desc: "Tout savoir sur la législation française, le rôle de l'ANJ et le jeu responsable.",
                href: "/regulation/",
                icon: "⚖️",
              },
              {
                title: "Actualités",
                desc: "Les dernières nouvelles de l'industrie des jeux en ligne en France et dans le monde.",
                href: "/actualites/",
                icon: "📰",
              },
              {
                title: "Blog & Conseils",
                desc: "Articles approfondis, comparatifs détaillés et conseils pour les joueurs de tous niveaux.",
                href: "/blog/",
                icon: "✍️",
              },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="card-hover gradient-card rounded-xl p-6 border border-border"
              >
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="font-bold text-primary text-lg mb-2">{cat.title}</h3>
                <p className="text-sm text-text-light">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Actualités</h2>
            <p className="text-text-light mt-1">Les dernières nouvelles du monde des jeux en ligne</p>
          </div>
          <Link href="/actualites/" className="text-accent font-medium text-sm hover:underline hidden md:block">
            Toutes les actualités →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsArticles.slice(0, 4).map((article) => (
            <article key={article.slug} className="card-hover bg-white rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-text-light">{article.date}</span>
                <span className="text-xs text-text-light">· {article.readTime}</span>
              </div>
              <h3 className="font-bold text-text mb-2">
                <Link href={`/actualites/${article.slug}/`} className="hover:text-accent transition-colors">
                  {article.title}
                </Link>
              </h3>
              <p className="text-sm text-text-light">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-surface py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Du blog</h2>
              <p className="text-text-light mt-1">Guides, conseils et analyses approfondies</p>
            </div>
            <Link href="/blog/" className="text-accent font-medium text-sm hover:underline hidden md:block">
              Tous les articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles.slice(0, 3).map((article) => (
              <article key={article.slug} className="card-hover bg-white rounded-xl border border-border p-5">
                <span className="text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-full">
                  {article.category}
                </span>
                <h3 className="font-bold text-text mt-3 mb-2">
                  <Link href={`/blog/${article.slug}/`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-text-light mb-3">{article.excerpt}</p>
                <div className="text-xs text-text-light">
                  {article.date} · {article.readTime} de lecture
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4">
        <FAQ items={homeFAQ} title="Questions fréquentes" />
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFAQ.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JouerEnLigne.eu",
            url: "https://jouerenligne.eu",
            description: "Guide complet des jeux en ligne en France",
            inLanguage: "fr",
            publisher: {
              "@type": "Organization",
              name: "JouerEnLigne.eu",
            },
          }),
        }}
      />
    </>
  );
}
