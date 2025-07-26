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
  console.log(res);

  return res;
}
