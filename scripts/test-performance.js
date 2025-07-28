const puppeteer = require("puppeteer");

async function testNavigationPerformance() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Enable performance monitoring
  await page.setCacheEnabled(false);

  console.log("Testing navigation performance...\n");

  const routes = [
    "/ar",
    "/ar/products",
    "/ar/about-us",
    "/ar/contact",
    "/ar/wholesale",
    "/ar/wood-steps",
  ];

  for (const route of routes) {
    console.log(`Testing route: ${route}`);

    const startTime = Date.now();
    await page.goto(`http://localhost:3000${route}`, {
      waitUntil: "networkidle0",
    });
    const loadTime = Date.now() - startTime;

    // Get performance metrics
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType("navigation")[0];
      return {
        loadTime: navigation
          ? navigation.loadEventEnd - navigation.loadEventStart
          : 0,
        domContentLoaded: navigation
          ? navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart
          : 0,
        firstPaint:
          performance.getEntriesByName("first-paint")[0]?.startTime || 0,
        firstContentfulPaint:
          performance.getEntriesByName("first-contentful-paint")[0]
            ?.startTime || 0,
      };
    });

    console.log(`  Load Time: ${loadTime}ms`);
    console.log(
      `  DOM Content Loaded: ${metrics.domContentLoaded.toFixed(2)}ms`
    );
    console.log(`  First Paint: ${metrics.firstPaint.toFixed(2)}ms`);
    console.log(
      `  First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms`
    );
    console.log("");
  }

  await browser.close();
  console.log("Performance testing completed!");
}

// Run the test if this file is executed directly
if (require.main === module) {
  testNavigationPerformance().catch(console.error);
}

module.exports = { testNavigationPerformance };
