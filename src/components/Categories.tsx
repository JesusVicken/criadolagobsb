"use client";
import { useState } from "react";
import Image from "next/image";

const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20tenho%20interesse%20em%20uma%20pe%C3%A7a%20%F0%9F%9A%A3";

type CategoryKey = "todos" | "bones" | "viseiras" | "cortavento" | "regatas" | "manga-longa" | "blusinhas" | "capas" | "blusas-masc";

interface ProductGroup {
  id: string;
  name: string;
  category: CategoryKey;
  categoryLabel: string;
  tag: string;
  images: string[];
  description: string;
}

const productGroups: ProductGroup[] = [
  {
    id: "group-manga-fem",
    name: "Blusa Manga Longa UV - Feminina",
    category: "manga-longa",
    categoryLabel: "Manga Longa UV",
    tag: "Proteção UV",
    description: "Modelagem feminina leve com proteção UV50+. Conforto térmico, alta elasticidade e ajuste perfeito para treinos de alta performance.",
    images: [
      "/media/fotos/blusa.jpg",
      "/media/fotos/blusa2.jpg",
      "/media/fotos/modelo5.jpg",
    ],
  },
  {
    id: "group-manga-masc",
    name: "Blusa Manga Longa UV - Masculina",
    category: "manga-longa",
    categoryLabel: "Manga Longa UV",
    tag: "Proteção UV",
    description: "Tecido tecnológico leve com proteção UV50+. Alta durabilidade e rápida dispersão de calor para remadas de longa duração.",
    images: [
      "/media/fotos/modelo1.jpg",
      "/media/fotos/modelo2.jpg",
      "/media/fotos/modelo3.jpg",
    ],
  },
  {
    id: "group-viseiras",
    name: "Viseiras Cria do Lago",
    category: "viseiras",
    categoryLabel: "Viseiras",
    tag: "Headwear",
    description: "Viseira ultraleve e anatômica com faixa ajustável. Perfeita absorção de suor para manter a visibilidade livre durante a atividade.",
    images: [
      "/media/fotos/viseira1.jpg",
      "/media/fotos/viseira2.jpg",
    ],
  },
  {
    id: "group-bones",
    name: "Boné Cria do Lago",
    category: "bones",
    categoryLabel: "Bonés",
    tag: "Headwear",
    description: "Design clássico estruturado com tela respirável de alta qualidade. Conforto e identidade Cria do Lago para usar em qualquer lugar.",
    images: [
      "/media/fotos/bone.jpg",
      "/media/fotos/bone2.jpg",
      "/media/fotos/bone3.jpg",
      "/media/fotos/bone4.jpg",
      "/media/fotos/bone5.jpg",
      "/media/fotos/bone6.jpg",
      "/media/fotos/bone7.jpg",
      "/media/fotos/bone8.jpg",
      "/media/fotos/bone9.jpg",
    ],
  },
  {
    id: "group-capas",
    name: "Capa de Remo",
    category: "capas",
    categoryLabel: "Acessórios",
    tag: "Equipamento",
    description: "Capa protetora para remos com material resistente e forro acolchoado. Segurança máxima para o transporte do seu equipamento.",
    images: [
      "/media/fotos/capa3.jpeg",
      "/media/fotos/capa2.jpg",
      "/media/fotos/capa1.jpg",
    ],
  },
  {
    id: "group-top-cria",
    name: "Top Cria do Lago",
    category: "blusinhas",
    categoryLabel: "Tops",
    tag: "Vestuário",
    description: "Nossas blusinhas e tops mais desejados. Feitos com tecidos confortáveis de alta compressão para dar total liberdade de movimento.",
    images: [
      "/media/fotos/blusinha.jpg",
      "/media/fotos/blusinha2.jpg",
      "/media/fotos/blusinha3.jpg",
      "/media/fotos/blusinha4.jpg",
      "/media/fotos/blusinha5.jpg",
      "/media/fotos/blusinha7.jpg",
      "/media/fotos/blusinha9.jpeg",
    ],
  },
  {
    id: "group-cortavento-masc",
    name: "Corta-Vento Masculino",
    category: "cortavento",
    categoryLabel: "Corta-Vento",
    tag: "Outerwear",
    description: "Jaqueta corta-vento leve e compacta. Resistente a ventos fortes e garoas finas no Lago Paranoá.",
    images: [
      "/media/fotos/cortavento9.jpg",
      "/media/fotos/cortavento3.jpg",
      "/media/fotos/cortavento5.jpg",
      "/media/fotos/cortavento7.jpeg",
    ],
  },
  {
    id: "group-cortavento-fem",
    name: "Corta-Vento Feminino",
    category: "cortavento",
    categoryLabel: "Corta-Vento",
    tag: "Outerwear",
    description: "Modelagem feminina moderna com capuz ajustável e proteção contra o vento e frio.",
    images: [
      "/media/fotos/cortavento2.jpg",
      "/media/fotos/cortavento4.jpg",
      "/media/fotos/cortavento10.jpg",
      "/media/fotos/cortavento5.jpg",
      "/media/fotos/cortavento.jpg",
      "/media/fotos/cortavento7.jpeg",
      "/media/fotos/cortavento8.jpg",
    ],
  },
  {
    id: "group-regatas-fem",
    name: "Regata Feminina",
    category: "regatas",
    categoryLabel: "Regatas",
    tag: "Vestuário",
    description: "Regatas femininas leves e anatômicas. Conforto absoluto com máxima ventilação para os dias quentes.",
    images: [
      "/media/fotos/modelo4.jpg",
      "/media/fotos/regata2.jpg",
      "/media/fotos/regata3.jpg",
    ],
  },
  {
    id: "group-regatas-masc",
    name: "Regata Masculina",
    category: "regatas",
    categoryLabel: "Regatas",
    tag: "Vestuário",
    description: "Regatas masculinas em tecido tecnológico de secagem rápida. Modelagem livre para remada.",
    images: [
      "/media/fotos/regataHero.png",
      "/media/fotos/regata1.jpg",
      "/media/fotos/regata2.jpg",
      "/media/fotos/regata.jpg",
    ],
  },
  {
    id: "group-blusa-masc",
    name: "Blusa Masculina",
    category: "blusas-masc",
    categoryLabel: "Vestuário",
    tag: "Lifestyle",
    description: "Blusa casual premium com toque macio e excelente caimento para usar antes e depois dos treinos.",
    images: [
      "/media/fotos/modelo7.jpg",
    ],
  },
];

