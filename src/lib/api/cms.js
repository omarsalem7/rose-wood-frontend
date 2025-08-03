import { getFullImageUrl, transformImages } from "../image";
import { apiCall } from "../utils";

// ----------------------

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

export async function fetchHowWorkSection() {
  try {
    const json = await apiCall("/about-page?populate[howWork][populate]=*");

    if (!json.data) {
      throw new Error("how work section data not found");
    }

    return transformHowWorkSectionData(json.data);
  } catch (error) {
    console.error("Error fetching how work section data:", error);
    throw error;
  }
}

export async function fetchAllAboutPageData() {
  try {
    const json = await apiCall(
      "/about-page?populate[hero][populate]=*&populate[ourMessage][populate]=*&populate[ourVision][populate]=*&populate[sectorSection][populate][card][populate]=*"
    );

    if (!json.data) {
      throw new Error("about page data not found");
    }

    // Use transformation function for about page
    return transformAboutPageData(json.data);
  } catch (error) {
    console.error("Error fetching all home page data:", error);

    // Return fallback data for all sections
    return {
      hero: {
        title: "Rosewood Kitchenware",
        subTitle: "Premium wooden kitchenware",
        imageUrl: null,
      },
      howWork: null,
      ourMessage: null,
      ourVision: null,
      sectorSection: null,
    };
  }
}

export async function fetchWoodStepsPageData() {
  try {
    const json = await apiCall(
      "/wood-steps-page?populate[hero][populate]=*&populate[steps][populate][stepsList][populate]=*"
    );

    if (!json.data) {
      throw new Error("wood steps page data not found");
    }

    // Use transformation function for about page
    return transformWoodStepsPageData(json.data);
  } catch (error) {
    console.error("Error fetching all home page data:", error);

    // Return fallback data for all sections
    return {
      hero: {
        title: "حكاية تبدأ من الخشب... وتنتهي بتحفة",
        description: "",
        imageUrl: null,
      },
      steps: {
        title: "",
        stepsList: [],
        description: "",
      },
    };
  }
}

export async function fetchWhaleSalePage() {
  try {
    const json = await apiCall(
      "/whalesale-page?populate[hero][populate]=*&populate[global][populate][service][populate]=*&populate[local][populate]=*"
    );

    if (!json.data) {
      throw new Error("whale sale page data not found");
    }

    // Use transformation function for whale sale page
    return transformWhaleSalePageData(json.data);
  } catch (error) {
    console.error("Error fetching whale sale page data:", error);

    // Return fallback data for all sections
    return {
      hero: {
        title: "رووز وود شريكك التجاري الموثوق – محليًا ودوليًا",
        description: "",
        image1: null,
        image2: null,
        image3: null,
      },
      global: {
        title: "",
        description: "",
        service: {
          title: "",
          description: "",
          buttontext: "",
          list: [],
          image1: null,
          image2: null,
        },
      },
      local: {
        title: "",
        description: "",
        buttontext: "",
        list: [],
        image1: null,
        image2: null,
      },
    };
  }
}

export async function fetchContactPageData() {
  try {
    const json = await apiCall(
      "/contact-page?populate[contactForm][populate]=*"
    );

    if (!json.data) {
      throw new Error("contact page data not found");
    }

    // Return data as-is without transformation
    return json.data;
  } catch (error) {
    console.error("Error fetching contact page data:", error);
    throw error;
  }
}

// Transformation functions
function transformHeroData(heroData) {
  if (!heroData) return null;

  const { title, subTitle, image } = heroData;

  return {
    title: title || "Rosewood Kitchenware",
    subTitle: subTitle || "Premium wooden kitchenware",
    imageUrl: image?.url
      ? getFullImageUrl(image?.url)
      : image?.url
      ? getFullImageUrl(image?.url)
      : null,
  };
}
function transformHeroAboutPage(heroData) {
  if (!heroData) return null;

  const { title, description, image } = heroData;

  return {
    title: title,
    description: description,
    imageUrl: image?.url
      ? getFullImageUrl(image?.url)
      : image?.url
      ? getFullImageUrl(image?.url)
      : null,
  };
}

