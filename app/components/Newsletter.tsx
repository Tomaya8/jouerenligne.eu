"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="gradient-accent py-12 px-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Restez informé</h2>
        <p className="text-white/80 mb-6">
          Recevez nos dernières analyses, comparatifs et actualités du monde du jeu en ligne.
        </p>
        {submitted ? (
          <p className="text-gold-light font-semibold text-lg">
            Merci ! Vous êtes inscrit à notre newsletter.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg text-text bg-white w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              S&apos;inscrire
            </button>
          </form>
        )}
        <p className="text-xs text-white/50 mt-3">
          Pas de spam. Désinscription possible à tout moment.
        </p>
      </div>
    </section>
  );
}
