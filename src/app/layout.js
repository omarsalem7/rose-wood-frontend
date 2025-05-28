"use client";
import "./globals.css";
import { Alexandria } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { useState } from "react";

// Configure Alexandria font
const alexandria = Alexandria({
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

// Configure IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

function SharedLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  return (
    <>
      <Header onMenuClick={toggleMenu} />
      <SideNav isOpen={isMenuOpen} onClose={toggleMenu} />
      {/* Overlay for SideNav */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={toggleMenu} />
      )}
      {children}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.variable} ${ibmPlexSansArabic.variable}`}>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}
