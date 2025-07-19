import { getFullImageUrl, transformImages } from "./image";
import { getCurrentLocale } from "./locale-utils";

// ----------------------

const getApiConfig = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error("Next API_BASE_URL is not defined");
  const isDev = process.env.NODE_ENV === "development";

  return {
    apiUrl: baseUrl,
    cache: isDev ? "no-store" : "force-cache",
    revalidate: isDev ? 0 : 3600,
  };
};

/**
 * Global API interceptor that automatically adds locale to all requests
 */
async function apiCall(endpoint, options = {}) {
  const config = getApiConfig();

  // Automatically detect and add locale
  const locale = await getCurrentLocale();
  const separator = endpoint.includes("?") ? "&" : "?";
  const endpointWithLocale = `${endpoint}${separator}locale=${locale}`;

  try {
    const res = await fetch(`${config.apiUrl}${endpointWithLocale}`, {
      cache: config.cache,
      next: { revalidate: config.revalidate },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`API call failed for ${endpointWithLocale}:`, error);
    throw error;
  }
}
export async function fetchAllHomePageData() {
  try {
    const json = await apiCall(
      "/home-page?populate[hero][populate]=*&populate[aboutSection][populate]=*&populate[videoSection][populate]=*&populate[bulkOrder][populate]=*&populate[featureSection][populate][cards][populate]=*"
    );

    if (!json.data) {
      throw new Error("Home page data not found");
    }

    const data = json.data;

    return {
      hero: transformHeroData(data.hero),
      about: transformAboutData(data.aboutSection),
      features: transformFeatureData(data.featureSection),
      bulkOrder: data.bulkOrder,
      title: data.ProductCarouselSectionTitle,
      videoSection: transformVideoData(data.videoSection),
      whyChooseTitle: data.whyChooseTitle,
      blogsTitle: data.blogsTitle,
    };
  } catch (error) {
    console.error("Error fetching all home page data:", error);

    // Return fallback data for all sections
    return {
      hero: {
        title: "Rosewood Kitchenware",
        subTitle: "Premium wooden kitchenware",
        imageUrl: null,
      },
      about: {
        title: "About Us",
        description: "",
        images: [],
        buttons: [],
        list: [],
      },
      features: {
        id: null,
        title: "Features",
        cards: [],
      },
      title: "الـتـغذيـة البـصريــــة",
      whyChooseTitle: "لماذا تختار روز وود",
      videoSection: {
        id: null,
        title: "Features",
        description: "Features",
        video: null,
        thumbnail: "",
      },
    };
  }
}

// Transformation functions
function transformHeroData(heroData) {
  if (!heroData) return null;

  const { title, subTitle, image } = heroData;

  return {
    title: title || "Rosewood Kitchenware",
    subTitle: subTitle || "Premium wooden kitchenware",
    imageUrl: image?.formats?.large?.url
      ? getFullImageUrl(image.formats.large.url)
      : image?.url
      ? getFullImageUrl(image.url)
      : null,
  };
}

function transformVideoData(videoData) {
  if (!videoData) return null;

  const { title, description, video, thumbnail } = videoData;

  return {
    title: title,
    description: description,
    thumbnail: thumbnail?.url ? getFullImageUrl(thumbnail?.url) : null,
    video: video?.url ? getFullImageUrl(video?.url) : null,
  };
}

function transformAboutData(aboutData) {
  if (!aboutData) return null;

  const { title, description, images, listPoints, buttons } = aboutData;

  return {
    title: title || "About Us",
    description: description || "",
    images: transformImages(images),
    buttons: buttons || [],
    list: listPoints || [],
  };
}

function transformFeatureData(featureData) {
  if (!featureData) return null;

  const { id, title, cards } = featureData;

  return {
    id: id,
    title: title || "Features",
    cards:
      cards?.map((card) => ({
        id: card.id,
        text: card.text || "",
        image: card.img?.url ? getFullImageUrl(card.img.url) : null,
      })) || [],
  };
}

export async function fetchWhyChooseRoseWood() {
  try {
    const json = await apiCall(
      "/home-page?populate[whyChooseRoseWood][populate][features][populate]=*"
    );

    if (!json.data || !json.data.whyChooseRoseWood) {
      throw new Error("WhyChooseRoseWood data not found");
    }

    const whyChooseData = json.data.whyChooseRoseWood;

    return {
      id: whyChooseData.id,
      title: whyChooseData.title || "لماذا تختار روز وود",
      features:
        whyChooseData.features?.map((feature, index) => ({
          id: feature.id,
          text: feature.text || "",
          image: feature.img?.url ? getFullImageUrl(feature.img.url) : null,
          position: getPositionByIndex(index),
        })) || [],
    };
  } catch (error) {
    console.error("Error fetching WhyChooseRoseWood data:", error);

    // Return fallback data
    return {
      id: null,
      title: "لماذا تختار روز وود",
      features: [],
    };
  }
}
export async function fetchQuotationSection() {
  try {
    const json = await apiCall(
      "/home-page?populate[quotationSection][populate]=*"
    );

    if (!json.data || !json.data.quotationSection) {
      throw new Error("quotationSection data not found");
    }

    const resData = json.data.quotationSection;

    return {
      id: resData.id,
      title: resData.title || "اشترِ طبيك الدن معنا واطلب كميتك",
      buttonText: resData.buttonText || "عرض سعر مخصص",
    };
  } catch (error) {
    console.error("Error fetching WhyChooseRoseWood data:", error);

    // Return fallback data
    return {
      id: null,
      title: "لماذا تختار روز وود",
      features: [],
    };
  }
}

export async function fetchFooterData() {
  try {
    const json = await apiCall("/footer?populate[footerItems][populate]=*");

    if (!json.data) {
      throw new Error("Footer data not found");
    }

    const footerData = json.data;

    return {
      id: footerData.id,
      footerItems:
        footerData.footerItems?.map((section) => ({
          id: section.id,
          title: section.title,
          items:
            section.items?.map((item) => ({
              id: item.id,
              text: item.text,
              url: item.url,
            })) || [],
        })) || [],
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);

    // Return fallback data
    return {
      id: null,
      footerItems: [
        {
          id: 1,
          title: "روز وود",
          items: [
            { id: 1, text: "من نحن", url: "/about" },
            { id: 2, text: "خدماتنا", url: "/services" },
          ],
        },
        {
          id: 2,
          title: "تواصل معنا",
          items: [
            { id: 3, text: "اتصل بنا", url: "/contact" },
            {
              id: 4,
              text: "البريد الإلكتروني",
              url: "mailto:info@rosewood.com",
            },
          ],
        },
      ],
    };
  }
}

export async function fetchContactUsData() {
  try {
    const json = await apiCall("/home-page?populate[contactUs][populate]=*");

    if (!json.data || !json.data.contactUs) {
      throw new Error("ContactUs data not found");
    }

    const contactData = json.data.contactUs;

    return {
      id: contactData.id,
      title: contactData.title || "تواصل معنا",
      subTitle: contactData.subTitle || "نحن نحب الاستماع اليك، راسلنا الان:",
      fieldName: contactData.fieldName || "الإسم ...",
      fieldPhone: contactData.fieldPhone || "رقم الهاتف...",
      fieldEmail: contactData.fieldEmail || "البريد الالكتروني...",
      fieldMessage: contactData.fieldMessage || "نص الرسالة...",
    };
  } catch (error) {
    console.error("Error fetching ContactUs data:", error);

    // Return fallback data
    return {
      id: null,
      title: "تواصل معنا",
      subTitle: "نحن نحب الاستماع اليك، راسلنا الان:",
      fieldName: "الإسم ...",
      fieldPhone: "رقم الهاتف...",
      fieldEmail: "البريد الالكتروني...",
      fieldMessage: "نص الرسالة...",
    };
  }
}

// Helper function to assign positions based on index
function getPositionByIndex(index) {
  const positions = [
    "top-right",
    "right",
    "bottom-right",
    "bottom-left",
    "left",
    "top-left",
  ];
  return positions[index % positions.length];
}
