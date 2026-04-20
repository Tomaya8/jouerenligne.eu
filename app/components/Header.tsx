"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Casinos",
    href: "/casino-en-ligne/",
    children: [
      { label: "Meilleurs casinos", href: "/casino-en-ligne/" },
      { label: "Avis & comparatifs", href: "/casino-en-ligne/#comparatif" },
    ],
  },
  {
    label: "Bonus",
    href: "/bonus/",
    children: [
      { label: "Bonus de bienvenue", href: "/bonus/" },
      { label: "Tours gratuits", href: "/bonus/tours-gratuits/" },
      { label: "Sans dépôt", href: "/bonus/sans-depot/" },
    ],
  },
  {
    label: "Jeux",
    href: "/jeux/",
    children: [
      { label: "Machines à sous", href: "/jeux/machines-a-sous/" },
      { label: "Blackjack", href: "/jeux/blackjack/" },
      { label: "Roulette", href: "/jeux/roulette/" },
      { label: "Casino en direct", href: "/jeux/casino-en-direct/" },
    ],
  },
  {
    label: "Paris sportifs",
    href: "/paris-sportifs/",
  },
  {
    label: "Régulation",
    href: "/regulation/",
  },
  {
    label: "Blog",
    href: "/blog/",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-gold text-2xl">♠</span>
            <span>JouerEnLigne<span className="text-accent-light">.eu</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-text hover:bg-surface transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-primary-light pt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
