import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { casinoReviews } from "../../data/casinos";

export async function generateStaticParams() {
  return casinoReviews.map((review) => ({ slug: review.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = casinoReviews.find((r) => r.slug === slug);
  if (!review) return {};
  return {
    title: review.metaTitle,
    description: review.metaDescription,
    alternates: {
      canonical: `https://jouerenligne.eu/casino-en-ligne/${review.slug}/`,
    },
    openGraph: {
      title: review.metaTitle,
      description: review.metaDescription,
      type: "article",
    },
  };
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "star-filled" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm font-semibold text-text">{rating}/5</span>
    </div>
  );
}

export default async function CasinoReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const review = casinoReviews.find((r) => r.slug === slug);
  if (!review) notFound();

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.intro,
    author: { "@type": "Organization", name: "JouerEnLigne.eu" },
    publisher: { "@type": "Organization", name: "JouerEnLigne.eu" },
    positiveNotes: {
      "@type": "ItemList",
      itemListElement: review.pros.map((pro, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: pro,
      })),
    },
    negativeNotes: {
      "@type": "ItemList",
      itemListElement: review.cons.map((con, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: con,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-text-light mb-6">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>{" "}
          / <Link href="/#casinos" className="hover:underline">Casinos</Link> / {review.name}
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            {review.name} — Avis {new Date().getFullYear()}
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <Stars rating={review.rating} />
            <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              {review.license.includes("Curaçao") ? "Curaçao" : "Licence"}
            </span>
          </div>
          <p className="text-text-light leading-relaxed text-lg">{review.intro}</p>
          <div className="mt-6">
            <a
              href={review.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-block px-8 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Visiter {review.name}
            </a>
          </div>
        </header>

        <section className="bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-xl p-6 mb-10 border border-gold/20">
          <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-1">
            Bonus de bienvenue
          </p>
          <p className="text-3xl font-bold text-gold mb-3">{review.bonus.title}</p>
          <p className="text-text-light mb-3">{review.bonus.description}</p>
          <p className="text-sm text-text-light/80">{review.bonus.conditions}</p>
        </section>

        <section className="grid sm:grid-cols-2 gap-6 mb-10">
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Points forts</h2>
            <ul className="space-y-2">
              {review.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-text-light">
                  <span className="text-green-600 font-bold">+</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Points faibles</h2>
            <ul className="space-y-2">
              {review.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-text-light">
                  <span className="text-red-600 font-bold">−</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Sélection de jeux</h2>
          <p className="text-text-light leading-relaxed">{review.games}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Méthodes de paiement</h2>
          <p className="text-text-light leading-relaxed">{review.payments}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Service client</h2>
          <p className="text-text-light leading-relaxed">{review.support}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Licence et sécurité</h2>
          <p className="text-text-light leading-relaxed">{review.license}</p>
        </section>

        <section className="mb-10 rounded-xl bg-surface p-6 border border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">Notre verdict</h2>
          <p className="text-text-light leading-relaxed">{review.verdict}</p>
          <div className="mt-6">
            <a
              href={review.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-block px-8 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Réclamer le bonus {review.name}
            </a>
            <p className="text-xs text-text-light mt-3">
              18+ | Jeu responsable | Les conditions générales s&apos;appliquent
            </p>
          </div>
        </section>

        <section className="rounded-xl bg-surface p-6 border border-border text-sm text-text-light">
          <p>
            <strong>Transparence :</strong> cet article contient des liens d&apos;affiliation.
            JouerEnLigne.eu perçoit une commission sur les inscriptions réalisées via ces liens,
            sans surcoût pour vous. Cela n&apos;influence ni la note ni la teneur de l&apos;analyse.
            Les jeux d&apos;argent comportent des risques : endettement, isolement, dépendance.
            Joueurs-info-service : 09 74 75 13 13 (appel non surtaxé).
          </p>
        </section>
      </div>
    </>
  );
}
