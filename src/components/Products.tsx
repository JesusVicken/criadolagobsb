import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/media/editadas/03.png",
    tag: "Headwear",
    name: "Trucker Cap Cria",
    desc: "Tela respirável, aba estruturada e a logo estampada no front. Para treino e para o dia.",
    price: "R$ 89",
  },
  {
    id: 2,
    image: "/media/editadas/04.png",
    tag: "Vestuário",
    name: "Regata Premium",
    desc: "Tecido leve e resistente à água. Feita para aguentar a remada e ainda parecer que você acabou de sair de um editorial.",
    price: "R$ 119",
  },
  {
    id: 3,
    image: "/media/editadas/02.png",
    tag: "Vestuário",
    name: "Rashguard Atleta",
    desc: "Proteção UV50+, compressão leve e fit perfeito. De atleta, para atleta — sem abrir mão do visual.",
    price: "R$ 159",
  },
  {
    id: 4,
    image: "/media/editadas/05.png",
    tag: "Headwear",
    name: "Cap Tropical",
    desc: "Estampa exclusiva, costura reforçada e a identidade Cria do Lago que você leva pra qualquer lugar.",
    price: "R$ 99",
  },
];

export default function Products() {
  return (
    <section id="colecao" className="py-24 md:py-36 relative overflow-hidden">
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
                Coleção
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
          <a href="#contato" className="btn-secondary self-start md:self-end">
            <span>Ver tudo</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <article
              key={product.id}
              className="glass hover-lift group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--lake-glow)] bg-[#080c10]/80 backdrop-blur-sm px-2 py-1">
                    {product.tag}
                  </span>
                </div>

                {/* Quick action on hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-full py-2 text-xs font-semibold tracking-widest uppercase text-[var(--bg-dark)] bg-white hover:bg-[var(--lake-glow)] transition-colors duration-200">
                    Comprar Agora
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm tracking-wide mb-1 group-hover:text-[var(--lake-glow)] transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed mb-3 line-clamp-2">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-lg text-[var(--lake-light)]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {product.price}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-teal)] pulse-glow" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
