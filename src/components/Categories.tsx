"use client";
import { useState } from "react";
import Image from "next/image";

const WHATS = "https://wa.me/5561992078620?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Cria%20do%20Lago%20e%20tenho%20interesse%20em%20um%20produto%20%F0%9F%9A%A3";

type CategoryKey = "todos" | "bones" | "cortavento" | "regatas" | "blusas" | "atleta";

interface Product {
  id: string;
  name: string;
  category: CategoryKey;
  categoryLabel: string;
  image: string;
  tag: string;
}

const products: Product[] = [
  {
    id: "bone-1",
    name: "Boné Trucker Cria do Lago",
    category: "bones",
    categoryLabel: "Bonés & Viseiras",
    image: "/media/fotos/bone.jpg",
    tag: "Headwear",
  },
  {
    id: "viseira-1",
    name: "Viseira Neon Atleta",
    category: "bones",
    categoryLabel: "Bonés & Viseiras",
    image: "/media/fotos/viseira1.jpg",
    tag: "Headwear",
  },
  {
    id: "bone-2",
    name: "Boné Snapback BSB",
    category: "bones",
    categoryLabel: "Bonés & Viseiras",
    image: "/media/fotos/bone2.jpg",
    tag: "Headwear",
  },
  {
    id: "cortavento-1",
    name: "Jaqueta Corta-Vento impermeável",
    category: "cortavento",
    categoryLabel: "Corta-Vento",
    image: "/media/fotos/cortavento.jpg",
    tag: "Outerwear",
  },
  {
    id: "cortavento-2",
    name: "Corta-Vento Pro Lago",
    category: "cortavento",
    categoryLabel: "Corta-Vento",
    image: "/media/fotos/cortavento2.jpg",
    tag: "Outerwear",
  },
  {
    id: "cortavento-3",
    name: "Corta-Vento Sport BSB",
    category: "cortavento",
    categoryLabel: "Corta-Vento",
    image: "/media/fotos/cortavento3.jpg",
    tag: "Outerwear",
  },
  {
    id: "regata-1",
    name: "Regata Atleta Lago Paranoá",
    category: "regatas",
    categoryLabel: "Regatas",
    image: "/media/fotos/regata.jpg",
    tag: "Vestuário",
  },
  {
    id: "regata-2",
    name: "Regata Dry Fit Performance",
    category: "regatas",
    categoryLabel: "Regatas",
    image: "/media/fotos/regata1.jpg",
    tag: "Vestuário",
  },
  {
    id: "blusinha-1",
    name: "Blusinha UV Protect Feminina",
    category: "blusas",
    categoryLabel: "Blusas & Tops",
    image: "/media/fotos/blusinha.jpg",
    tag: "Vestuário",
  },
  {
    id: "blusa-1",
    name: "Blusa Manga Longa Proteção UV",
    category: "blusas",
    categoryLabel: "Blusas & Tops",
    image: "/media/fotos/blusa.jpg",
    tag: "Vestuário",
  },
  {
    id: "modelo-1",
    name: "Kit Treino Remada Pro",
    category: "atleta",
    categoryLabel: "Linha Atleta",
    image: "/media/fotos/modelo1.jpg",
    tag: "Lifestyle",
  },
  {
    id: "modelo-4",
    name: "Coleção Atleta Lago Paranoá",
    category: "atleta",
    categoryLabel: "Linha Atleta",
    image: "/media/fotos/modelo4.jpg",
    tag: "Lifestyle",
  },
];

const categoriesFilter: { key: CategoryKey; label: string }[] = [
  { key: "todos", label: "Todos os Produtos" },
  { key: "bones", label: "Bonés & Viseiras" },
  { key: "cortavento", label: "Corta-Vento" },
  { key: "regatas", label: "Regatas" },
  { key: "blusas", label: "Blusas & Tops" },
  { key: "atleta", label: "Linha Atleta" },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("todos");

  const filteredProducts = activeCategory === "todos"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="colecao" className="py-24 md:py-32 relative overflow-hidden bg-lake-gradient">
      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-[0.08] blur-[120px] pointer-events-none"
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
            Selecione uma categoria abaixo para navegar pelas peças oficiais da Cria do Lago.
            Sem preços exibidos — escolha a sua favorita e consulte a disponibilidade via WhatsApp.
          </p>
        </div>

        {/* Filter Tabs */}
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
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="glass hover-lift group flex flex-col justify-between overflow-hidden border border-[var(--border)] bg-[#0e1420]/80"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#080c10]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--lake-glow)] bg-[#080c10]/90 border border-[rgba(94,196,255,0.2)] px-2.5 py-1">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product Details & Action */}
              <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase block mb-1">
                    {product.categoryLabel}
                  </span>
                  <h3 className="text-white font-semibold text-base tracking-wide group-hover:text-[var(--lake-glow)] transition-colors duration-200">
                    {product.name}
                  </h3>
                </div>

                <a
                  href={`${WHATS}&text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 text-xs w-full justify-center mt-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Pedir no WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
