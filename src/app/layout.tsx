import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://criadolago.com.br"),
  alternates: {
    canonical: "https://criadolago.com.br",
  },
  title: "Cria do Lago · Cria · Moda Esportiva & Roupas Aquáticas de Brasília",
  description:
    "Cria do Lago (Cria) — Marca oficial de moda esportiva e roupas de treino no Lago Paranoá em Brasília. Corta-vento, Manga Longa UV50+, Regatas, Tops e Poncho Toalha.",
  keywords: [
    "Cria",
    "Lago",
    "Cria do Lago",
    "Cria do Lago BSB",
    "Cria Lago",
    "Cria do Lago Brasília",
    "Roupas Cria",
    "Moda Esportiva Brasília",
    "Roupas de Remo",
    "Lago Paranoá",
    "Manga Longa UV50+",
    "Jaqueta Corta-Vento",
    "Poncho Toalha",
    "Tops Esportivos"
  ],
  authors: [{ name: "Cria do Lago", url: "https://criadolago.com.br" }],
  creator: "Cria do Lago",
  publisher: "Cria do Lago",
  icons: {
    icon: "/criadolago.jpg",
    apple: "/criadolago.jpg",
  },
  openGraph: {
    title: "Cria do Lago · Cria · Moda Esportiva & Roupas Aquáticas de Brasília",
    description: "Cria do Lago — Marca oficial de vestuário e alta performance no Lago Paranoá. Corta-vento, Manga Longa UV50+, Regatas e Ponchos.",
    url: "https://criadolago.com.br",
    siteName: "Cria do Lago",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/criadolago.jpg",
        width: 1200,
        height: 630,
        alt: "Cria do Lago - Moda Esportiva de Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cria do Lago · Moda Esportiva & Roupas Aquáticas em Brasília",
    description: "Cria do Lago (Cria) — Marca oficial de vestuário de alta performance no Lago Paranoá.",
    images: ["/criadolago.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "Cria do Lago",
    alternateName: ["Cria", "Lago", "Cria do Lago BSB", "Cria Lago"],
    url: "https://criadolago.com.br",
    logo: "https://criadolago.com.br/criadolago.jpg",
    sameAs: ["https://www.instagram.com/criadolagobsb"],
    description: "Marca oficial de moda esportiva e vestuário de alta performance no Lago Paranoá em Brasília."
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
