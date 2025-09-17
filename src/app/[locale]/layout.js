import "../globals.css";
import { Alexandria } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import SharedLayout from "@/components/SharedLayout";
import { LanguageProvider } from "@/lib/LanguageContext";
import { generateMetadata } from "@/lib/metadata";

export { generateMetadata };

// Optimize font loading - only load essential weights
const alexandria = Alexandria({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"], // Reduced from 9 weights to 4 essential ones
  variable: "--font-alexandria",
  display: "swap",
  preload: true,
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"], // Reduced from 7 weights to 3 essential ones
  variable: "--font-ibm-plex-arabic",
  display: "swap",
  preload: true,
});

// Add caching configuration
export const revalidate = 3600; // Revalidate every hour

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const isRTL = locale === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <LanguageProvider locale={locale}>
      <div
        lang={locale}
        dir={direction}
        className={`${alexandria.variable} ${ibmPlexSansArabic.variable}`}
      >
        <SharedLayout>{children}</SharedLayout>
      </div>
    </LanguageProvider>
  );
}
