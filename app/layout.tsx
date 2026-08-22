import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Leimann Global Capital GmbH | Architects of Capital Preservation & Prime Real Estate",
  description:
    "Swiss private wealth management, luxury global real estate acquisitions, and multi-generational capital preservation since 1984.",
  keywords: [
    "Luxury Real Estate",
    "Capital Preservation",
    "Swiss Wealth Management",
    "Private Family Office",
    "Prime Property Acquisitions",
    "Zurich Real Estate",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${ebGaramond.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body-md selection:bg-primary-fixed selection:text-primary bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
