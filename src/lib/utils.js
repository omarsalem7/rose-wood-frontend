import { getCurrentLocale } from "./locale-utils";
import { getFullImageUrl, transformImages } from "./image";
/**
 * Utility function for combining class names with Tailwind CSS
 */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getApiConfig = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error("Next API_BASE_URL is not defined");
  const isDev = process.env.NODE_ENV === "development";

  return {
    apiUrl: baseUrl,
    cache: isDev ? "no-store" : "force-cache",
    revalidate: isDev ? 0 : 3600,
  };
};

/**
 * Global API interceptor that automatically adds locale to all requests
 */
export async function apiCall(endpoint, options = {}) {
  const config = getApiConfig();

  // Automatically detect and add locale
  const locale = await getCurrentLocale();
  const separator = endpoint.includes("?") ? "&" : "?";
  const endpointWithLocale = `${endpoint}${separator}locale=${locale}`;

  try {
    const res = await fetch(`${config.apiUrl}${endpointWithLocale}`, {
      cache: config.cache,
      next: { revalidate: config.revalidate },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`API call failed for ${endpointWithLocale}:`, error);
    throw error;
  }
}
