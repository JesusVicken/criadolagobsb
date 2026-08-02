import Image from "next/image";

const INSTA = "https://www.instagram.com/criadolagobsb";

export default function About() {
  return (
    <section
      id="manifesto"
      className="relative py-20 sm:py-24 md:py-36 overflow-hidden bg-lake-gradient"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--lake-blue) 1px, transparent 1px), linear-gradient(90deg, var(--lake-blue) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: Video + Image stack */}
        <div className="relative">
          <div className="relative aspect-[3/4] max-w-xs sm:max-w-sm mx-auto md:max-w-none overflow-hidden">
            {/* Decorative frames */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-[var(--lake-blue)] opacity-30 pointer-events-none z-10" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[var(--lake-glow)] opacity-15 pointer-events-none z-10" />

            {/* Video background with poster */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="/media/editadas/about.png"
            >
              <source src="/media/videos/videoAbout.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/60 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-2 sm:-right-4 glass border-animated p-4 max-w-[160px] z-20">
            <span className="text-[var(--lake-glow)] text-xs tracking-widest uppercase block mb-1">Desde</span>
            <span className="font-display text-4xl text-white block" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              2021
            </span>
            <span className="text-[var(--muted)] text-xs">Lago Paranoá, BSB</span>
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col gap-5 sm:gap-6 mt-8 md:mt-0">
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px bg-[var(--lake-glow)]" />
            <span className="text-[var(--lake-glow)] text-[11px] font-semibold tracking-[0.3em] uppercase">
              Manifesto
            </span>
          </div>

          <h2
            className="font-display text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: "0.92",
            }}
          >
            DE ATLETA,
            <br />
            <span className="text-[var(--lake-light)]">PARA ATLETA</span>
          </h2>

          <p className="text-[var(--cream)] text-base md:text-lg leading-relaxed font-light opacity-90 max-w-md">
            A Cria do Lago nasceu à beira do Lago Paranoá, em Brasília. Não é uma marca de academia.
            É uma marca de quem acorda cedo, mete a remo, sente o vento no rosto e vai embora
            sabendo que o dia já valeu.
          </p>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed max-w-md">
            Criamos peças pensadas para atletas de verdade — que suam no remo, no SUP e no caiaque —
            e depois querem usar com orgulho o que carregam na pele.
          </p>

          <blockquote className="border-l-2 border-[var(--lake-glow)] pl-5 mt-2">
            <p className="text-white text-lg md:text-xl font-medium italic leading-snug">
              &ldquo;Para quem é o estilo Cria?<br />
              Para quem o lago é o lar.&rdquo;
            </p>
          </blockquote>

          {/* CTA to Instagram */}
          <a href={INSTA} target="_blank" rel="noopener noreferrer" className="btn-secondary self-start mt-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Conheça nossa história no Instagram</span>
          </a>

          {/* Modern image strip replacing emoji icons */}
          <div className="relative mt-3 pt-5 border-t border-[var(--border)] overflow-hidden">
            <div className="relative h-20 sm:h-24 rounded-sm overflow-hidden">
              <Image
                src="/media/editadas/hero-bg.png"
                alt="Atleta Cria do Lago no Lago Paranoá"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay with brand marks */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080c10]/70 via-[#080c10]/30 to-[#080c10]/70" />
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6">
                <span className="text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                  Remo
                </span>
                <span className="w-px h-6 bg-white/20" />
                <span className="text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                  Canoa Havaiana
                </span>
                <span className="w-px h-6 bg-white/20" />
                <span className="text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                  SUP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
