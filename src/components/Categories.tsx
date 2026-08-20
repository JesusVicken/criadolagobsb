"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import {
  PRODUCTS,
  Product,
  CategoryKey,
  categoriesFilter,
  buildWhatsAppLink,
} from "@/constants/products";
import ProductModal from "./ProductModal";
import SafariVideo from "./SafariVideo";

/* ─── Product Card ─── */
function ProductCard({
  product,
  onSelectProduct,
}: {
  product: Product;
  onSelectProduct: (product: Product) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const videoList = product.videos || (product.video ? [product.video] : []);
  const numVideos = videoList.length;
  const hasImages = product.images && product.images.length > 0;
  const numImages = hasImages ? product.images.length : 0;
  const totalSlides = numVideos + numImages;

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (totalSlides > 1) {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (totalSlides > 1) {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    setTouchStart(null);
  };

  // Determine active media to show
  const isVideoSlide = currentIndex < numVideos;
  const currentVideo = isVideoSlide ? videoList[currentIndex] : null;
  const photoIndex = currentIndex - numVideos;
  const currentImg = hasImages ? (product.images[photoIndex] || product.images[0]) : "";

  const whatsAppLink = buildWhatsAppLink(
    product.name,
    product.sizes[0],
    isVideoSlide ? currentVideo! : currentImg
  );

  return (
    <article className="glass hover-lift group flex flex-col justify-between overflow-hidden border border-[var(--border)] bg-[#0e1420]/80 rounded-sm transition-all duration-300">
      {/* Image / Video Container */}
      <div
        className="relative aspect-[4/5] overflow-hidden bg-[#080c10] select-none touch-pan-y cursor-pointer"
        onClick={() => onSelectProduct(product)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {isVideoSlide && currentVideo ? (
          <SafariVideo
            key={currentVideo}
            src={[currentVideo]}
            poster={product.images[0] || ""}
            className="w-full h-full object-cover"
          />
        ) : currentImg ? (
          <Image
            src={currentImg}
            alt={`${product.name} - Imagem ${currentIndex + 1}`}
            fill
            className="object-cover object-center transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--muted)] text-xs">
            Foto em breve
          </div>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.badge && (
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white bg-[var(--lake-blue)] border border-[var(--lake-glow)] px-2.5 py-1 rounded-[2px] shadow-lg">
              {product.badge}
            </span>
          )}
          <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--lake-glow)] bg-[#080c10]/90 border border-[rgba(94,196,255,0.2)] px-2.5 py-1 rounded-[2px] backdrop-blur-md">
            {product.tag}
          </span>
        </div>

        {/* Video / Photo Counter Badge */}
        {totalSlides > 1 ? (
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            <span className="text-[9px] font-mono tracking-wider text-white/90 bg-[#080c10]/90 px-2 py-0.5 rounded-[2px] border border-white/10">
              {isVideoSlide ? `▶ VÍDEO ${numVideos > 1 ? currentIndex + 1 : ""}` : `${currentIndex + 1}/${totalSlides}`}
            </span>
          </div>
        ) : isVideoSlide ? (
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            <span className="text-[9px] font-semibold tracking-widest text-[var(--lake-glow)] bg-[#080c10]/90 px-2 py-0.5 rounded-[2px] border border-[var(--lake-glow)]/30">
              ▶ VÍDEO
            </span>
          </div>
        ) : null}

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#080c10]/80 border border-[var(--border)] text-white hover:bg-[var(--lake-blue)] hover:border-[var(--lake-glow)] transition-all active:scale-90 z-20 opacity-0 group-hover:opacity-100"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-[#080c10]/80 border border-[var(--border)] text-white hover:bg-[var(--lake-glow)] transition-all active:scale-90 z-20 opacity-0 group-hover:opacity-100"
              aria-label="Próximo"
            >
              ›
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {totalSlides > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-[var(--lake-glow)] w-4"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Details & Actions */}
      <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[9px] tracking-[0.25em] text-[var(--lake-glow)] uppercase font-semibold">
              {product.categoryLabel}
            </span>
            <span className="text-[10px] text-[var(--muted)] font-mono">
              {product.sizes.join(" · ")}
            </span>
          </div>

          <h3
            onClick={() => onSelectProduct(product)}
            className="text-white font-semibold text-base sm:text-lg tracking-wide group-hover:text-[var(--lake-glow)] transition-colors duration-200 cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-[var(--muted)] text-xs leading-relaxed line-clamp-2 mt-1.5">
            {product.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-3 text-[11px] w-full justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Saber Preço no WhatsApp</span>
          </a>

          <button
            onClick={() => onSelectProduct(product)}
            className="btn-secondary py-2 px-3 text-[11px] w-full justify-center"
          >
            <span>Ver Detalhes & Medidas</span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ─── Main Section ─── */
export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === "todos" || p.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="colecao" className="py-20 md:py-32 relative overflow-hidden bg-lake-gradient">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-[0.07] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--lake-glow), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-[var(--lake-glow)]" />
              <span className="text-[var(--lake-glow)] text-[11px] font-semibold tracking-[0.35em] uppercase">
                Coleção Oficial
              </span>
            </div>
            <h2
              className="font-display leading-none text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              }}
            >
              LANÇAMENTOS <span style={{ color: "var(--lake-light)" }}>DA COLEÇÃO</span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col gap-3 max-w-md w-full md:w-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar modelo ou categoria..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#080c10]/90 border border-[var(--border)] focus:border-[var(--lake-glow)] text-white text-xs px-4 py-3 rounded-sm outline-none transition-all placeholder-[var(--muted)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted)] hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
            <p className="text-[var(--muted)] text-xs leading-relaxed">
              Clique em &quot;Saber Preço no WhatsApp&quot; para ser atendido diretamente pela nossa equipe.
            </p>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar scroll-smooth">
          {categoriesFilter.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--lake-blue)] text-white border border-[var(--lake-glow)] shadow-[0_0_20px_rgba(94,196,255,0.3)]"
                    : "glass text-[var(--muted)] hover:text-white hover:border-[var(--lake-blue)]"
                }`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelectProduct={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center glass border border-[var(--border)] rounded-sm">
            <span className="text-3xl block mb-3">🔍</span>
            <h3 className="text-lg font-semibold text-white mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-xs text-[var(--muted)] mb-4">
              Tente buscar por outro termo ou mude a categoria selecionada.
            </p>
            <button
              onClick={() => {
                setActiveCategory("todos");
                setSearchQuery("");
              }}
              className="btn-primary py-2 px-5 text-xs"
            >
              <span>Ver Todos os Produtos</span>
            </button>
          </div>
        )}
      </div>

      {/* Detailed Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
