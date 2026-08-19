"use client";
import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, Product, buildWhatsAppLink } from "@/constants/products";
import ProductModal from "./ProductModal";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section id="destaques" className="py-24 md:py-36 relative overflow-hidden bg-[#080c10]">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.07] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--lake-blue), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-[var(--lake-glow)]" />
              <span className="text-[var(--lake-glow)] text-xs font-semibold tracking-[0.3em] uppercase">
                Destaques da Semana
              </span>
            </div>
            <h2
              className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ESTILO QUE
              <br />
              <span className="text-[var(--lake-light)]">VIVE NO LAGO</span>
            </h2>
          </div>
          <a href="#colecao" className="btn-secondary self-start md:self-end">
            <span>Ver Coleção Completa</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => {
            const mainImg = product.images[0];
            const whatsLink = buildWhatsAppLink(product.name, product.sizes[0], mainImg);

            return (
              <article
                key={product.id}
                className="glass hover-lift group cursor-pointer overflow-hidden border border-[var(--border)] rounded-sm flex flex-col justify-between"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#080c10]">
                  <Image
                    src={mainImg}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--lake-glow)] bg-[#080c10]/90 border border-[rgba(94,196,255,0.2)] backdrop-blur-sm px-2 py-1">
                      {product.tag}
                    </span>
                  </div>

                  {/* Quick action button on hover */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                    <a
                      href={whatsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 text-xs font-semibold tracking-widest uppercase text-[var(--bg-dark)] bg-white hover:bg-[var(--lake-glow)] transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-lg"
                    >
                      <span>Saber Preço no WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--lake-glow)] block mb-1 font-semibold">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-white font-semibold text-sm tracking-wide mb-1 group-hover:text-[var(--lake-glow)] transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-[var(--muted)] text-xs leading-relaxed mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                    <span className="text-xs text-emerald-400 font-medium">
                      Consultar WhatsApp
                    </span>
                    <span className="text-[11px] text-[var(--lake-glow)] font-medium">
                      Ver Detalhes →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
