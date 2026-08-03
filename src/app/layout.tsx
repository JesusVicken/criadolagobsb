import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Cria do Lago — Moda Esportiva Aquática de Brasília",
  description:
    "De atleta, para atleta. A Cria do Lago nasceu à beira do lago Paranoá para quem vive e respira o esporte aquático em Brasília. Remo, SUP, Caiaque e muito estilo.",
  keywords: ["Cria do Lago", "remo", "SUP", "Brasília", "esporte aquático", "moda esportiva"],
  icons: {
    icon: "/criadolago.jpg",
    apple: "/criadolago.jpg",
  },
  openGraph: {
    title: "Cria do Lago — Moda Esportiva Aquática de Brasília",
    description: "De atleta, para atleta. Remo, SUP, Caiaque e muito estilo à beira do Lago Paranoá.",
    type: "website",
    images: ["/criadolago.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
