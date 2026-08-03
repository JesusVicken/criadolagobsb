"use client";
import { useRef, useEffect } from "react";

interface SafariVideoProps {
  src: string | string[];
  poster?: string;
  className?: string;
}

/**
 * Video component with full Safari/iOS compatibility.
 * 
 * Key Safari/iOS requirements:
 * 1. Videos MUST be muted for autoplay
 * 2. playsInline attribute is required (no fullscreen on play)
 * 3. webkit-playsinline for older Safari versions
 * 4. Videos should be H.264 Baseline Profile
 * 5. Content-Type must be video/mp4
 * 6. preload="metadata" works better than "auto" on iOS
 */
export default function SafariVideo({ src, poster, className = "" }: SafariVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set attributes that React doesn't natively support for Safari
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x-webkit-airplay", "allow");
    video.setAttribute("playsinline", "");
    
    // iOS Safari requires muted for autoplay - ensure it's set via DOM
    video.muted = true;
    video.defaultMuted = true;

    // Force play function with multiple retry strategies
    const tryPlay = () => {
      if (!video) return;
      
      // Ensure video is ready
      video.muted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay was blocked, try again after a short delay
          setTimeout(() => {
            if (video) {
              video.muted = true;
              video.play().catch(() => {
                // Final fallback: poster image will show
              });
            }
          }, 500);
        });
      }
    };

    // Strategy 1: Try playing when metadata loads
    const handleLoadedMetadata = () => tryPlay();
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Strategy 2: Try playing when data is available
    const handleCanPlay = () => tryPlay();
    video.addEventListener("canplay", handleCanPlay);

    // Strategy 3: Try playing immediately
    tryPlay();

    // Strategy 4: Try on user interaction (iOS may require first touch)
    const handleTouch = () => {
      tryPlay();
      // Remove after first touch
      document.removeEventListener("touchstart", handleTouch);
      document.removeEventListener("click", handleTouch);
    };
    document.addEventListener("touchstart", handleTouch, { passive: true });
    document.addEventListener("click", handleTouch, { passive: true });

    // Strategy 5: Try on visibility change (tab switching)
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Strategy 6: Intersection Observer - play only when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("touchstart", handleTouch);
      document.removeEventListener("click", handleTouch);
      observer.disconnect();
    };
  }, []);

  const sources = Array.isArray(src) ? src : [src];

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
      // Suppress React hydration warnings for webkit attributes
      suppressHydrationWarning
    >
      {sources.map((s, i) => (
        <source key={i} src={s} type="video/mp4" />
      ))}
    </video>
  );
}
