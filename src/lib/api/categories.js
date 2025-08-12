import { apiCall } from "../utils";
import { getFullImageUrl } from "../image";

export async function fetchVisualFeedingsHomePage() {
  const json = await apiCall("/categories?populate=visualFeeding");
  const res = (json.data || []).map((category) => {
    return {
      ...category,
      visualFeeding: getFullImageUrl(category?.visualFeeding?.url),
    };
  });

  return res;
}

export async function fetchRelatedCategories(categoryId) {
  // If categoryId is undefined, null, or empty, fetch all categories
  const filterQuery = categoryId ? `&filters[id][$ne]=${categoryId}` : "";

  const json = await apiCall(
    `/categories?populate=mainImage&pagination[limit]=100${filterQuery}`
  );
  const res = (json.data || []).map((category) => {
    return {
      ...category,
      image: getFullImageUrl(category?.mainImage?.url),
    };
  });

  return res;
}

export async function fetchCategories({ filters = {}, page, pageSize } = {}) {
  // Build filters
  let filterParams = [];
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
    `/categories?fields=name&populate=mainImage${queryString}`
  );
  const list = (json.data || []).map((category) => {
    return {
      ...category,
      mainImageUrl: category?.mainImage?.url
        ? getFullImageUrl(category.mainImage.url)
        : null,
    };
  });

  return {
    items: list,
    totalCount: json.meta?.pagination?.total || 0,
  };
}
