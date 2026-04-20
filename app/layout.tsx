import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JouerEnLigne.eu — Guide des casinos et paris en ligne en France",
    template: "%s | JouerEnLigne.eu",
  },
  description:
    "Guide complet des jeux en ligne en France : avis casinos, bonus, paris sportifs, jeux de table et actualités. Informations fiables et indépendantes.",
  keywords: [
    "casino en ligne",
    "paris sportifs",
    "bonus casino",
    "jeux en ligne france",
    "casino français",
    "paris en ligne",
    "machines à sous",
    "blackjack en ligne",
    "roulette en ligne",
  ],
  authors: [{ name: "JouerEnLigne.eu" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "JouerEnLigne.eu",
    title: "JouerEnLigne.eu — Guide des casinos et paris en ligne en France",
    description:
      "Guide complet des jeux en ligne en France : avis casinos, bonus, paris sportifs et actualités.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
