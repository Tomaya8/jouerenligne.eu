"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-2xl p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 text-sm text-text">
          <p className="font-semibold mb-1">Nous respectons votre vie privée</p>
          <p className="text-text-light">
            Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic.
            Consultez notre{" "}
            <a href="/politique-de-confidentialite/" className="text-accent underline">
              politique de confidentialité
            </a>{" "}
            pour en savoir plus.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm rounded-lg border border-border text-text-light hover:bg-surface transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-6 py-2 text-sm rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
