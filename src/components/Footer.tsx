import Image from "next/image";

const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20quero%20comprar%20um%20produto%20%F0%9F%9A%A3";
const INSTA = "https://www.instagram.com/criadolagobsb";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="relative border-t border-[var(--border)] overflow-hidden" style={{ background: "#060a0e" }}>
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-[0.06] blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--lake-blue), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[var(--lake-blue)]">
                <Image src="/criadolago.jpg" alt="Cria do Lago" fill className="object-cover" sizes="56px" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.75rem", color: "white", letterSpacing: "0.1em" }}
                >
                  CRIA
                </span>
                <span
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.65rem", color: "var(--lake-light)", letterSpacing: "0.3em", marginTop: "-3px" }}
                >
                  DO LAGO
                </span>
              </div>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              Nascida à beira do Lago Paranoá, em Brasília. Para quem o lago é o lar.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={INSTA}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @criadolagobsb"
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--muted)] hover:text-[var(--lake-glow)] hover:border-[var(--lake-glow)] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={WHATS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Cria do Lago"
                className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--muted)] hover:text-[#25D366] hover:border-[#25D366] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[10px] font-semibold tracking-[0.35em] uppercase">Navegação</h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Início", href: "#hero" },
                { label: "Manifesto", href: "#manifesto" },
                { label: "Coleção", href: "#colecao" },
                { label: "Galeria", href: "#galeria" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="text-[var(--muted)] text-sm hover:text-white transition-colors duration-200 w-fit">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[10px] font-semibold tracking-[0.35em] uppercase">Nova Coleção</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              Não vendemos pelo site. Chama diretamente no Instagram ou no WhatsApp para garantir a sua peça.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn-primary self-start">
                <span className="text-xs">WhatsApp · (61) 99207-8620</span>
              </a>
              <a href={INSTA} target="_blank" rel="noopener noreferrer" className="btn-secondary self-start text-xs">
                <span>@criadolagobsb</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--muted)] text-xs tracking-wide">
            © {year} Cria do Lago — Todos os direitos reservados
          </p>
          <p className="text-[var(--muted)] text-xs tracking-wide">
            Brasília · Lago Paranoá · DF
          </p>
        </div>
      </div>
    </footer>
  );
}
