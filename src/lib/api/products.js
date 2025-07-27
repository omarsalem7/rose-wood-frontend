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

  const json = await apiCall(`/products?populate=mainImageUrl${queryString}`);
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

export const getProductById = async (id) => {
  const json = await apiCall(
    `/products/${id}?populate=productDetailsImage&populate=mainImageUrl&populate=category&populate=gallery`
  );
  const product = json.data;
  return {
    ...product,
    mainImageUrl: getFullImageUrl(product.mainImageUrl.url),
    productDetailsImage: getFullImageUrl(product.productDetailsImage.url),
    gallery: product.gallery ? transformImages(product.gallery) : [],
  };
};

export const getRelatedProducts = async (categoryId, productId) => {
  const json = await apiCall(
    `/products?populate=mainImageUrl&populate=colors.img&filters[category][documentId][$eq]=${categoryId}&pagination[limit]=100`
  );
  return (json.data || [])
    .filter((product) => product.documentId !== productId) // Filter out current product
    .map((product) => {
      // Normalize colors with images
      const colors = Array.isArray(product.colors)
        ? product.colors.map((color) => {
            let imgUrl = null;
            if (color.img && color.img.url) {
              imgUrl = getFullImageUrl(color.img.url);
            }
            return {
              id: color.id,
              text: color.text,
              imgUrl,
            };
          })
        : [];
      const images = {
        dark: colors[0] ? colors[0]?.imgUrl : null,
        medium: colors[1] ? colors[1]?.imgUrl : null,
        light: colors[2] ? colors[2]?.imgUrl : null,
      };
      const image = getFullImageUrl(product.mainImageUrl.url);

      return {
        id: product.documentId,
        name: product.name,
        description: product.description,
        features: product.features,
        images,
        image,
        category: product.category?.name,
      };
    });
};

export const getLookupProducts = async () => {
  const json = await apiCall(
    `/products?fields=name&populate=category&pagination[page]=1&pagination[pageSize]=1000`
  );
  console.log(json.data);
  return json.data;
};
