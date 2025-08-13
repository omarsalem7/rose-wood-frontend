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

export async function fetchBlogsHomePage({
  page = 1,
  pageSize = 30,
  search = "",
} = {}) {
  // Build query params
  let params = [];
  if (page) params.push(`pagination[page]=${page}`);
  if (pageSize) params.push(`pagination[pageSize]=${pageSize}`);
  if (search)
    params.push(`filters[title][$containsi]=${encodeURIComponent(search)}`);

  const queryString = params.length > 0 ? `&${params.join("&")}` : "";

  const json = await apiCall(`/blogs?populate=*&${queryString}`);

  return {
    items: transformBlog(json.data),
    totalCount: json.meta?.pagination?.total || 0,
  };
}

export async function fetchProductsBHomePage() {
  const json = await apiCall(
    "/products?populate=colors.img&populate=mainImageUrl&pagination[page]=1&pagination[pageSize]=6"
  );

  return (json.data || []).map((product) => {
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

    const image = product.mainImageUrl?.url
      ? getFullImageUrl(product.mainImageUrl.url)
      : null;

    return {
      id: product.documentId,
      name: product.name,
      description: product.description,
      features: product.features,

      image,
      colors, // Include the full colors array for flexibility
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

export async function getBlogMetadata(id) {
  const { data } = await apiCall(`/blogs/${id}?fields=title,description`, {
    next: {
      revalidate: 3600,
    },
  });

  return data;
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
