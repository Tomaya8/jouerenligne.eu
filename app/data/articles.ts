export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogArticles: Article[] = [
  {
    slug: "guide-debutant-casino-en-ligne",
    title: "Guide du débutant : comment choisir son premier casino en ligne",
    excerpt: "Découvrez les critères essentiels pour sélectionner un casino en ligne fiable et adapté à vos besoins : licence, bonus, jeux et méthodes de paiement.",
    category: "Guides",
    date: "2025-04-15",
    readTime: "8 min",
  },
  {
    slug: "comprendre-rtp-volatilite-slots",
    title: "RTP et volatilité des machines à sous : tout comprendre",
    excerpt: "Apprenez ce que signifient le taux de retour au joueur (RTP) et la volatilité, et comment ces indicateurs influencent votre expérience de jeu.",
    category: "Guides",
    date: "2025-04-12",
    readTime: "6 min",
  },
  {
    slug: "comparatif-bonus-bienvenue-2025",
    title: "Comparatif des meilleurs bonus de bienvenue en 2025",
    excerpt: "Analyse détaillée des offres de bienvenue des principaux casinos en ligne français : montants, conditions de mise et valeur réelle.",
    category: "Comparatifs",
    date: "2025-04-10",
    readTime: "10 min",
  },
  {
    slug: "strategies-blackjack-debutant",
    title: "Stratégie de base au blackjack : le tableau essentiel",
    excerpt: "Maîtrisez la stratégie de base du blackjack avec notre tableau complet et nos conseils pour réduire l'avantage de la maison.",
    category: "Conseils",
    date: "2025-04-08",
    readTime: "7 min",
  },
  {
    slug: "evolution-reglementation-jeux-france",
    title: "L'évolution de la réglementation des jeux en ligne en France",
    excerpt: "De l'ARJEL à l'ANJ : retour sur l'histoire de la régulation des jeux d'argent en ligne en France et les perspectives futures.",
    category: "Industrie",
    date: "2025-04-05",
    readTime: "9 min",
  },
  {
    slug: "jeu-responsable-conseils-pratiques",
    title: "Jeu responsable : 10 conseils pratiques pour garder le contrôle",
    excerpt: "Le jeu doit rester un divertissement. Voici nos recommandations concrètes pour jouer de manière responsable et reconnaître les signes d'alerte.",
    category: "Conseils",
    date: "2025-04-02",
    readTime: "5 min",
  },
];

export const newsArticles: Article[] = [
  {
    slug: "anj-nouvelles-mesures-protection-2025",
    title: "L'ANJ annonce de nouvelles mesures de protection des joueurs pour 2025",
    excerpt: "L'Autorité Nationale des Jeux renforce son dispositif de protection avec de nouvelles obligations pour les opérateurs agréés.",
    category: "Régulation",
    date: "2025-04-16",
    readTime: "4 min",
  },
  {
    slug: "evolution-gaming-nouvelles-tables",
    title: "Evolution Gaming lance 5 nouvelles tables de jeu en direct",
    excerpt: "Le leader du casino en direct enrichit son offre avec des variantes innovantes de blackjack et roulette pour le marché français.",
    category: "Industrie",
    date: "2025-04-14",
    readTime: "3 min",
  },
  {
    slug: "paiement-mobile-casinos-tendance",
    title: "Le paiement mobile en plein essor dans les casinos en ligne",
    excerpt: "Apple Pay, Google Pay et les wallets mobiles transforment l'expérience de dépôt et retrait sur les plateformes de jeux.",
    category: "Innovation",
    date: "2025-04-11",
    readTime: "5 min",
  },
  {
    slug: "marche-paris-sportifs-croissance",
    title: "Le marché des paris sportifs en France atteint un record historique",
    excerpt: "Les chiffres de l'ANJ confirment une croissance de 15% du marché des paris sportifs en ligne au premier trimestre 2025.",
    category: "Paris sportifs",
    date: "2025-04-09",
    readTime: "4 min",
  },
];
