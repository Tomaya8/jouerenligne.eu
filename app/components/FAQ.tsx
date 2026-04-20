"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items, title }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12">
      {title && <h2 className="text-2xl font-bold text-primary mb-6">{title}</h2>}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between bg-white hover:bg-surface transition-colors"
            >
              <span className="font-medium text-text pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 text-accent shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 py-4 bg-surface text-text-light text-sm leading-relaxed border-t border-border">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
