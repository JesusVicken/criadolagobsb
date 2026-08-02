"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20tenho%20interesse%20em%20uma%20pe%C3%A7a%20%F0%9F%9A%A3";

interface PanelData {
  image: string;
  video?: string;
  label: string;
  category: string;
  caption: string;
}

const panels: PanelData[] = [
  {
    image: "/media/fotos/cortavento.jpg",
    video: "/media/videos/videocriadoLago.mp4",
    label: "Corta-Vento",
    category: "Outerwear",
    caption: "Proteção contra vento e água. Feito para o Lago.",
  },
  {
    image: "/media/fotos/bone.jpg",
    label: "Boné Trucker",
    category: "Headwear",
    caption: "Tela respirável e a cara de Brasília.",
  },
  {
    image: "/media/fotos/regata.jpg",
    video: "/media/videos/capa.mp4",
    label: "Regata Atleta",
    category: "Vestuário",
    caption: "Modelagem leve. Performance de verdade.",
  },
  {
    image: "/media/fotos/blusa.jpg",
    label: "Manga Longa UV",
    category: "Proteção Solar",
    caption: "UV50+ para treino de sol a sol.",
  },
  {
    image: "/media/fotos/viseira1.jpg",
    video: "/media/videos/capa2.mp4",
    label: "Viseira Neon",
    category: "Headwear",
    caption: "Cor, energia e identidade BSB.",
  },
  {
    image: "/media/fotos/blusinha.jpg",
    label: "Blusinha Feminina",
    category: "Feminino",
    caption: "Proteção e estilo pra remada.",
  },
];

