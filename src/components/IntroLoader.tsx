"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function IntroLoader() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start exit animation after 2.8s (increased by 1s)
    const timer1 = setTimeout(() => {
      setLoaded(true);
    }, 2800);

    // Remove from DOM after fade animation completes (3.4s)
    const timer2 = setTimeout(() => {
      setHidden(true);
    }, 3400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080c10] transition-opacity duration-700 ease-in-out ${
        loaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Video using cria2.mp4 */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-25">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/videos/cria2.mp4" type="video/mp4" />
          <source src="/cria2.mp4" type="video/mp4" />
        </video>
        {/* Dark vignette to keep focus on logo */}
        <div className="absolute inset-0 bg-[#080c10]/40" />
      </div>

      {/* Background radial glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-35 blur-[100px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, #5ec4ff 0%, #1e6fa8 50%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center animate-fade-up">
        {/* Pulsing Logo Container */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[var(--lake-glow)] shadow-[0_0_40px_rgba(94,196,255,0.5)] animate-pulse">
          <Image
            src="/criadolago.jpg"
            alt="Cria do Lago Logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Brand Text */}
        <div className="flex flex-col items-center leading-none">
          <span
            className="font-display text-4xl sm:text-5xl text-white tracking-[0.15em]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            CRIA DO LAGO
          </span>
          <span className="text-[var(--lake-glow)] text-[10px] sm:text-xs font-semibold tracking-[0.4em] uppercase mt-1.5">
            Brasília • Lago Paranoá
          </span>
        </div>

        {/* Loading Bar */}
        <div className="w-32 h-[2px] bg-white/15 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-[var(--lake-blue)] to-[var(--lake-glow)] w-full animate-[marquee_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