function transformHowWorkSectionData(howWorkData) {
  if (!howWorkData || !howWorkData.howWork) return null;

  const howWork = howWorkData.howWork;

  return {
    id: howWork.id,
    title: howWork.title,
    subTitle: howWork.subTitle,
    list:
      howWork.list?.map((item) => ({
        id: item.id,
        text: item.text,
      })) || [],
    images: transformImages(howWork.images),
    buttons:
      howWork.buttons?.map((btn) => ({
        id: btn.id,
        text: btn.text,
        link: btn.link,
      })) || [],
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
    const json = await apiCall(
      "/footer?populate[socialMedia][populate]=*&populate[ourProducts][populate]=*&populate[importantLinks][populate]=*&populate[services][populate]=*&populate[rosewoodLinks][populate]=*"
    );

    if (!json.data) {
      throw new Error("Footer data not found");
    }

    return json.data;
  } catch (error) {
    console.error("Error fetching footer data:", error);

    // Return fallback data
    return {
      verticalText: "مـنتجات صممت بحب لكم",
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

// Transformation function for about page data
function transformAboutPageData(data) {
  return {
    hero: transformHeroAboutPage(data.hero),
    howWork: data.howWork
      ? {
          id: data.howWork.id,
          title: data.howWork.title,
          subTitle: data.howWork.subTitle,
          list:
            data.howWork.list?.map((item) => ({
              id: item.id,
              text: item.text,
            })) || [],
          images: transformImages(data.howWork.images),
          buttons:
            data.howWork.buttons?.map((btn) => ({
              id: btn.id,
              text: btn.text,
              link: btn.link,
            })) || [],
        }
      : null,
    ourMessage: data.ourMessage
      ? {
          id: data.ourMessage.id,
          title: data.ourMessage.title,
          subTitle: data.ourMessage.subTitle,
          endDescription: data.ourMessage.endDescription,
          cards:
            data.ourMessage.cards?.map((card) => ({
              id: card.id,
              text: card.text,
            })) || [],
        }
      : null,
    ourVision: data.ourVision
      ? {
          id: data.ourVision.id,
          title: data.ourVision.title,
          description: data.ourVision.description,
        }
      : null,
    sectorSection: data.sectorSection
      ? {
          id: data.sectorSection.id,
          card:
            data.sectorSection.card?.map((card) => ({
              id: card.id,
              title: card.title,
              subTitle: card.subTitle,
              image: card.image ? getFullImageUrl(card.image.url) : null,
              list:
                card.list?.map((item) => ({
                  id: item.id,
                  text: item.text,
                })) || [],
            })) || [],
        }
      : null,
  };
}

// Transformation function for wood steps page data
function transformWoodStepsPageData(data) {
  return {
    hero: {
      title: data.hero?.title || "",
      description: data.hero?.description || "",
      image1: data.hero?.image1?.url
        ? getFullImageUrl(data.hero.image1.url)
        : null,
      image2: data.hero?.image2?.url
        ? getFullImageUrl(data.hero.image2.url)
        : null,
      image3: data.hero?.image3?.url
        ? getFullImageUrl(data.hero.image3.url)
        : null,
    },
    steps: {
      title: data.steps?.title || "",
      description: data.steps?.description || "",
      stepsList:
        data.steps?.stepsList?.map((step) => ({
          id: step.id,
          title: step.title,
          description: step.description,
          list:
            step.list?.map((item) => ({
              id: item.id,
              text: item.text,
            })) || [],
          bgImg: step.bgImg?.url ? getFullImageUrl(step.bgImg.url) : null,
          img1: step.img1?.[0]?.url ? getFullImageUrl(step.img1[0].url) : null,
          img2: step.img2?.url ? getFullImageUrl(step.img2.url) : null,
        })) || [],
      btnProducts: data.steps?.btnProducts,
      btnSample: data.steps?.btnSample,
    },
  };
}

// Transformation function for whale sale page data
function transformWhaleSalePageData(data) {
  return {
    hero: {
      title: data.hero?.title || "",
      description: data.hero?.description || "",
      image1: data.hero?.image1?.url
        ? getFullImageUrl(data.hero.image1.url)
        : null,
      image2: data.hero?.image2?.url
        ? getFullImageUrl(data.hero.image2.url)
        : null,
      image3: data.hero?.image3?.url
        ? getFullImageUrl(data.hero.image3.url)
        : null,
    },
    global: {
      title: data.global?.title || "",
      description: data.global?.description || "",
      service: {
        title: data.global?.service?.title || "",
        description: data.global?.service?.description || "",
        buttontext: data.global?.service?.buttontext || "",
        list:
          data.global?.service?.list?.map((item) => ({
            id: item.id,
            text: item.text,
          })) || [],
        image1: data.global?.service?.image1?.url
          ? getFullImageUrl(data.global.service.image1.url)
          : null,
        image2: data.global?.service?.image2?.url
          ? getFullImageUrl(data.global.service.image2.url)
          : null,
      },
    },
    local: {
      title: data.local?.title || "",
      description: data.local?.description || "",
      buttontext: data.local?.buttontext || "",
      list:
        data.local?.list?.map((item) => ({
          id: item.id,
          text: item.text,
        })) || [],
      image1: data.local?.image1?.url
        ? getFullImageUrl(data.local.image1.url)
        : null,
      image2: data.local?.image2?.url
        ? getFullImageUrl(data.local.image2.url)
        : null,
    },
  };
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

export async function fetchNavbarData() {
  try {
    const json = await apiCall("/navbar?populate=*");
    if (!json.data) {
      throw new Error("Navbar data not found");
    }
    return json.data;
  } catch (error) {
    console.error("Error fetching navbar data:", error);
    // Return fallback data
    return {
      id: null,
      documentId: null,
      whoAreWe: "من نحن",
      products: "المنتجات",
      wholesaleExport: "الجملة والتصدير",
      whyUseRosewood: "لماذا تستخدم اخشاب روز وود",
      visualFeeding: "التغذية البصرية",
      contactUs: "تواصل معنا",
      offerPrice: "عرض سعر",
      facebook: "",
      linkedin: "",
      x: "",
      youtube: "",
    };
  }
}
