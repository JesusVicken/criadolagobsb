"use client";
import { useRef, useEffect } from "react";

interface SafariVideoProps {
  src: string | string[];
  poster?: string;
  className?: string;
}

export default function SafariVideo({ src, poster, className = "" }: SafariVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const video = container.querySelector("video");
    if (!video) return;

    // Force muted via DOM property as well as attribute
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      video.muted = true;
      video.play().catch(() => {
        // iOS may require user gesture on low-power mode, retry on touch
      });
    };

    playVideo();

    const handleTouch = () => {
      playVideo();
      document.removeEventListener("touchstart", handleTouch);
      document.removeEventListener("click", handleTouch);
    };
    document.addEventListener("touchstart", handleTouch, { passive: true });
    document.addEventListener("click", handleTouch, { passive: true });

    const handleLoadedMetadata = () => playVideo();
    const handleCanPlay = () => playVideo();
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("touchstart", handleTouch);
      document.removeEventListener("click", handleTouch);
    };
  }, [src]);

  const sources = Array.isArray(src) ? src : [src];
  const posterAttr = poster ? `poster="${poster}"` : "";

  // Render raw HTML string so Safari's HTML parser receives literal attributes:
  // autoplay, muted, playsinline, webkit-playsinline="true", loop, etc.
  const rawVideoHtml = `
    <video
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline="true"
      x-webkit-airplay="allow"
      disablepictureinpicture
      disableremoteplayback
      preload="auto"
      ${posterAttr}
      class="w-full h-full object-cover pointer-events-none ${className}"
      style="pointer-events: none; -webkit-touch-callout: none;"
    >
      ${sources
        .map((s) => {
          const type = s.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
          return `<source src="${s}" type="${type}" />`;
        })
        .join("")}
    </video>
  `.trim();

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden pointer-events-none ${className}`}
      dangerouslySetInnerHTML={{ __html: rawVideoHtml }}
    />
  );
}
