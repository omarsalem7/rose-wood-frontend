/**
 * Get the current locale from the environment
 * Works in both server and client components
 */
export async function getCurrentLocale() {
  if (typeof window !== "undefined") {
    // Client-side: read from pathname
    const pathname = window.location.pathname;
    return pathname.startsWith("/en") ? "en" : "ar";
  } else {
    try {
      // Server-side: import headers only here
      const { headers } = await import("next/headers");
      const headersList = await headers();
      return headersList.get("x-locale") || "ar";
    } catch (error) {
      // Fallback if headers are not available
      return "ar";
    }
  }
}
