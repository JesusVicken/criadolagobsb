"use client";

const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20quero%20comprar%20um%20produto%20%F0%9F%9A%A3";
const INSTA = "https://www.instagram.com/criadolagobsb";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/media/fotos/capa1.jpg"
        >
          <source src="/media/videos/videoCapaHero.mp4" type="video/mp4" />
          <source src="/cria.mp4" type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/60 to-[#080c10]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c10]/70 via-[#080c10]/20 to-transparent" />
      </div>

      {/* Glow */}
      <div
        className="absolute bottom-[25%] left-1/4 w-[700px] h-[350px] rounded-full opacity-20 blur-[130px] pointer-events-none z-10"
        style={{ background: "radial-gradient(ellipse, #1e6fa8, transparent 70%)" }}
      />

      {/* Content — padded well below the fixed header */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20 md:pb-28 pt-[45vh] sm:pt-[40vh] md:pt-[35vh]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <span className="block w-10 h-px bg-[var(--lake-glow)]" />
          <span className="text-[var(--lake-glow)] text-[11px] font-semibold tracking-[0.35em] uppercase">
            Brasília · Lago Paranoá
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-white mb-5 sm:mb-6 max-w-5xl"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.2rem, 10vw, 9rem)",
            lineHeight: "0.92",
            textShadow: "0 6px 40px rgba(0,0,0,0.7), 0 0 80px rgba(94,196,255,0.15)",
          }}
        >
          NASCIDO
          <br />
          <span style={{ color: "var(--lake-glow)" }}>À BEIRA</span>
          <br />
          DO LAGO
        </h1>

        {/* Subtitle */}
        <p className="text-[var(--cream)] text-base sm:text-lg md:text-xl font-light max-w-md mb-8 leading-relaxed opacity-95">
          De atleta, para atleta. Moda que nasceu no Lago Paranoá e vive em quem rema, surfa e paddle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
          <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Comprar Nova Coleção</span>
          </a>
          <a href={INSTA} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@criadolagobsb</span>
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 mt-10 pt-6 border-t border-[rgba(30,111,168,0.2)]">
          {[
            { num: "2021", label: "Fundada em" },
            { num: "+500", label: "Atletas" },
            { num: "BSB", label: "Origem" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-2xl text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {stat.num}
              </span>
              <span className="text-[10px] text-[var(--muted)] tracking-[0.25em] uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--lake-glow)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
