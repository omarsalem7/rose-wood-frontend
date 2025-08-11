import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Log the webhook payload for debugging

    // Extract the model/collection type from the webhook
    const model = body.data?.type || body.model;

    // Map Strapi content types to cache tags
    const cacheTagMap = {
      "api::product.product": "products",
      "api::category.category": "categories",
      "api::blog.blog": "blogs",
      "api::page.page": "pages",
      "api::page": "page",
      "api::article.article": "articles",
      // Product endpoints with specific queries
      "api::product.product:populate": "products-populate",
      // Add more mappings as needed
    };

    // Get the appropriate cache tag
    let cacheTag = cacheTagMap[model] || "default";

    // Handle specific product endpoints
    if (model === "api::product.product") {
      // Revalidate both general products and populated products
      revalidateTag("products");
      revalidateTag("products-populate");
      cacheTag = "products,products-populate";
    } else {
      revalidateTag(cacheTag);
    }

    // Also revalidate the home page since it displays multiple content types
    revalidateTag("home");

    return NextResponse.json({
      revalidated: true,
      cacheTag,
      model,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Error in revalidation webhook:", error);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}

// Optional: Add GET method for testing
export async function GET() {
  return NextResponse.json({
    message: "Revalidation endpoint is working",
    timestamp: Date.now(),
  });
}
