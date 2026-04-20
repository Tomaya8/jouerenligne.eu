import Link from "next/link";

export interface Casino {
  slug: string;
  name: string;
  rating: number;
  bonus: string;
  bonusDetails: string;
  features: string[];
  payments: string[];
  license: string;
  affiliateUrl: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "star-filled" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-semibold text-text">{rating}/5</span>
    </div>
  );
}

export default function CasinoCard({ casino }: { casino: Casino }) {
  return (
    <div className="card-hover bg-white rounded-xl border border-border p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-primary">{casino.name}</h3>
            <Stars rating={casino.rating} />
          </div>
          <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            {casino.license}
          </span>
        </div>
        <div className="bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-lg p-3 mb-3">
          <p className="text-gold font-bold text-lg">{casino.bonus}</p>
          <p className="text-sm text-text-light">{casino.bonusDetails}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {casino.features.map((f) => (
            <span key={f} className="text-xs bg-surface text-text-light px-2 py-1 rounded">
              {f}
            </span>
          ))}
        </div>
        <p className="text-xs text-text-light">
          Paiements : {casino.payments.join(", ")}
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center shrink-0">
        <Link
          href={`/casino-en-ligne/${casino.slug}/`}
          className="px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors text-center text-sm"
        >
          Lire l&apos;avis
        </Link>
        <a
          href={casino.affiliateUrl}
          target="_blank"
          className="px-6 py-2.5 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors text-center text-sm"
          rel="nofollow sponsored noopener"
        >
          Visiter le site
        </a>
      </div>
    </div>
  );
}
