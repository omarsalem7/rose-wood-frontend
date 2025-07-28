"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { performanceUtils } from "@/lib/utils";

const PerformanceMonitor = () => {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Track navigation performance
    if (prevPathname.current && prevPathname.current !== pathname) {
      performanceUtils.trackNavigation(prevPathname.current, pathname);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    // Track page load performance
    if (typeof window !== "undefined") {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            console.log("Page Load Performance:", {
              pathname,
              loadTime: entry.loadEventEnd - entry.loadEventStart,
              domContentLoaded:
                entry.domContentLoadedEventEnd -
                entry.domContentLoadedEventStart,
              firstPaint:
                performance.getEntriesByName("first-paint")[0]?.startTime,
              firstContentfulPaint: performance.getEntriesByName(
                "first-contentful-paint"
              )[0]?.startTime,
            });
          }
        }
      });

      observer.observe({ entryTypes: ["navigation", "paint"] });

      return () => observer.disconnect();
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
