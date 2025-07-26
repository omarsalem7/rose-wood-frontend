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
  const json = await apiCall(
    `/categories?populate=mainImage&pagination[limit]=100&filters[id][$ne]=${categoryId}`
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
