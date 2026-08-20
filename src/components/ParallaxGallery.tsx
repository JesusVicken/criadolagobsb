"use client";
import Image from "next/image";
import SafariVideo from "./SafariVideo";

const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20tenho%20interesse%20em%20uma%20pe%C3%A7a%20%F0%9F%9A%A3";

interface PanelData {
  image: string;
  video: string; // 100% Video panels only
  label: string;
  category: string;
  caption: string;
}

const panels: PanelData[] = [
  {
    image: "/media/fotos/cortaventoPrincipal.jpeg",
    video: "/media/videos/cortaventoFem.mp4",
    label: "Jaqueta Corta-Vento",
    category: "Outerwear",
    caption: "Proteção total contra o vento e água no Lago Paranoá. Desempenho e leveza extrema.",
  },
  {
    image: "/media/fotos/poncho2.jpg",
    video: "/media/videos/poncho.mp4",
    label: "Poncho Toalha Cria",
    category: "Ponchos & Pós-Treino",
    caption: "Poncho toalha aveludado super absorvente. Troca de roupa rápida à beira do lago e aquecimento pós-remada.",
  },
  {
    image: "/media/fotos/bonePrincipal.jpg",
    video: "/media/videos/bone.mp4",
    label: "Boné Trucker Cria",
    category: "Headwear",
    caption: "Tela respirável, aba curvada estruturada e a autêntica identidade Cria do Lago.",
  },
  {
    image: "/media/fotos/regataFem.jpg",
    video: "/media/videos/regata.mp4",
    label: "Regata Feminina Performance",
    category: "Vestuário",
    caption: "Modelagem leve e anatômica. Liberdade total para remada e alta mobilidade.",
  },
  {
    image: "/media/fotos/regataMasc.jpg",
    video: "/media/videos/regataMascPrincipal.mp4",
    label: "Regata Masculina Cria",
    category: "Vestuário Masculino",
    caption: "Corte atlético de alta respirabilidade e mobilidade para expedições e treinos no lago.",
  },
  {
    image: "/media/fotos/blusaUvFemininaNovaPrincipal.jpg",
    video: "/media/videos/blusaUvFemPrincipal.mp4",
    label: "Manga Longa UV50+",
    category: "Proteção Solar",
    caption: "Fator solar UV50+ certificado para encarar o sol forte da água do início ao fim do treino.",
  },
  {
    image: "/media/fotos/topVerdePrincipal.png",
    video: "/media/videos/topVerde.mp4",
    label: "Tops & Blusinhas Femininas",
    category: "Feminino",
    caption: "Sustentação ideal, maciez ao toque e corte anatômico para alta performance.",
  },
];

export default function ParallaxGallery() {
  return (
    <section id="galeria" className="relative bg-[#080c10]">
      {/* Intro Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-12 sm:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[var(--lake-glow)]" />
              <span className="text-[var(--lake-glow)] text-[11px] font-semibold tracking-[0.35em] uppercase">
                Lookbook & Mídias em Vídeo
              </span>
            </div>
            <h2
              className="font-display leading-none text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 8vw, 7rem)",
              }}
            >
              EXPERIÊNCIA <span style={{ color: "var(--lake-light)" }}>EM MOVIMENTO</span>
            </h2>
          </div>
          <p className="text-[var(--muted)] text-sm max-w-xs leading-relaxed md:pb-2">
            Role para baixo para vivenciar a coleção em vídeos 100% dinâmicos em tela cheia.
          </p>
        </div>
      </div>

      {/* Awwwards-Style Fullscreen Sticky Layer Stacking Container (100% Video Panels) */}
      <div className="relative">
        {panels.map((panel, idx) => (
          <article
            key={idx}
            className="sticky top-0 min-h-[100vh] sm:min-h-[110vh] w-full overflow-hidden flex flex-col justify-end bg-[#080c10] shadow-[0_-15px_60px_rgba(0,0,0,0.9)] border-t border-[rgba(94,196,255,0.15)]"
            style={{ zIndex: 10 + idx }}
          >
            {/* Fullscreen Video Background */}
            <div className="absolute inset-0 z-0">
              <SafariVideo
                src={[panel.video]}
                poster={panel.image}
                className="w-full h-full object-cover object-[center_30%]"
              />

              {/* Gradient overlays for high text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080c10]/70 via-transparent to-transparent" />
            </div>

            {/* Glass Badge Counter */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[var(--lake-glow)] bg-[#080c10]/85 border border-[rgba(94,196,255,0.3)] px-3 py-1.5 rounded-[2px] backdrop-blur-md">
                0{idx + 1} / 0{panels.length} — VIDEO LOOKBOOK
              </span>
            </div>

            {/* Overlay Content at bottom */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-12 sm:pb-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="inline-block text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--lake-glow)] bg-[var(--lake-blue)]/25 border border-[var(--lake-glow)]/40 px-3 py-1 rounded-[2px] mb-3 backdrop-blur-md">
                  {panel.category}
                </span>

                <h3
                  className="text-4xl sm:text-6xl md:text-7xl text-white font-display uppercase tracking-wide leading-none mb-3"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    textShadow: "0 4px 30px rgba(0,0,0,0.8)",
                  }}
                >
                  {panel.label}
                </h3>

                <p
                  className="text-[var(--cream)] text-sm sm:text-base leading-relaxed opacity-90 max-w-md"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
                >
                  {panel.caption}
                </p>
              </div>

              {/* CTA Action */}
              <div className="shrink-0">
                <a
                  href={`${WHATS}&text=Ol%C3%A1!%20Tenho%20interesse%20no%20modelo%20${encodeURIComponent(panel.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3.5 px-7 text-xs justify-center font-bold tracking-wider shadow-[0_0_30px_rgba(94,196,255,0.3)]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Saber Preço no WhatsApp</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="relative z-30 py-24 px-5 text-center overflow-hidden border-t border-[var(--border)] bg-[#05080c]">
        {/* Video Background Layer */}
        <div className="absolute inset-0 z-0">
          <SafariVideo
            src={["/media/videos/videocriadoLago.mp4", "/media/videos/videoCapaHero.mp4"]}
            poster="/media/fotos/capa1.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/80 to-[#080c10]/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[var(--lake-glow)] text-xs tracking-[0.35em] uppercase font-semibold mb-4 text-glow">
            Atendimento Exclusivo
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)",
              lineHeight: "0.95",
              color: "white",
              marginBottom: "1.8rem",
            }}
          >
            FALE COM A NOSSA EQUIPE
            <br />
            <span style={{ color: "var(--lake-light)" }}>DIRETO NO WHATSAPP</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center text-xs py-3.5 px-8"
            >
              <span>Chamar no WhatsApp Agora</span>
            </a>
            <a
              href="https://www.instagram.com/criadolagobsb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto justify-center text-xs py-3.5 px-8"
            >
              <span>@criadolagobsb</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
