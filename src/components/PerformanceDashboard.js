"use client";
import { useState, useEffect } from "react";

const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState({
    navigationTime: 0,
    apiCallTime: 0,
    bundleSize: 0,
    memoryUsage: 0,
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const updateMetrics = () => {
        if (typeof window !== "undefined" && window.performance) {
          const navigation = performance.getEntriesByType("navigation")[0];
          const memory = performance.memory;

          setMetrics({
            navigationTime: navigation
              ? navigation.loadEventEnd - navigation.loadEventStart
              : 0,
            apiCallTime: 0, // Will be updated by API calls
            bundleSize: document.querySelectorAll("script").length,
            memoryUsage: memory
              ? Math.round(memory.usedJSHeapSize / 1024 / 1024)
              : 0,
          });
        }
      };

      updateMetrics();
      const interval = setInterval(updateMetrics, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="hidden fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>Navigation: {metrics.navigationTime.toFixed(2)}ms</div>
        <div>API Calls: {metrics.apiCallTime.toFixed(2)}ms</div>
        <div>Scripts: {metrics.bundleSize}</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
      <div className="mt-2 text-xs text-gray-400">Development only</div>
    </div>
  );
};

export default PerformanceDashboard;
