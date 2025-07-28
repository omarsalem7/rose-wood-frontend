export function getFullImageUrl(path) {
  if (!path) return "";

  // If the path is already a full URL (starts with http/https), return it as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Remove trailing slash and /api from API URL
  let apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  apiUrl = apiUrl?.replace(/\/api$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${apiUrl}${cleanPath}`;
}

export function transformImages(images) {
  if (!images || !Array.isArray(images)) return [];

  return images
    .map((image, index) => ({
      id: image?.id || index,
      img: image?.url ? getFullImageUrl(image.url) : null,
      alt: image?.name || image?.alternativeText || `Image ${index + 1}`,
    }))
    .filter((img) => img.img); // Remove images without URLs
}
