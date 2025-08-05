"use client";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Footer from "./Footer";
import KitchenHeroSection from "./KitchenHeroSection";
import { fetchNavbarData as getNavbarData } from "@/lib/api/cms";
import { ModalProvider } from "@/lib/ModalContext";
import GlobalModal from "./GlobalModal";
import ScrollToTop from "./ScrollToTop";

export default function SharedLayout({ children }) {
  const params = useParams();
  const locale = params.locale;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const [navbarData, setNavbarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getNavbarData();
        setNavbarData(data);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ModalProvider>
      <Header
        contactUs={navbarData?.contactUs}
        onMenuClick={toggleMenu}
        locale={locale}
        isLoading={isLoading}
      />
      <SideNav
        locale={locale}
        data={navbarData}
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        isLoading={isLoading}
      />
      {/* Overlay for SideNav */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={toggleMenu} />
      )}
      {children}

      <KitchenHeroSection locale={locale} />
      <Footer locale={locale} />
      <GlobalModal />
      <ScrollToTop />
    </ModalProvider>
  );
}
