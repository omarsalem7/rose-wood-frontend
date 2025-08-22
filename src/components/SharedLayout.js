"use client";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Footer from "./Footer";
import KitchenHeroSection from "./KitchenHeroSection";
import { fetchNavbarData as getNavbarData } from "@/lib/api/cms";
import { ModalProvider } from "@/lib/ModalContext";
import GlobalModal from "./GlobalModal";

// Cache navbar data to reduce API calls
let navbarDataCache = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default function SharedLayout({ children }) {
  const params = useParams();
  const locale = params.locale;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const [navbarData, setNavbarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchData = useMemo(
    () => async () => {
      try {
        // Check cache first
        if (navbarDataCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
          setNavbarData(navbarDataCache);
          setIsLoading(false);
          return;
        }

        setIsLoading(true);
        const data = await getNavbarData();

        // Update cache
        navbarDataCache = data;
        cacheTimestamp = Date.now();

        setNavbarData(data);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
        // Use cached data if available, even if expired
        if (navbarDataCache) {
          setNavbarData(navbarDataCache);
        }
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      )}
      <main className="pt-[80px]">{children}</main>

      <KitchenHeroSection locale={locale} />
      <Footer locale={locale} />
      <GlobalModal />
    </ModalProvider>
  );
}
