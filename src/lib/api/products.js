export async function fetchProductsBHomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${apiUrl}/products?populate=colors.img&populate=mainImageUrl`,
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
    const image = getFullImageUrl(product.mainImageUrl.url);

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      features: product.features,
      images,
      image,
      category: product.category?.name,
    };
  });
}
