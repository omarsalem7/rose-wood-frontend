export function getFullImageUrl(path) {
  if (!path) return "";
  // Remove trailing slash and /api from API URL
  let apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  apiUrl = apiUrl?.replace(/\/api$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${apiUrl}${cleanPath}`;
}
