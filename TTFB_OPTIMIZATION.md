# Time to First Byte (TTFB) Optimization Guide

## What is TTFB?

**Time to First Byte (TTFB)** measures the time from when a user requests a page until the first byte of the response is received. It's a critical metric that affects:

- **User Experience**: Faster perceived loading
- **SEO Rankings**: Google considers TTFB in page speed
- **Conversion Rates**: Faster pages = better conversions

## ✅ Optimizations Implemented

### 1. **Font Loading Optimization**

```javascript
// Before: Loading 9 font weights
weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"];

// After: Loading only 4 essential weights
weight: ["400", "500", "600", "700"];
```

- **Reduced font weights** from 9 to 4 essential ones
- **Added preload** for critical fonts
- **Font display swap** for better perceived performance

### 2. **Layout-Level Caching**

```javascript
// Added revalidation at layout level
export const revalidate = 3600; // 1 hour

// Client-side caching for navbar data
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
```

- **Server-side revalidation** every hour
- **Client-side caching** for frequently accessed data
- **Reduced API calls** on subsequent visits

### 3. **Next.js Configuration Optimizations**

```javascript
// Enhanced image optimization
deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

// Webpack optimizations
splitChunks: {
  chunks: "all",
  cacheGroups: {
    vendor: { test: /[\\/]node_modules[\\/]/ }
  }
}
```

### 4. **HTTP Headers for Caching**

```javascript
// Static assets caching
{
  source: "/assets/(.*)",
  headers: [{
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable"
  }]
}
```

## 🚀 Additional TTFB Optimizations

### 1. **Database Query Optimization**

```javascript
// Use specific field selection instead of populate all
// Before
populate[hero][populate]=*

// After
populate[hero][populate][title]=true&populate[hero][populate][image]=true
```

### 2. **API Response Caching**

```javascript
// Implement Redis or in-memory caching
const cache = new Map();
const CACHE_TTL = 300; // 5 minutes

export async function fetchWithCache(key, fetcher) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  const data = await fetcher();
  cache.set(key, { data, timestamp: Date.now() });
  return data;
}
```

### 3. **Static Generation for Dynamic Routes**

```javascript
// Generate static pages at build time
export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### 4. **Bundle Splitting and Code Splitting**

```javascript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Skeleton />,
  ssr: false,
});

// Route-based code splitting
const AboutPage = lazy(() => import("./AboutPage"));
```

## 📊 Monitoring TTFB

### 1. **Core Web Vitals**

- **TTFB**: Should be under 600ms
- **LCP**: Should be under 2.5s
- **FID**: Should be under 100ms

### 2. **Tools for Measurement**

```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://yoursite.com --output=json

# WebPageTest
# Visit webpagetest.org for detailed analysis

# Chrome DevTools
# Network tab > Waterfall view
```

### 3. **Real User Monitoring (RUM)**

```javascript
// Track TTFB in your app
export function trackTTFB() {
  const navigation = performance.getEntriesByType("navigation")[0];
  const ttfb = navigation.responseStart - navigation.requestStart;

  // Send to analytics
  analytics.track("TTFB", { value: ttfb });
}
```

## 🔧 Server-Side Optimizations

### 1. **Database Indexing**

```sql
-- Add indexes for frequently queried fields
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_products_category ON products(category_id);
```

### 2. **Connection Pooling**

```javascript
// Optimize database connections
const pool = mysql.createPool({
  connectionLimit: 10,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
});
```

### 3. **CDN Implementation**

```javascript
// Use CDN for static assets
const CDN_URL = process.env.CDN_URL || 'https://cdn.yoursite.com';

// In Next.js config
images: {
  loader: 'custom',
  loaderFile: './image-loader.js'
}
```

## 📈 Expected Improvements

### **TTFB Improvements**

- **Font optimization**: 100-200ms improvement
- **Caching strategy**: 200-400ms improvement
- **Bundle optimization**: 100-300ms improvement
- **Total expected**: 400-900ms improvement

### **Overall Performance**

- **First Contentful Paint**: 20-40% faster
- **Largest Contentful Paint**: 30-50% faster
- **Cumulative Layout Shift**: Reduced by 60-80%

## 🧪 Testing Your Optimizations

### 1. **Before/After Testing**

```bash
# Test before optimization
lighthouse https://yoursite.com --output=json > before.json

# Make optimizations

# Test after optimization
lighthouse https://yoursite.com --output=json > after.json

# Compare results
lighthouse-compare before.json after.json
```

### 2. **Performance Budget**

```javascript
// Set performance budgets
const budgets = {
  performance: 90,
  accessibility: 95,
  "best-practices": 90,
  seo: 90,
};
```

## 🚨 Common TTFB Issues

### 1. **Slow Database Queries**

- Use query optimization
- Implement proper indexing
- Add query caching

### 2. **Heavy Server-Side Processing**

- Move heavy work to background jobs
- Use streaming responses
- Implement progressive loading

### 3. **External API Dependencies**

- Cache external API responses
- Use fallback data
- Implement timeout handling

### 4. **Large Bundle Sizes**

- Code splitting
- Tree shaking
- Bundle analysis and optimization

## 📚 Resources

- [Next.js Performance Documentation](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web.dev TTFB Guide](https://web.dev/ttfb/)
- [Lighthouse Performance Scoring](https://web.dev/performance-scoring/)
- [Core Web Vitals](https://web.dev/vitals/)
