import { getFullImageUrl } from "./image";
export async function fetchCategories() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/categories`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  const json = await res.json();
  // Adjust the mapping if the API response structure is different
  return json.data || [];
}

export async function fetchProductsBHomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${apiUrl}/products?populate=colors.img&populate=category`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  const json = await res.json();
  return (json.data || []).map((product) => {
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

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      subDescription: "متاح تصنيع حسب المقاس / اللون / التغليف",
      images,
      category: product.category?.name,
    };
  });
}
