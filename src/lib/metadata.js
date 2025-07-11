import { fetchAllHomePageData } from "./cms/api";

export async function generateMetadata() {
  try {
    // Fetch all data in parallel
    // const [homeData, siteSettings] = await Promise.all([
    //   fetchAllHomePageData(),
    //   fetchSiteSettings(),
    // ]);

    const homeData = await fetchAllHomePageData();

    const { hero, about, features } = homeData;

    // Construct metadata from fetched data
    const metadata = {
      title: hero?.title || "Rosewood Kitchenware",
      description:
        hero?.subTitle ||
        about?.description ||
        "Premium wooden kitchenware manufacturer",

      // Keywords from various sections
      keywords: [
        "wooden kitchenware",
        "kitchen utensils",
        "natural wood products",
        "eco-friendly kitchen tools",
        // Add feature-based keywords
        ...(features?.cards?.map((card) => card.text) || []),
        // Add about section keywords
        ...(about?.list?.map((item) => item.item) || []),
      ]
        .filter(Boolean)
        .join(", "),

      // Open Graph metadata
      openGraph: {
        title: hero?.title || "Rosewood Kitchenware",
        description:
          hero?.subTitle ||
          about?.description ||
          "Premium wooden kitchenware manufacturer",
        url:
          process.env.NEXT_PUBLIC_SITE_URL ||
          "https://rosewood-kitchenware.com",
        siteName: "Rosewood Kitchenware",
        type: "website",
        locale: "ar_EG", // Arabic Saudi Arabia
        images: [
          // Hero image as primary
          ...(hero?.imageUrl
            ? [
                {
                  url: hero.imageUrl,
                  width: 1200,
                  height: 630,
                  alt: hero.title || "Rosewood Kitchenware Hero Image",
                },
              ]
            : []),
          // About section images
          ...(about?.images?.slice(0, 3).map((img) => ({
            url: img.img,
            width: 800,
            height: 600,
            alt: img.alt || "Rosewood Kitchenware Product",
          })) || []),
        ].filter(Boolean),
      },

      // Twitter metadata
      twitter: {
        card: "summary_large_image",
        title: hero?.title || "Rosewood Kitchenware",
        description:
          hero?.subTitle ||
          about?.description ||
          "Premium wooden kitchenware manufacturer",
        images: hero?.imageUrl ? [hero.imageUrl] : [],
      },

      // Additional metadata
      authors: [{ name: "Rosewood Kitchenware" }],
      creator: "Rosewood Kitchenware",
      publisher: "Rosewood Kitchenware",

      // Language and region
      alternates: {
        languages: {
          "ar-SA": "/",
          "en-US": "/en", // If you have English version
        },
      },

      // Additional HTML meta tags
      other: {
        "theme-color": "#8B4513", // Brown color for wooden theme
        "color-scheme": "light",
        "format-detection": "telephone=yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "application-name": "Rosewood Kitchenware",
        "msapplication-TileColor": "#8B4513",
        "msapplication-config": "/favicon/browserconfig.xml",
      },

      // Structured data for SEO
      category: "business",
      classification: "Kitchen Utensils Manufacturing",

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
      verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
      },
    };

    return metadata;
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Return fallback metadata
    return {
      title: "Rosewood Kitchenware - Premium Wooden Kitchen Utensils",
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
        siteName: "Rosewood Kitchenware",
        type: "website",
        locale: "ar_EG",
      },

      twitter: {
        card: "summary_large_image",
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
