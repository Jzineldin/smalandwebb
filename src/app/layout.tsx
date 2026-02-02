import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmålandWebb - Webbdesign i Småland",
  description: "Professionella hemsidor för småföretag i Småland. Baserad i Åseda, Uppvidinge.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SmålandWebb - Webbdesign i Småland",
    description: "Professionella hemsidor för småföretag i Småland",
    url: "https://smalandwebb.se",
    siteName: "SmålandWebb",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmålandWebb - Webbdesign i Småland",
    description: "Professionella hemsidor för småföretag i Småland",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SmålandWebb",
  description: "Webbdesign för småföretag i Småland",
  url: "https://smalandwebb.se",
  email: "kevin@smalandwebb.se",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Åseda",
    addressRegion: "Småland",
    addressCountry: "SE",
  },
  priceRange: "$$",
  sameAs: ["https://www.linkedin.com/in/kevin-el-zarka"],
  founder: {
    "@type": "Person",
    name: "Kevin El-Zarka",
  },
  areaServed: {
    "@type": "Place",
    name: "Småland, Sweden",
  },
  serviceType: ["Web Design", "Web Development", "E-commerce"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
