import "../globals.css";
import { Alexandria } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import SharedLayout from "@/components/SharedLayout";
import { LanguageProvider } from "@/lib/LanguageContext";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

export async function generateMetadata({ params }) {
  const base = await baseGenerateMetadata();
  const localeParam = params?.locale;
  const locale = localeParam === "en" ? "en" : "ar";

  return {
    ...base,
    alternates: {
      ...(base.alternates || {}),
      // Set canonical to locale root; pages can override for deeper routes
      canonical: `/${locale}/`,
      languages: {
        ...(base.alternates?.languages || {}),
        ar: "https://rosewoodeg.com/ar",
        en: "https://rosewoodeg.com/en",
        "x-default": "https://rosewoodeg.com",
      },
    },
  };
}

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
        <AnalyticsWrapper>
          <SharedLayout>{children}</SharedLayout>
        </AnalyticsWrapper>
      </div>
    </LanguageProvider>
  );
}
