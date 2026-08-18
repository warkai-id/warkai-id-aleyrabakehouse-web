import type { Metadata } from "next";
import { Playfair_Display, Manrope, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const heroDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-hero-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aleyra Bakehouse | Soft inside. Burnt just right.",
  description: "Aleyra Bakehouse — Soft burnt cheesecake yang dibuat fresh dengan cinta untuk momen kecil yang layak dirayakan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${manrope.variable} ${dancing.variable} ${heroDisplay.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}

