"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Total intro duration in ms
const INTRO_DURATION = 3400;
// When to start the logo-grow + fade-out transition
const GROW_START = 2400;
// Fade out starts at
const FADE_START = 2800;

export default function IntroLoader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"show" | "grow" | "fade" | "done">("show");

  useEffect(() => {
    // Force-play the video ignoring any browser restrictions
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.defaultMuted = true;
      vid.setAttribute("playsinline", "");
      vid.setAttribute("webkit-playsinline", "");
      vid.setAttribute("x-webkit-airplay", "allow");
      vid.play().catch(() => {
        // retry on first user gesture (handled by document listener below)
      });
    }

    // Retry play on first touch/click (iOS may require this)
    const retryPlay = () => {
      if (vid) {
        vid.muted = true;
        vid.play().catch(() => {});
      }
      document.removeEventListener("touchstart", retryPlay);
      document.removeEventListener("click", retryPlay);
    };
    document.addEventListener("touchstart", retryPlay, { passive: true });
    document.addEventListener("click", retryPlay, { passive: true });

    // Phase timers
    const t1 = setTimeout(() => setPhase("grow"), GROW_START);
    const t2 = setTimeout(() => setPhase("fade"), FADE_START);
    const t3 = setTimeout(() => setPhase("done"), INTRO_DURATION);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.removeEventListener("touchstart", retryPlay);
      document.removeEventListener("click", retryPlay);
    };
  }, []);

  if (phase === "done") return null;

  const isGrow = phase === "grow" || phase === "fade";
  const isFade = phase === "fade";

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden bg-[#080c10]"
      style={{
        opacity: isFade ? 0 : 1,
        transition: isFade ? "opacity 600ms ease-in-out" : "none",
      }}
    >
      {/* ── Background video ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
        // Suppress React hydration warnings for non-standard attrs
        suppressHydrationWarning
      >
        <source src="/media/videos/cria2.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so logo is readable */}
      <div className="absolute inset-0 bg-[#080c10]/55 z-[1]" />

      {/* Radial glow behind logo */}
      <div
        className="absolute z-[2] rounded-full pointer-events-none"
        style={{
          width: isGrow ? "120vmax" : "400px",
          height: isGrow ? "120vmax" : "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(94,196,255,0.25) 0%, rgba(30,111,168,0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
          transition: isGrow ? "width 900ms cubic-bezier(0.4,0,0.2,1), height 900ms cubic-bezier(0.4,0,0.2,1)" : "none",
        }}
      />

      {/* ── Logo + text — expands and takes over screen ── */}
      <div
        className="absolute inset-0 z-[3] flex flex-col items-center justify-center"
        style={{
          transform: isGrow ? "scale(1.7)" : "scale(1)",
          opacity: isGrow ? 0.85 : 1,
          transition: isGrow
            ? "transform 900ms cubic-bezier(0.4,0,0.2,1), opacity 900ms ease"
            : "none",
        }}
      >
        {/* Logo circle */}
        <div
          className="relative rounded-full overflow-hidden border-2 border-[var(--lake-glow)]"
          style={{
            width: isGrow ? "180px" : "96px",
            height: isGrow ? "180px" : "96px",
            boxShadow: isGrow
              ? "0 0 80px rgba(94,196,255,0.7), 0 0 160px rgba(94,196,255,0.35)"
              : "0 0 40px rgba(94,196,255,0.5)",
            transition: isGrow
              ? "width 900ms cubic-bezier(0.4,0,0.2,1), height 900ms cubic-bezier(0.4,0,0.2,1), box-shadow 900ms ease"
              : "none",
          }}
        >
          <Image
            src="/criadolago.jpg"
            alt="Cria do Lago Logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Brand name */}
        <div className="flex flex-col items-center mt-6 leading-none">
          <span
            className="text-white tracking-[0.15em]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: isGrow ? "clamp(3rem, 8vw, 5rem)" : "clamp(2rem, 6vw, 2.5rem)",
              transition: isGrow ? "font-size 900ms cubic-bezier(0.4,0,0.2,1)" : "none",
              textShadow: "0 0 40px rgba(94,196,255,0.4)",
            }}
          >
            CRIA DO LAGO
          </span>
          <span
            className="text-[var(--lake-glow)] font-semibold tracking-[0.4em] uppercase mt-2"
            style={{
              fontSize: isGrow ? "0.85rem" : "0.65rem",
              transition: isGrow ? "font-size 900ms ease" : "none",
            }}
          >
            Brasília • Lago Paranoá
          </span>
        </div>

        {/* Progress bar — only visible in "show" phase */}
        {!isGrow && (
          <div className="w-32 h-[2px] bg-white/15 rounded-full overflow-hidden mt-8">
            <div
              className="h-full bg-gradient-to-r from-[var(--lake-blue)] to-[var(--lake-glow)] rounded-full"
              style={{
                animation: `progressBar ${GROW_START}ms linear forwards`,
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
