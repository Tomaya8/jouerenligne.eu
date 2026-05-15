import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import { blogArticles } from "../data/articles";

export const metadata: Metadata = {
  title: "Blog — Guides, Conseils & Analyses sur les Jeux en Ligne",
  description:
    "Retrouvez nos guides complets, conseils d'experts et analyses détaillées pour maîtriser les jeux de casino en ligne, le blackjack, la roulette et bien plus.",
  alternates: { canonical: "https://jouerenligne.eu/blog/" },
};

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "Blog" }]} />

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-text mb-4">
          Blog — Guides, Conseils &amp; Analyses
        </h1>
        <p className="text-lg text-text-light max-w-3xl">
          Explorez nos articles pour améliorer votre expérience de jeu en ligne.
          Stratégies, bonus, régulation : tout ce qu&apos;il faut savoir pour jouer
          de manière éclairée et responsable.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {blogArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}/`}
            className="group block bg-surface border border-border rounded-2xl p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-text-light">{article.date}</span>
              <span className="text-sm text-text-light">{article.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-text group-hover:text-primary transition-colors mb-2">
              {article.title}
            </h2>
            <p className="text-text-light leading-relaxed">{article.excerpt}</p>
          </Link>
        ))}
      </section>

      <Newsletter />
    </main>
  );
}
