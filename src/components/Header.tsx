"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Coleção", href: "#colecao" },
  { label: "Use Cria", href: "#usecria" },
  { label: "Galeria", href: "#galeria" },
];

const INSTA = "https://www.instagram.com/criadolagobsb";
const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20quero%20comprar%20um%20produto%20%F0%9F%9A%A3";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
          scrolled ? "glass border-b border-[var(--border)] py-2.5 sm:py-3" : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo Image */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[var(--lake-blue)] group-hover:border-[var(--lake-glow)] transition-colors duration-300 shadow-[0_0_15px_rgba(30,111,168,0.3)]">
              <Image
                src="/criadolago.jpg"
                alt="Cria do Lago Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-display text-lg sm:text-xl text-white tracking-widest group-hover:text-[var(--lake-glow)] transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                CRIA
              </span>
              <span
                className="font-display text-[9px] sm:text-[10px] tracking-[0.3em] text-[var(--lake-light)] -mt-[3px]"
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
                className="text-xs font-medium tracking-[0.2em] text-[var(--muted)] uppercase hover:text-white transition-colors duration-200 relative group py-1"
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

          {/* Hamburger Mobile */}
          <button
            id="menu-toggle"
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-white/5 active:scale-95 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 px-6 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(8, 12, 16, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl sm:text-6xl text-white hover:text-[var(--lake-glow)] transition-colors duration-200 tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5 w-full max-w-xs mt-4">
          <a
            href={INSTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary justify-center text-xs py-3 w-full"
            onClick={() => setMenuOpen(false)}
          >
            <span>Instagram @criadolagobsb</span>
          </a>
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center text-xs py-3 w-full"
            onClick={() => setMenuOpen(false)}
          >
            <span>Comprar Nova Coleção</span>
          </a>
        </div>
      </div>
    </>
  );
}
