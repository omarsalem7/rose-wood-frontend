import { NextResponse } from "next/server";

const locales = ["ar", "en"];
const defaultLocale = "ar";

function getLocale(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Try to get locale from preferred_language cookie
    const cookieHeader = request.headers.get("cookie");
    let locale = defaultLocale;
    if (cookieHeader) {
      const match = cookieHeader.match(/preferred_language=([^;]+)/);
      if (match && locales.includes(match[1])) {
        locale = match[1];
      }
    }
    return locale;
  }

  // Extract locale from pathname
  const segments = pathname.split("/");
  return segments[1];
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // For root path, redirect to locale root
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/${locale}`, request.url), 308);
    }

    // For other paths, prepend locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url),
      308
    );
  }

  // Add locale to headers for server components
  const response = NextResponse.next();
  const locale = getLocale(request);
  response.headers.set("x-locale", locale);

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    "/((?!_next|api|favicon.ico|.*\\.).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
