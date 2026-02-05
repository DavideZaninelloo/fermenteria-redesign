import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${playfair.variable} antialiased font-sans bg-secondary`}
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
