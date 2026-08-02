const marqueeItems = [
  "LAGO PARANOÁ", "CRIA", "BRASÍLIA", "DE ATLETA, PARA ATLETA",
  "REMO", "CANOA HAVAIANA", "MODA",
];

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="bg-[var(--lake-blue)] py-3 overflow-hidden relative">
      <div className="flex gap-0 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            <span
              className="font-display text-sm text-white tracking-[0.25em] uppercase px-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {item}
            </span>
            <span className="text-white/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
