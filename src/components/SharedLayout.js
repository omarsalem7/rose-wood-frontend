"use client";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { useState } from "react";
import Footer from "./Footer";

export default function SharedLayout({ children }) {
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
      <Footer />
    </>
  );
}
