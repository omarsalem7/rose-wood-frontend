import { getFullImageUrl } from "../image";
import { apiCall } from "../utils";
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

export async function fetchBlogsHomePage() {
  const json = await apiCall(
    "/blogs?populate=*&pagination[page]=1&pagination[pageSize]=500"
  );

  return transformBlog(json.data);
}

export async function fetchProductsBHomePage() {
  const json = await apiCall(
    "/products?populate=colors.img&populate=mainImageUrl&pagination[page]=1&pagination[pageSize]=500"
  );

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
      id: product.documentId,
      name: product.name,
      description: product.description,
      features: product.features,
      images,
      image,
      category: product.category?.name,
    };
  });
}

function transformBlog(data) {
  return data.map((blog) => {
    return {
      id: blog.documentId,
      title: blog.title,
      description: blog.description,
      image: getFullImageUrl(blog.image.url),
      date: blog.createdAt,
    };
  });
}

export async function getBlogById(id) {
  try {
    const json = await apiCall(`/blogs/${id}?populate=*`);

    // Check if data exists
    if (!json.data) {
      throw new Error(`Blog with ID ${id} not found`);
    }

    return {
      ...json.data,
      image: getFullImageUrl(json.data?.image?.url),
      image2: getFullImageUrl(json.data?.image2?.url),
      subImage: getFullImageUrl(json.data?.subImage?.url),
    };
  } catch (error) {
    console.error(`Failed to fetch blog with ID ${id}:`, error);
    throw error;
  }
}

export async function getRelatedBlogs(blogId) {
  // If categoryId is undefined, null, or empty, fetch all categories
  const filterQuery = blogId ? `&filters[documentId][$ne]=${blogId}` : "";

  const json = await apiCall(
    `/blogs?populate=*&pagination[limit]=3${filterQuery}`
  );
  const res = (json.data || []).map((blog) => {
    return {
      ...blog,
      image: getFullImageUrl(blog?.image?.url),
    };
  });

  return res;
}
