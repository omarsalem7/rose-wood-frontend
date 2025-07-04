import "./globals.css";
import { Alexandria } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import SharedLayout from "@/components/SharedLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alexandria.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <SharedLayout>{children}</SharedLayout>
        <SpeedInsights debug={process.env.NODE_ENV === "development"} />
      </body>
    </html>
  );
}
