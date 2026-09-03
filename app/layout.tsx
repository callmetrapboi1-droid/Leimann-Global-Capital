import type { Metadata } from "next";
import { Bodoni_Moda, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/common/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  style: ["normal", "italic"],
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leimann Global Capital | Swiss Family Investment Platform",
  description:
    "Leimann Global Capital is a privately held investment and business platform based in Switzerland. A subholding of ActivaSwiss AG Family Office pursuing strategic investments, fintech, and cross-border initiatives.",
  keywords: [
    "Swiss Family Investment Platform",
    "ActivaSwiss AG Subholding",
    "Global Fintech",
    "Strategic Investments",
    "Swiss Private Capital",
    "Freienbach SZ",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${ebGaramond.variable} ${bodoniModa.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body-md selection:bg-gold selection:text-black bg-background text-on-surface antialiased">
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
