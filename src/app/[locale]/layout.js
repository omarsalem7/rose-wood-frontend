import "../globals.css";
import { Alexandria } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import SharedLayout from "@/components/SharedLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/lib/LanguageContext";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import { generateMetadata } from "@/lib/metadata";

export { generateMetadata };
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

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const isRTL = locale === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  // Apply font classes to a wrapping div
  return (
    <LanguageProvider locale={locale}>
      <div
        lang={locale}
        dir={direction}
        className={`${alexandria.variable} ${ibmPlexSansArabic.variable}`}
      >
        <PerformanceMonitor />
        <SharedLayout>{children}</SharedLayout>
        <PerformanceDashboard />
        <SpeedInsights debug={process.env.NODE_ENV === "development"} />
      </div>
    </LanguageProvider>
  );
}
