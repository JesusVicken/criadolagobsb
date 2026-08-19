"use client";
import { useState } from "react";
import Image from "next/image";
import { Product, buildWhatsAppLink } from "@/constants/products";
import SizeGuideModal from "./SizeGuideModal";
import SafariVideo from "./SafariVideo";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) return null;

  const activeSize = selectedSize || product.sizes[0] || "";
  const currentImg = product.images[selectedImageIndex] || product.images[0];
  const whatsAppLink = buildWhatsAppLink(product.name, activeSize, currentImg);

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl bg-[#0e1420] border border-[var(--border)] rounded-sm overflow-hidden max-h-[92vh] flex flex-col md:flex-row shadow-[0_10px_50px_rgba(0,0,0,0.8)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full flex items-center justify-center bg-[#080c10]/90 border border-[var(--border)] text-white hover:border-[var(--lake-glow)] hover:bg-[var(--lake-blue)] transition-all"
            aria-label="Fechar janela do produto"
          >
            ✕
          </button>

          {/* Left Column: Media Gallery */}
          <div className="w-full md:w-1/2 flex flex-col bg-[#080c10] relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {product.video && selectedImageIndex === 0 ? (
                <SafariVideo
                  src={[product.video]}
                  poster={currentImg}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={currentImg}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              )}

              {/* Tag / Badge */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                {product.badge && (
                  <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white bg-[var(--lake-blue)] border border-[var(--lake-glow)] px-2.5 py-1 rounded-[2px]">
                    {product.badge}
                  </span>
                )}
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--lake-glow)] bg-[#080c10]/90 border border-[rgba(94,196,255,0.2)] px-2.5 py-1 rounded-[2px] backdrop-blur-md">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="p-3 flex items-center gap-2 overflow-x-auto bg-[#0b0f17] border-t border-[var(--border)]">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`relative w-14 h-14 shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                      selectedImageIndex === i
                        ? "border-[var(--lake-glow)] opacity-100 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Opção ${i + 1}`} fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & WhatsApp Action */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Category */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-px bg-[var(--lake-glow)]" />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--lake-glow)]">
                  {product.categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-2xl sm:text-3xl text-white font-display uppercase tracking-wide mb-2 leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {product.name}
              </h2>

              {/* Consultation Tag */}
              <div className="mb-4 pb-3 border-b border-[var(--border)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-[var(--lake-light)] font-medium">
                  Consultar Valor & Disponibilidade no WhatsApp
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Selecione o Tamanho Desejado:
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[11px] text-[var(--lake-glow)] hover:underline tracking-wide font-medium flex items-center gap-1"
                  >
                    <span>📐 Guia de Medidas</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm border transition-all ${
                        activeSize === sz
                          ? "bg-[var(--lake-blue)] text-white border-[var(--lake-glow)] shadow-[0_0_15px_rgba(94,196,255,0.3)]"
                          : "glass text-[var(--cream)] border-[var(--border)] hover:border-[var(--lake-blue)] hover:text-white"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6 p-3.5 bg-[#080c10]/70 border border-[var(--border)] rounded-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--lake-glow)] block mb-2">
                    Diferenciais do Modelo
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-[var(--cream)]/90">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[var(--lake-glow)]">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Consultation */}
            <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-2.5">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 px-6 text-xs w-full justify-center text-center font-bold tracking-wider"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Consultar Preço no WhatsApp ({activeSize})</span>
              </a>
              <p className="text-[10px] text-center text-[var(--muted)]">
                💬 Atendimento direto com a equipe Cria do Lago para valores e tamanhos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </>
  );
}
