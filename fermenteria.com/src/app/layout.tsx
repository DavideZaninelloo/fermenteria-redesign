import type { Metadata } from "next";
import { Inter, Crimson_Text, Abril_Fatface } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fermenteria | Cucina Artigianale Biologica a Bassano del Grappa",
  description: "Ristorante biologico artigianale nel cuore di Bassano del Grappa. Menu 100% gluten-free, ingredienti a km 0 e tradizione fatta a mano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${crimsonText.variable} ${abrilFatface.variable} antialiased font-sans bg-neutral-50 text-neutral-900`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
