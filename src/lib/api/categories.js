import { apiCall } from "../utils";
import { getFullImageUrl } from "../image";

export async function fetchVisualFeedingsHomePage() {
  const json = await apiCall("/categories?populate=visualFeeding");
  console.log(json);
  const ress = (json.data || []).map((category) => {
    return {
      ...category,
      visualFeeding: getFullImageUrl(category?.visualFeeding?.url),
    };
  });

  console.log(ress);
  return ress;
}