const categoriesFilter = [
  { key: "todos", label: "Tudo" },
  { key: "bones", label: "Bonés" },
  { key: "viseiras", label: "Viseiras" },
  { key: "manga-longa", label: "Manga Longa UV" },
  { key: "cortavento", label: "Corta-Vento" },
  { key: "regatas", label: "Regatas" },
  { key: "blusinhas", label: "Tops" },
  { key: "capas", label: "Acessórios" },
];

/* ─── Carousel Card Component ─── */
function ProductCardCarousel({ group }: { group: ProductGroup }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % group.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + group.images.length) % group.images.length);
  };

  const currentImg = group.images[currentIndex];

  return (
    <article className="glass hover-lift group flex flex-col justify-between overflow-hidden border border-[var(--border)] bg-[#0e1420]/80 rounded-sm">
      {/* Image Slider Wrapper */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#080c10]">
        <Image
          src={currentImg}
          alt={`${group.name} - Opção ${currentIndex + 1}`}
          fill
          className="object-cover object-center transition-all duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-transparent to-transparent opacity-50 pointer-events-none" />

        {/* Tag indicator */}
        <div className="absolute top-3.5 left-3.5">
          <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--lake-glow)] bg-[#080c10]/95 border border-[rgba(94,196,255,0.2)] px-2.5 py-1 rounded-[2px] backdrop-blur-md">
            {group.tag}
          </span>
        </div>

        {/* Counter index overlay */}
        <div className="absolute top-3.5 right-3.5">
          <span className="text-[9px] font-mono tracking-wider text-white/80 bg-[#080c10]/90 px-2 py-0.5 rounded-[2px]">
            {currentIndex + 1}/{group.images.length}
          </span>
        </div>

        {/* Navigation Arrows (Only show if multiple images exist) */}
        {group.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#080c10]/80 border border-[var(--border)] text-white hover:bg-[var(--lake-blue)] hover:border-[var(--lake-glow)] transition-all active:scale-90"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#080c10]/80 border border-[var(--border)] text-white hover:bg-[var(--lake-blue)] hover:border-[var(--lake-glow)] transition-all active:scale-90"
              aria-label="Próxima foto"
            >
              ›
            </button>
          </>
        )}

        {/* Tiny Dot indicator at bottom */}
        {group.images.length > 1 && (
          <div className="absolute bottom-3.5 left-0 right-0 flex justify-center gap-1.5 z-10">
            {group.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-[var(--lake-glow)] w-4"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Details & Call to Action */}
      <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[9px] tracking-[0.25em] text-[var(--lake-glow)] uppercase font-semibold">
            {group.categoryLabel}
          </span>
          <h3 className="text-white font-semibold text-lg tracking-wide group-hover:text-[var(--lake-glow)] transition-colors duration-200">
            {group.name}
          </h3>
          <p className="text-[var(--muted)] text-xs leading-relaxed line-clamp-3">
            {group.description}
          </p>
        </div>

        <a
          href={`${WHATS}&text=Ol%C3%A1!%20Tenho%20interesse%20no%20modelo%20${encodeURIComponent(group.name)}%20(Op%C3%A3o%20de%20Foto%20${currentIndex + 1}%3A%20${encodeURIComponent(group.images[currentIndex])})`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary py-3 text-xs w-full justify-center mt-3"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>Comprar Nova Coleção</span>
        </a>
      </div>
    </article>
  );
}

/* ─── Main Section ─── */
export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("todos");

  const filteredGroups = activeCategory === "todos"
    ? productGroups
    : productGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="colecao" className="py-20 md:py-32 relative overflow-hidden bg-lake-gradient">
      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-[0.07] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--lake-glow), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-[var(--lake-glow)]" />
              <span className="text-[var(--lake-glow)] text-[11px] font-semibold tracking-[0.35em] uppercase">
                Catálogo Oficial
              </span>
            </div>
            <h2
              className="font-display leading-none text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              }}
            >
              NOSSA <span style={{ color: "var(--lake-light)" }}>COLEÇÃO</span>
            </h2>
          </div>

          <p className="text-[var(--muted)] text-sm max-w-sm leading-relaxed">
            Navegue pelo catálogo e folheie as fotos de cada modelo nas setas. Garanta o seu direto pelo WhatsApp.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
          {categoriesFilter.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as CategoryKey)}
                className={`px-4 sm:px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--lake-blue)] text-white border border-[var(--lake-glow)] shadow-[0_0_20px_rgba(94,196,255,0.3)]"
                    : "glass text-[var(--muted)] hover:text-white hover:border-[var(--lake-blue)]"
                }`}
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGroups.map((group) => (
            <ProductCardCarousel key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
