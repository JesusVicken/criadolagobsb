const marqueeItems = [
  "LAGO PARANOÁ", "CRIA", "BRASÍLIA", "DE ATLETA, PARA ATLETA",
  "REMO", "CANOA HAVAIANA", "MODA",
];

export default function Marquee() {
  // Repeat the items 6 times to ensure seamless infinite track on all screen sizes (PC & Mobile)
  const track = Array(6).fill(marqueeItems).flat();

  return (
    <div className="bg-[var(--lake-blue)] py-3 sm:py-3.5 overflow-hidden relative border-y border-[rgba(94,196,255,0.2)]">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* Track 1 */}
        <div className="flex items-center">
          {track.map((item, i) => (
            <span key={`t1-${i}`} className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4">
              <span
                className="font-display text-sm sm:text-base text-white tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {item}
              </span>
              <span className="text-[var(--lake-glow)] text-[10px]">◆</span>
            </span>
          ))}
        </div>

        {/* Duplicate Track 2 for 100% seamless infinite scroll */}
        <div className="flex items-center">
          {track.map((item, i) => (
            <span key={`t2-${i}`} className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4">
              <span
                className="font-display text-sm sm:text-base text-white tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {item}
              </span>
              <span className="text-[var(--lake-glow)] text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
