import { fetchSiteSettings } from "./api/cms";

export async function generateMetadata() {
  try {
    const { title, description, keywords } = await fetchSiteSettings();

    // Construct metadata from fetched data
    const metadata = {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      ),
      title: {
        default: title,
        template: `%s | ${title}`,
        absolute: "",
      },
      description: description || "Premium wooden kitchenware manufacturer",

      // Keywords from various sections
      keywords:
        keywords +
        " , " +
        [
          "wooden kitchenware",
          "kitchen utensils",
          "natural wood products",
          "eco-friendly kitchen tools",
        ]
          .filter(Boolean)
          .join(", "),

      // Open Graph metadata
      openGraph: {
        title: title || "Rosewood Kitchenware",
        description: description || "Premium wooden kitchenware manufacturer",
        url:
          process.env.NEXT_PUBLIC_API_URL || "https://rosewood-kitchenware.com",
        siteName: "Rosewood",
        type: "website",
        locale: "ar",
        images: [
          {
            url: "/assets/rose-v-logo.svg",
            width: 600,
            height: 600,
            alt: "Rosewood Kitchenware",
          },
          {
            url: "/assets/rose-h-logo.svg",
            width: 1200,
            height: 630,
            alt: "Rosewood Kitchenware",
          },
        ],
      },

      // Twitter metadata
      twitter: {
        card: "summary",
        title: title || "Rosewood Kitchenware",
        description: description || "Premium wooden kitchenware manufacturer",
        images: ["/assets/rose-v-logo.svg"],
      },

      // Additional metadata
      authors: [{ name: title }],
      creator: title,
      publisher: title,

      // Language and region
      alternates: {
        languages: {
          ar: "/ar",
          en: "/en", // If you have English version
        },
      },

      // Additional HTML meta tags
      other: {
        "theme-color": "#8B4513", // Brown color for wooden theme
        "color-scheme": "light",
        "format-detection": "telephone=yes",
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "application-name": "Rosewood",
        "msapplication-TileColor": "#8B4513",
        "msapplication-config": "/favicon/browserconfig.xml",
      },

      // Structured data for SEO
      category: "business",
      classification: "Kitchenware Manufacturing",

      // Robots configuration
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      // Verification tags (add your actual verification codes)
      // verification: {
      //   google: "",
      //   yandex: "",
      //   yahoo: "",
      // },
    };

    return metadata;
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Return fallback metadata
    return {
      title: "Rosewood",
      description:
        "Premium wooden kitchenware manufacturer. High-quality, eco-friendly kitchen tools and utensils made from natural wood.",
      keywords:
        "wooden kitchenware, kitchen utensils, natural wood products, eco-friendly kitchen tools",

      openGraph: {
        title: "Rosewood Kitchenware - Premium Wooden Kitchen Utensils",
        description:
          "Premium wooden kitchenware manufacturer. High-quality, eco-friendly kitchen tools and utensils made from natural wood.",
        url:
          process.env.NEXT_PUBLIC_SITE_URL ||
          "https://rosewood-kitchenware.com",
        siteName: "Rosewood",
        type: "website",
        locale: "ar",
      },

      twitter: {
        title: "Rosewood Kitchenware - Premium Wooden Kitchen Utensils",
        description:
          "Premium wooden kitchenware manufacturer. High-quality, eco-friendly kitchen tools and utensils made from natural wood.",
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  }
}
