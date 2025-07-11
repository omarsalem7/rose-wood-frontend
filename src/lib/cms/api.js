import { getFullImageUrl } from "../image";

// ----------------------

const getApiConfig = () => {
  const isDev = process.env.NODE_ENV === "development";

  return {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    cache: isDev ? "no-store" : "force-cache",
    revalidate: isDev ? 0 : 3600,
  };
};
async function apiCall(endpoint, options = {}) {
  const config = getApiConfig();

  try {
    const res = await fetch(`${config.apiUrl}${endpoint}`, {
      cache: config.cache,
      next: { revalidate: config.revalidate },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
}
export async function fetchAllHomePageData() {
  try {
    const json = await apiCall(
      "/home-page?populate[hero][populate]=*&populate[aboutSection][populate]=*&populate[featureSection][populate][cards][populate]=*"
    );

    if (!json.data) {
      throw new Error("Home page data not found");
    }

    const data = json.data;

    return {
      hero: transformHeroData(data.hero),
      about: transformAboutData(data.aboutSection),
      features: transformFeatureData(data.featureSection),
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

function transformImages(images) {
  if (!images || !Array.isArray(images)) return [];

  return images
    .map((image, index) => ({
      id: image?.id || index,
      img: image?.url ? getFullImageUrl(image.url) : null,
      alt: image?.name || image?.alternativeText || `Image ${index + 1}`,
    }))
    .filter((img) => img.img); // Remove images without URLs
}