/* ─── Desktop: Sticky Parallax Panel (Floema-style) ─── */
function DesktopPanel({ panel, index, total }: { panel: PanelData; index: number; total: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    const raw = 1 - (rect.bottom / (windowH + rect.height));
    setProgress(Math.max(0, Math.min(1, raw)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isEven = index % 2 === 0;
  const imgY = (progress - 0.5) * -80;
  const textY = (1 - progress) * 50;
  const clipProgress = Math.min(progress * 1.8, 1);
  const clipInset = `${(1 - clipProgress) * 12}%`;
  const textOpacity = Math.min(progress * 2.5, 1) * (progress < 0.85 ? 1 : Math.max(0, (1 - progress) * 6));
  const scale = 1 + (1 - clipProgress) * 0.06;

  return (
    <div ref={containerRef} style={{ height: "160vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center" style={{ background: "#080c10" }}>
        {/* Image Layer */}
        <div
          className="absolute inset-0 overflow-hidden will-change-transform"
          style={{ clipPath: `inset(${clipInset} round 0px)`, transform: `scale(${scale})` }}
        >
          <div className="absolute inset-[-15%] will-change-transform" style={{ transform: `translateY(${imgY}px)` }}>
            {panel.video ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster={panel.image}>
                <source src={panel.video} type="video/mp4" />
              </video>
            ) : (
              <Image src={panel.image} alt={panel.label} fill className="object-cover object-center" sizes="100vw" priority={index < 2} />
            )}
          </div>
          <div className="absolute inset-0" style={{
            background: isEven
              ? "linear-gradient(105deg, rgba(8,12,16,0.92) 0%, rgba(8,12,16,0.55) 35%, rgba(8,12,16,0.1) 65%, rgba(8,12,16,0.3) 100%)"
              : "linear-gradient(255deg, rgba(8,12,16,0.92) 0%, rgba(8,12,16,0.55) 35%, rgba(8,12,16,0.1) 65%, rgba(8,12,16,0.3) 100%)",
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080c10] to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080c10]/30 to-transparent" />
        </div>

        {/* Text content */}
        <div
          className={`relative z-20 max-w-7xl mx-auto px-8 w-full flex ${isEven ? "justify-start" : "justify-end"}`}
          style={{ transform: `translateY(${textY}px)`, opacity: textOpacity }}
        >
          <div className={`max-w-lg ${isEven ? "text-left" : "text-right"}`}>
            <span className="block select-none pointer-events-none" style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(6rem,14vw,11rem)", lineHeight: "0.85",
              color: "rgba(94,196,255,0.08)", marginBottom: "-1.5rem",
            }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="inline-block text-[10px] font-semibold tracking-[0.35em] uppercase mb-4 px-3 py-1.5" style={{
              color: "#5ec4ff", border: "1px solid rgba(94,196,255,0.35)", background: "rgba(30,111,168,0.2)", backdropFilter: "blur(8px)",
            }}>
              {panel.category}
            </span>
            <h3 className="block mb-3" style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: "0.92",
              color: "white", textShadow: "0 4px 30px rgba(0,0,0,0.6)",
            }}>
              {panel.label}
            </h3>
            <div className={`h-px w-16 mb-4 ${isEven ? "" : "ml-auto"}`} style={{ background: "linear-gradient(90deg, #5ec4ff, transparent)" }} />
            <p className="text-[var(--cream)] text-base sm:text-lg leading-relaxed mb-8 opacity-90 max-w-sm" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
              {panel.caption}
            </p>
            <a href={`${WHATS}&text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto%20${encodeURIComponent(panel.label)}`}
              target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              <span>Comprar Nova Coleção</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className={`flex items-center gap-2 mt-8 ${isEven ? "" : "justify-end"}`}>
              <span className="text-[10px] text-[var(--muted)] tracking-[0.3em] uppercase">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
              <div className="w-12 h-px bg-[var(--border)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile: Card-style scroll (no black gap) ─── */
function MobilePanel({ panel, index, total }: { panel: PanelData; index: number; total: number }) {
  return (
    <div className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Full BG */}
      <div className="absolute inset-0">
        {panel.video ? (
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster={panel.image}>
            <source src={panel.video} type="video/mp4" />
          </video>
        ) : (
          <Image src={panel.image} alt={panel.label} fill className="object-cover object-center" sizes="100vw" priority={index < 2} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/60 to-[#080c10]/10" />
      </div>

      {/* Content overlay at bottom */}
      <div className="relative z-10 w-full px-5 pb-10 pt-32">
        {/* Number */}
        <span className="block select-none" style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "4.5rem", lineHeight: "0.85",
          color: "rgba(94,196,255,0.12)", marginBottom: "-0.5rem",
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="inline-block text-[9px] font-semibold tracking-[0.3em] uppercase mb-3 px-2.5 py-1" style={{
          color: "#5ec4ff", border: "1px solid rgba(94,196,255,0.3)", background: "rgba(30,111,168,0.25)",
        }}>
          {panel.category}
        </span>

        <h3 className="block mb-2" style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.8rem", lineHeight: "0.92",
          color: "white", textShadow: "0 4px 20px rgba(0,0,0,0.7)",
        }}>
          {panel.label}
        </h3>

        <p className="text-[var(--cream)] text-sm leading-relaxed mb-5 opacity-90 max-w-xs" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}>
          {panel.caption}
        </p>

        <a href={`${WHATS}&text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto%20${encodeURIComponent(panel.label)}`}
          target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-sm py-3 px-5">
          <span>Comprar Nova Coleção</span>
        </a>

        <div className="flex items-center gap-2 mt-5">
          <span className="text-[9px] text-[var(--muted)] tracking-[0.25em] uppercase">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <div className="w-10 h-px bg-[var(--border)]" />
        </div>
      </div>

      {/* Thin separator */}
      <div className="absolute bottom-0 left-5 right-5 h-px opacity-15" style={{ background: "linear-gradient(to right, transparent, var(--lake-blue), transparent)" }} />
    </div>
  );
}

/* ─── Main Gallery Section ─── */
export default function ParallaxGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="galeria" className="relative overflow-hidden" style={{ background: "#080c10" }}>
      {/* Section header */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-10 sm:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-px bg-[var(--lake-glow)]" />
              <span className="text-[var(--lake-glow)] text-[11px] font-semibold tracking-[0.35em] uppercase">
                Lookbook
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem,8vw,7rem)", lineHeight: "0.88", color: "white",
            }}>
              EXPERIÊNCIA
              <br />
              <span style={{ color: "var(--lake-light)" }}>EM MOVIMENTO</span>
            </h2>
          </div>
          <p className="text-[var(--muted)] text-sm max-w-xs leading-relaxed md:pb-2">
            Role para explorar cada peça. Imagens e vídeos que capturam a energia do Lago Paranoá.
          </p>
        </div>
      </div>

      {/* Panels — desktop vs mobile rendering */}
      {panels.map((panel, i) =>
        isMobile ? (
          <MobilePanel key={i} panel={panel} index={i} total={panels.length} />
        ) : (
          <DesktopPanel key={i} panel={panel} index={i} total={panels.length} />
        )
      )}

      {/* End CTA Banner */}
      <div className="relative z-10 py-20 sm:py-28 px-5 sm:px-8 text-center" style={{ background: "linear-gradient(to bottom, #080c10, #0a1018, #080c10)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #5ec4ff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-[var(--lake-glow)] text-xs tracking-[0.35em] uppercase font-semibold mb-5">
            Atendimento Exclusivo
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 7vw, 5.5rem)", lineHeight: "0.95", color: "white", marginBottom: "1.5rem",
          }}>
            GARANTA A SUA
            <br />
            <span style={{ color: "var(--lake-light)" }}>DIRETO NO WHATSAPP</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href={WHATS} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto justify-center">
              <span>Comprar Nova Coleção</span>
            </a>
            <a href="https://www.instagram.com/criadolagobsb" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto justify-center">
              <span>@criadolagobsb</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
