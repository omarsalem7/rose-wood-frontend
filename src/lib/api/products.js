import { apiCall } from "../utils";
import { getFullImageUrl, transformImages } from "../image";

export const getAllproducts = async ({
  categoryId,
  filters = {},
  page,
  pageSize,
} = {}) => {
  // Build filters
  let filterParams = [];
  if (categoryId) {
    filterParams.push(`filters[category][id][$eq]=${categoryId}`);
  }
  // Add additional filters
  for (const key in filters) {
    const value = filters[key];
    if (typeof value === "object" && value !== null) {
      for (const op in value) {
        filterParams.push(
          `filters[${key}][${op}]=${encodeURIComponent(value[op])}`
        );
      }
    } else {
      filterParams.push(`filters[${key}]=${encodeURIComponent(value)}`);
    }
  }
  // Pagination
  if (page) filterParams.push(`pagination[page]=${page}`);
  if (pageSize) filterParams.push(`pagination[pageSize]=${pageSize}`);

  const queryString =
    filterParams.length > 0 ? `&${filterParams.join("&")}` : "";

  const json = await apiCall(
    `/products?filters[isHidden][$eq]=false&fields=name,availableQuantities&populate=mainImageUrl&sort=sortOrder${queryString}`
  );

  const list = (json.data || []).map((product) => {
    return {
      ...product,
      mainImageUrl: getFullImageUrl(product.mainImageUrl.url),
    };
  });
  return {
    items: list,
    totalCount: json.meta.pagination.total,
  };
};

export const getProductMetadata = async (id) => {
  const json = await apiCall(
    `/products/${id}?fields=name,description&populate=mainImageUrl`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  return {
    ...json.data,
    mainImageUrl: json.data.mainImageUrl?.url
      ? getFullImageUrl(json.data.mainImageUrl.url)
      : null,
  };
};

export const getProductById = async (id) => {
  const json = await apiCall(
    `/products/${id}?populate=productDetailsImage&populate=colors.img&populate=mainImageUrl&populate=category&populate=gallery&populate=colors&populate=sizes`
  );
  const product = json.data;

  return {
    ...product,
    mainImageUrl: getFullImageUrl(product.mainImageUrl.url),
    productDetailsImage: product.productDetailsImage?.url
      ? getFullImageUrl(product.productDetailsImage.url)
      : null,
    gallery: product.gallery ? transformImages(product.gallery) : [],
    colors: product.colors
      ? product.colors.map((color) => {
          return {
            id: color.id,
            color: color.color,
            imgUrl: getFullImageUrl(color?.img?.url),
          };
        })
      : [],
  };
};

export const getRelatedProducts = async (categoryId, productId) => {
  const json = await apiCall(
    `/products?filters[isHidden][$eq]=false&populate=mainImageUrl&populate=colors.img&sort=sortOrder&filters[category][documentId][$eq]=${categoryId}&pagination[limit]=100`
  );
  return (json.data || [])
    .filter((product) => product.documentId !== productId) // Filter out current product
    .map((product) => {
      // Normalize colors with images and color codes
      const colors = Array.isArray(product.colors)
        ? product.colors.map((color) => {
            let imgUrl = null;
            if (color.img && color.img.url) {
              imgUrl = getFullImageUrl(color.img.url);
            }
            return {
              id: color.id,
              color: color.color, // hex color code
              imgUrl,
            };
          })
        : [];

      const image = getFullImageUrl(product.mainImageUrl.url);

      return {
        id: product.documentId,
        name: product.name,
        description: product.description,
        features: product.features,
        colors,
        image,
        category: product.category?.name,
      };
    });
};

export const getLookupProducts = async () => {
  const json = await apiCall(
    `/products?filters[isHidden][$eq]=false&fields=name&populate[mainImageUrl][fields]=url&populate=category&pagination[page]=1&pagination[pageSize]=1000&sort=sortOrder`
  );

  return json.data.map((item) => {
    return {
      ...item,
      mainImageUrl: getFullImageUrl(item.mainImageUrl.url),
    };
  });
};
