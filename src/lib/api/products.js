import { apiCall } from "../utils";
import { getFullImageUrl } from "../image";

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
