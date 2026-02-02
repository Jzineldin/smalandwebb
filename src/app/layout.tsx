import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmålandWebb - Webbdesign i Småland | Hemsidor för Småföretag",
  description:
    "Professionella hemsidor för småföretag i Småland. Jag hjälper lokala företag i Åseda, Uppvidinge och hela Småland att synas online. Fast pris, snabb leverans.",
  keywords: [
    "webbdesign småland",
    "hemsida småföretag",
    "webbyrå uppvidinge",
    "hemsida åseda",
    "webbdesigner småland",
    "billig hemsida företag",
    "lokal webbyrå",
  ],
  authors: [{ name: "Kevin El-Zarka" }],
  openGraph: {
    title: "SmålandWebb - Webbdesign för Småföretag i Småland",
    description:
      "Professionella hemsidor för småföretag. Fast pris, snabb leverans, personlig service.",
    url: "https://smalandwebb.se",
    siteName: "SmålandWebb",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmålandWebb - Webbdesign för Småföretag",
    description:
      "Professionella hemsidor för småföretag i Småland. Fast pris, snabb leverans.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
