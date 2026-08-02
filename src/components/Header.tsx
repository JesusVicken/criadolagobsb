"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Coleção", href: "#colecao" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Galeria", href: "#galeria" },
];

const INSTA = "https://www.instagram.com/criadolagobsb";
const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20quero%20comprar%20um%20produto%20%F0%9F%9A%A3";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-[var(--border)] py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo Image */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--lake-blue)] group-hover:border-[var(--lake-glow)] transition-colors duration-300">
              <Image
                src="/criadolago.jpg"
                alt="Cria do Lago"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-display text-xl text-white tracking-widest group-hover:text-[var(--lake-glow)] transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                CRIA
              </span>
              <span
                className="font-display text-[10px] tracking-[0.3em] text-[var(--lake-light)] -mt-[3px]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                DO LAGO
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium tracking-[0.2em] text-[var(--muted)] uppercase hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--lake-glow)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={INSTA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2 px-4 text-xs flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5">
              <span className="text-xs">Nova Coleção</span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            id="menu-toggle"
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(8, 12, 16, 0.98)", backdropFilter: "blur(16px)" }}
      >
        {navItems.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-6xl text-white hover:text-[var(--lake-glow)] transition-colors duration-200"
            style={{ fontFamily: "'Bebas Neue', sans-serif", animationDelay: `${i * 80}ms` }}
          >
            {item.label}
          </Link>
        ))}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href={INSTA} target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={() => setMenuOpen(false)}>
            <span>Instagram</span>
          </a>
          <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMenuOpen(false)}>
            <span>Comprar Nova Coleção</span>
          </a>
        </div>
      </div>
    </>
  );
}
