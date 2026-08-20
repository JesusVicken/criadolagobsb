export type CategoryKey = 
  | "todos" 
  | "bones" 
  | "viseiras" 
  | "manga-longa" 
  | "cortavento" 
  | "regatas" 
  | "blusinhas" 
  | "ponchos"
  | "capas" 
  | "blusas-masc";

export interface Product {
  id: string;
  name: string;
  category: CategoryKey;
  categoryLabel: string;
  tag: string;
  badge?: "Mais Vendido" | "Lançamento" | "Proteção UV50+" | "Edição Limitada" | "Destaque";
  sizes: string[];
  description: string;
  features: string[];
  images: string[];
  video?: string;
  inStock: boolean;
}

export const WHATS_NUMBER = "5561992078620";
export const WHATS_BASE_URL = `https://wa.me/${WHATS_NUMBER}`;

export const buildWhatsAppLink = (productName?: string, size?: string, imageSrc?: string) => {
  if (productName) {
    let message = `Olá! Vi o site da Cria do Lago e gostaria de saber o valor do modelo *${productName}*`;
    if (size) {
      message += ` (Tamanho: *${size}*)`;
    }
    if (imageSrc) {
      message += ` (Ref: ${imageSrc})`;
    }
    message += `. Poderia me passar o preço e formas de envio? 🚣‍♂️`;
    return `${WHATS_BASE_URL}?text=${encodeURIComponent(message)}`;
  }
  return `${WHATS_BASE_URL}?text=${encodeURIComponent("Olá! Vi o site da Cria do Lago e gostaria de consultar modelos e preços 🚣‍♂️")}`;
};

export const categoriesFilter: { key: CategoryKey; label: string }[] = [
  { key: "todos", label: "Tudo" },
  { key: "manga-longa", label: "Manga Longa UV" },
  { key: "cortavento", label: "Corta-Vento" },
  { key: "ponchos", label: "Ponchos" },
  { key: "bones", label: "Bonés" },
  { key: "viseiras", label: "Viseiras" },
  { key: "regatas", label: "Regatas" },
  { key: "blusinhas", label: "Tops & Blusinhas" },
  { key: "blusas-masc", label: "Blusas Casual" },
  { key: "capas", label: "Acessórios & Capas" },
];

