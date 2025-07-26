"use client";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Footer from "./Footer";
import KitchenHeroSection from "./KitchenHeroSection";
import { fetchNavbarData as getNavbarData } from "@/lib/api/cms";

export default function SharedLayout({ children }) {
  const params = useParams();
  const locale = params.locale;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNavbarData();
      setNavbarData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header
        contactUs={navbarData?.contactUs}
        onMenuClick={toggleMenu}
        locale={locale}
      />
      <SideNav
        locale={locale}
        data={navbarData}
        isOpen={isMenuOpen}
        onClose={toggleMenu}
      />
      {/* Overlay for SideNav */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={toggleMenu} />
      )}
      {children}

      <KitchenHeroSection />
      <Footer />
    </>
  );
}
