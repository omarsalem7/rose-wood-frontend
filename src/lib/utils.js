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

/**
 * Smooth scroll to an element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 0)
 */
export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Smooth scroll to an element by selector
 * @param {string} selector - The CSS selector of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 0)
 */
export const smoothScrollToSelector = (selector, offset = 0) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Simple smooth scroll to element by ID
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Add a small offset to account for any fixed headers
    const offset = 80;
    const elementPosition = element.offsetTop - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Navigate to home page with hash and scroll to element
 * @param {string} locale - The current locale
 * @param {string} elementId - The ID of the element to scroll to
 * @param {function} router - Next.js router instance
 */
export const navigateToSection = (locale, elementId, router) => {
  router.push(`/${locale}#${elementId}`);
  setTimeout(() => {
    scrollToElement(elementId);
  }, 100);
};
