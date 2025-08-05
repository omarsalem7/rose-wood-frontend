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
    cache: "default", // Use default caching with revalidation
    revalidate: isDev ? 10 : 15, // 1 hour in dev, 24 hours in prod (fallback)
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

  // Determine cache tags based on endpoint
  const getCacheTags = (endpoint) => {
    if (endpoint.includes("/products")) return ["products"];
    if (endpoint.includes("/categories")) return ["categories"];
    if (endpoint.includes("/blogs")) return ["blogs"];
    if (endpoint.includes("/pages")) return ["pages"];
    if (endpoint.includes("/page")) return ["page"];
    if (endpoint.includes("/articles")) return ["articles"];
    // Home page data should use "home" cache tag
    if (
      endpoint.includes("/home") ||
      endpoint.includes("/hero") ||
      endpoint.includes("/featured")
    )
      return ["home"];
    return ["default"];
  };

  const cacheTags = options.cacheTags || getCacheTags(endpoint);

  try {
    const res = await fetch(`${config.apiUrl}${endpointWithLocale}`, {
      cache: config.cache,
      next: {
        revalidate: config.revalidate,
        tags: cacheTags,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...options.headers,
      },
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
 * More accurate scroll to element using getBoundingClientRect
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElementAccurate = (elementId) => {
  // Find all elements with this ID
  const elements = document.querySelectorAll(`#${elementId}`);

  // Find the visible element (not hidden by CSS)
  let element = null;
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);

    // Check if element is visible (has dimensions and not hidden)
    if (
      rect.width > 0 &&
      rect.height > 0 &&
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      parseFloat(style.opacity) > 0
    ) {
      element = el;
      break;
    }
  }

  if (element) {
    const rect = element.getBoundingClientRect();
    const headerHeight = 80; // Adjust this based on your header

    // Calculate the scroll position needed
    const currentScroll = window.scrollY;
    const elementTop = rect.top + currentScroll;
    const targetScroll = elementTop - headerHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
};

/**
 * Simple smooth scroll to element by ID (legacy function)
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  scrollToElementAccurate(elementId);
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

/**
 * Performance monitoring utilities
 */
export const performanceUtils = {
  // Track navigation performance
  trackNavigation: (from, to) => {
    if (typeof window !== "undefined" && window.performance) {
      const navigation = performance.getEntriesByType("navigation")[0];
      console.log("Navigation Performance:", {
        from,
        to,
        loadTime: navigation?.loadEventEnd - navigation?.loadEventStart,
        domContentLoaded:
          navigation?.domContentLoadedEventEnd -
          navigation?.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByName("first-paint")[0]?.startTime,
        firstContentfulPaint: performance.getEntriesByName(
          "first-contentful-paint"
        )[0]?.startTime,
      });
    }
  },

  // Track API call performance
  trackApiCall: (endpoint, startTime) => {
    const duration = performance.now() - startTime;
    console.log(
      `API Call Performance - ${endpoint}:`,
      `${duration.toFixed(2)}ms`
    );
    return duration;
  },

  // Measure component render time
  measureRender: (componentName, callback) => {
    const start = performance.now();
    const result = callback();
    const duration = performance.now() - start;
    console.log(`${componentName} render time:`, `${duration.toFixed(2)}ms`);
    return result;
  },
};

/**
 * Debounce function to prevent excessive API calls
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function execution frequency
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
