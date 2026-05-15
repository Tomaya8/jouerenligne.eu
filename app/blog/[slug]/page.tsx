import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import Newsletter from "../../components/Newsletter";
import { blogArticles } from "../../data/articles";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — JouerEnLigne.eu`,
    description: article.excerpt,
    alternates: { canonical: `https://jouerenligne.eu/blog/${slug}/` },
  };
}

function generatePlaceholderContent(excerpt: string): string {
  return `${excerpt}

Dans cet article, nous explorons en profondeur les aspects essentiels liés à ce sujet. Les jeux de casino en ligne ont connu une croissance remarquable ces dernières années, portée par l'évolution des technologies et l'amélioration constante de l'expérience utilisateur. Les joueurs européens bénéficient désormais d'un cadre réglementaire plus clair qui garantit la transparence et la sécurité des plateformes agréées.

Il est important de comprendre les mécanismes sous-jacents pour prendre des décisions éclairées. Que vous soyez un joueur débutant ou expérimenté, la connaissance des règles, des probabilités et des stratégies constitue un avantage indéniable. Les experts recommandent de toujours vérifier la licence de l'opérateur, de lire attentivement les conditions générales et de se fixer un budget strict avant de commencer à jouer.

Les tendances actuelles montrent un intérêt croissant pour les jeux en direct avec croupiers réels, les machines à sous à jackpot progressif et les paris sportifs en ligne. L'intégration de technologies comme le streaming haute définition et l'intelligence artificielle transforme profondément l'industrie. Les opérateurs investissent massivement dans l'innovation pour proposer des expériences toujours plus immersives et personnalisées.

Enfin, le jeu responsable reste au coeur de nos préoccupations. Nous encourageons tous les joueurs à utiliser les outils de contrôle mis à disposition par les plateformes : limites de dépôt, d'auto-exclusion temporaire ou permanente et accès aux ressources d'aide spécialisées. Le jeu doit avant tout rester un divertissement agréable et maîtrisé.`;
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  const content = generatePlaceholderContent(article.excerpt);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "JouerEnLigne.eu",
      url: "https://jouerenligne.eu",
    },
    publisher: {
      "@type": "Organization",
      name: "JouerEnLigne.eu",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jouerenligne.eu/blog/${slug}/`,
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog/" },
          { label: article.title },
        ]}
      />

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-text-light">{article.date}</span>
            <span className="text-sm text-text-light">
              {article.readTime} de lecture
            </span>
          </div>
          <h1 className="text-4xl font-bold text-text leading-tight">
            {article.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none text-text-light leading-relaxed">
          {content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <Newsletter />
    </main>
  );
}