export const PRODUCTS: Product[] = [
  {
    id: "manga-fem",
    name: "Blusa Manga Longa UV - Feminina",
    category: "manga-longa",
    categoryLabel: "Manga Longa UV",
    tag: "Proteção UV50+",
    badge: "Mais Vendido",
    sizes: ["P", "M", "G", "GG"],
    description: "Modelagem feminina anatômica criada para remadas e treinos sob o sol forte do Lago Paranoá. Conforto térmico avançado, alta elasticidade e toque suave na pele.",
    features: [
      "Fator de proteção solar UV50+ certificado",
      "Tecido tecnológico de rápida secagem",
      "Costuras planas anti-atrito para remada",
      "Alta compressão confortável"
    ],
    images: [
      "/media/fotos/blusaUVfeminina.jpg",
      "/media/fotos/blusaUVfeminina1.jpg",
      "/media/fotos/blusaUVfeminina2.jpg",
      "/media/fotos/blusaUVfem.jpg",
      "/media/fotos/blusaUVfem2.jpg",
      "/media/fotos/modelo5.jpg"
    ],
    video: "/media/videos/blusaUvFemPrincipal.mp4",
    inStock: true
  },
  {
    id: "manga-masc",
    name: "Blusa Manga Longa UV - Masculina",
    category: "manga-longa",
    categoryLabel: "Manga Longa UV",
    tag: "Proteção UV50+",
    badge: "Destaque",
    sizes: ["P", "M", "G", "GG", "XGG"],
    description: "Desenvolvida para máxima proteção solar em treinos intensos e expedições na água. Caimento ajustado que não prende o movimento de remada.",
    features: [
      "Proteção máxima UV50+",
      "Dispersão ultrarrápida de suor e água",
      "Resistência ao cloro e água salgada/doce",
      "Gola anatômica de cobertura do pescoço"
    ],
    images: [
      "/media/fotos/blusaUVmas.jpg",
      "/media/fotos/blusaUVmas2.jpg",
      "/media/fotos/blusaUVmas3.jpg",
      "/media/fotos/blusaUVmas4.png"
    ],
    video: "/media/videos/blusaUV3.mp4",
    inStock: true
  },
  {
    id: "cortavento-fem",
    name: "Jaqueta Corta-Vento Feminina",
    category: "cortavento",
    categoryLabel: "Corta-Vento",
    tag: "Outerwear",
    badge: "Lançamento",
    sizes: ["P", "M", "G", "GG"],
    description: "Desenvolvida para proteger a atleta dos ventos fortes e garoas no Lago Paranoá. Tecido ultraleve, dobrável e altamente resistente.",
    features: [
      "Repelência à água e barreira contra o vento",
      "Capuz ergonômico com regulador",
      "Bolso interno utilitário",
      "Punhos com elástico e zíper selado"
    ],
    images: [
      "/media/fotos/cortaventoPrincipal.jpeg",
      "/media/fotos/cortaventoFem.jpg",
      "/media/fotos/cortaventoFem2.jpg",
      "/media/fotos/cortaventoFem3.jpg",
      "/media/fotos/cortaventoFem4.jpg",
      "/media/fotos/cortaventoFem5.jpg",
      "/media/fotos/cortaventoFem6.jpg"
    ],
    video: "/media/videos/cortavento2.mp4",
    inStock: true
  },
  {
    id: "cortavento-masc",
    name: "Jaqueta Corta-Vento Masculina",
    category: "cortavento",
    categoryLabel: "Corta-Vento",
    tag: "Outerwear",
    badge: "Destaque",
    sizes: ["P", "M", "G", "GG", "XGG"],
    description: "Design funcional de alta performance. Estrutura corta-vento compacta com respiro posterior para evitar acúmulo de calor.",
    features: [
      "Tecido ultra-resistente e leve",
      "Aberturas para ventilação estratégica",
      "Logo refletiva para segurança",
      "Secagem ultra rápida"
    ],
    images: [
      "/media/fotos/cortaventoMasc.jpg",
      "/media/fotos/cortaventoMasc2.jpg",
      "/media/fotos/cortaventoMasc3.jpg"
    ],
    video: "/media/videos/Criadolago.mp4",
    inStock: true
  },
  {
    id: "poncho-cria",
    name: "Poncho Toalha Cria do Lago",
    category: "ponchos",
    categoryLabel: "Ponchos & Pós-Treino",
    tag: "Lifestyle & Conforto",
    badge: "Lançamento",
    sizes: ["Tamanho Único"],
    description: "Poncho toalha super absorvente e macio. Perfeito para troca de roupa rápida à beira do Lago Paranoá, se aquecer pós-remada e relaxar com estilo.",
    features: [
      "Tecido atoalhado aveludado de alta absorção",
      "Capuz amplo para secagem do cabelo",
      "Bolso canguru frontal utilitário",
      "Modelagem ampla para fácil troca de roupa"
    ],
    images: [],
    video: "/media/videos/poncho.mp4",
    inStock: true
  },
  {
    id: "top-cria-fem",
    name: "Top & Blusinha Cria do Lago",
    category: "blusinhas",
    categoryLabel: "Tops & Blusinhas",
    tag: "Vestuário",
    badge: "Edição Limitada",
    sizes: ["P", "M", "G"],
    description: "Peça essencial para treinos aquáticos e ao ar livre. Tecido macio com elasticidade bidirecional para sustentação perfeita e conforto zero atrito.",
    features: [
      "Alta sustentação sem apertar",
      "Tecido respirável e leve",
      "Decote anatômico para liberdade de braços",
      "Proteção UV30+"
    ],
    images: [
      "/media/fotos/topPrincipal.jpeg",
      "/media/fotos/top.jpg",
      "/media/fotos/top3.jpg",
      "/media/fotos/top4.jpg",
      "/media/fotos/top5.png",
      "/media/fotos/top6.jpg",
      "/media/fotos/topVerde.jpeg",
      "/media/fotos/topVerde2.jpeg",
      "/media/fotos/topVerde3.jpeg",
      "/media/fotos/topVerde4.jpeg"
    ],
    video: "/media/videos/videoblusinha.mp4",
    inStock: true
  },
  {
    id: "regata-fem",
    name: "Regata Feminina Lago Paranoá",
    category: "regatas",
    categoryLabel: "Regatas",
    tag: "Vestuário",
    badge: "Destaque",
    sizes: ["P", "M", "G", "GG"],
    description: "Regata feminina leve e fluida, ideal para os dias mais quentes no lago. Cavada na medida certa para movimentação livre dos braços.",
    features: [
      "Tecido superleve com microperfurações",
      "Toque fresco na pele",
      "Não retém suor nem odor",
      "Estampa frontal exclusiva"
    ],
    images: [
      "/media/fotos/regataFem.jpg",
      "/media/fotos/regataFem2.jpg",
      "/media/fotos/regataFem3.jpg",
      "/media/fotos/regataFem4.jpg",
      "/media/fotos/regata2.png"
    ],
    video: "/media/videos/regata.mp4",
    inStock: true
  },
  {
    id: "regata-masc",
    name: "Regata Masculina Cria do Lago",
    category: "regatas",
    categoryLabel: "Regatas",
    tag: "Vestuário",
    badge: "Mais Vendido",
    sizes: ["P", "M", "G", "GG", "XGG"],
    description: "Modelagem masculina com corte atlético para remadores e desportistas. Malha técnica que garante resfriamento constante do corpo.",
    features: [
      "Corte atlético de alta mobilidade",
      "Tecido ultra macio e leve",
      "Secagem express",
      "Resistência à fricção do colete/remo"
    ],
    images: [
      "/media/fotos/regataMasc4.jpg",
      "/media/fotos/regataMasc.jpg",
      "/media/fotos/regataMasc2.jpg",
      "/media/fotos/regataMasc3.jpg"
    ],
    video: "/media/videos/Criadolago.mp4",
    inStock: true
  },
  {
    id: "bone-cria",
    name: "Boné Trucker Cria do Lago",
    category: "bones",
    categoryLabel: "Bonés",
    tag: "Headwear",
    badge: "Mais Vendido",
    sizes: ["Tamanho Único"],
    description: "O boné clássico que carrega a identidade Cria do Lago. Aba curvada estruturada, tela respirável nas costas e fecho ajustável Snapback.",
    features: [
      "Painel frontal com bordado/patch premium",
      "Traseira em mesh de alta ventilação",
      "Fecho snapback regulável",
      "Faixa interna antitranspirante"
    ],
    images: [
      "/media/fotos/bone.jpg",
      "/media/fotos/bone2.jpg",
      "/media/fotos/bone3.jpg",
      "/media/fotos/bone4.jpg",
      "/media/fotos/bone5.jpg",
      "/media/fotos/bone6.jpg",
      "/media/fotos/bone7.jpg",
      "/media/fotos/bone8.jpg",
      "/media/fotos/bone9.jpg"
    ],
    inStock: true
  },
  {
    id: "viseira-cria",
    name: "Viseira Performance Cria do Lago",
    category: "viseiras",
    categoryLabel: "Viseiras",
    tag: "Headwear",
    badge: "Lançamento",
    sizes: ["Tamanho Único"],
    description: "Viseira anatômica com faixa de absorção de suor para alta intensidade no remo e corrida. Mantém a visão limpa e cabeça fresca sob o sol.",
    features: [
      "Super leve (menos de 40 gramas)",
      "Ajuste em velcro macio sem machucar",
      "Absorção de suor de secagem rápida",
      "Aba com formato anti-reflexo"
    ],
    images: [
      "/media/fotos/viseira1.jpg",
      "/media/fotos/viseira2.jpg"
    ],
    inStock: true
  },
  {
    id: "blusa-masc",
    name: "Blusa Casual Masculina",
    category: "blusas-masc",
    categoryLabel: "Blusas Casual",
    tag: "Lifestyle",
    badge: "Destaque",
    sizes: ["P", "M", "G", "GG"],
    description: "Blusa casual premium com toque macio e excelente caimento para usar antes, durante e depois dos treinos.",
    features: [
      "Algodão macio e confortável",
      "Modelagem casual moderna",
      "Caimento perfeito",
      "Estampa com identidade Cria do Lago"
    ],
    images: [
      "/media/fotos/blusaMasc.jpg"
    ],
    inStock: true
  },
  {
    id: "capas-remo",
    name: "Capa Protetora de Remo",
    category: "capas",
    categoryLabel: "Acessórios & Capas",
    tag: "Equipamento",
    badge: "Edição Limitada",
    sizes: ["Tamanho Único"],
    description: "Capa reforçada para transporte e proteção de remos. Revestimento almofadado anti-impacto, bolso para cera/chaves e alça ajustável de ombro.",
    features: [
      "Zíper reforçado antioxidante",
      "Forro interno espesso acolchoado",
      "Alça tiracolo regulável com proteção",
      "Material externo impermeável"
    ],
    images: [
      "/media/fotos/capa1.jpg",
      "/media/fotos/capa2.jpeg"
    ],
    video: "/media/videos/capa.mp4",
    inStock: true
  }
];
