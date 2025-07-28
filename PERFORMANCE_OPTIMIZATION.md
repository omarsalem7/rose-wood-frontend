# Performance Optimization Guide

## Issues Identified and Fixed

### 1. **API Calls on Every Route Change**

**Problem**: `fetchNavbarData()` was called on every route change in `SharedLayout.js`
**Solution**:

- Added caching mechanism with 5-minute cache duration
- Implemented loading states to improve perceived performance
- Added error handling with fallback to cached data

### 2. **Heavy Image Loading**

**Problem**: Multiple components loading large images without optimization
**Solution**:

- Reduced image quality for gallery images (85% → 70%)
- Added `loading="lazy"` for non-critical images
- Optimized image quality for product listings (75%)
- Added WebP and AVIF format support in Next.js config

### 3. **No Caching Strategy**

**Problem**: API calls didn't have proper caching
**Solution**:

- Implemented client-side caching for navbar data
- Added proper headers for API calls
- Configured Next.js caching strategies

### 4. **Middleware Performance**

**Problem**: Unnecessary console logs and inefficient locale detection
**Solution**:

- Removed console.log statements
- Optimized locale detection logic
- Reduced unnecessary redirects

### 5. **Configuration Warnings**

**Problem**: Next.js configuration warnings about deprecated options
**Solution**:

- Removed deprecated `swcMinify` option
- Added Turbopack configuration
- Updated to current Next.js best practices

## Additional Optimizations Implemented

### 1. **Next.js Configuration**

```javascript
// Added to next.config.mjs
- Image format optimization (WebP, AVIF)
- CSS optimization
- Package import optimization
- Bundle splitting
- Turbopack configuration
- Compression enabled
- Bundle analyzer integration
```

### 2. **Loading States**

- Added skeleton loading for navbar components
- Implemented loading spinners
- Created reusable loading components

### 3. **Performance Monitoring**

- Added performance tracking utilities
- Implemented debounce and throttle functions
- Added navigation performance monitoring
- Created real-time performance dashboard

### 4. **Automated Testing**

- Added Puppeteer-based performance testing
- Created bundle analyzer integration
- Added Lighthouse performance testing

## Performance Monitoring

### Real-Time Monitoring

The app now includes:

- **PerformanceMonitor**: Tracks navigation and page load performance
- **PerformanceDashboard**: Shows real-time metrics in development
- **Console Logging**: Detailed performance metrics in browser console

### Track Navigation Performance

```javascript
import { performanceUtils } from "@/lib/utils";

// Track navigation between routes
performanceUtils.trackNavigation("/ar", "/ar/products");
```

### Track API Call Performance

```javascript
const startTime = performance.now();
const data = await apiCall("/endpoint");
performanceUtils.trackApiCall("/endpoint", startTime);
```

## Testing Tools

### 1. **Bundle Analysis**

```bash
# Analyze bundle size
npm run analyze
npm run build:analyze
```

### 2. **Performance Testing**

```bash
# Run automated performance tests
npm run test:performance

# Run Lighthouse audit
npm run performance
```

### 3. **Development Monitoring**

- Performance dashboard appears in bottom-right corner during development
- Real-time metrics for navigation time, API calls, bundle size, and memory usage
- Console logging for detailed performance analysis

## Additional Recommendations

### 1. **Image Optimization**

- Use `next/image` with proper sizing
- Implement responsive images
- Consider using image CDN for production

### 2. **Code Splitting**

- Implement dynamic imports for heavy components
- Use React.lazy() for route-based code splitting

### 3. **Database Optimization**

- Implement database query caching
- Use connection pooling
- Optimize API endpoints

### 4. **CDN Implementation**

- Use CDN for static assets
- Implement edge caching
- Consider using Vercel Edge Functions

## Monitoring Tools

### 1. **Lighthouse**

- Run Lighthouse audits regularly
- Monitor Core Web Vitals
- Track performance metrics

### 2. **Real User Monitoring (RUM)**

- Implement performance monitoring
- Track user experience metrics
- Monitor error rates

### 3. **Bundle Analyzer**

```bash
npm install --save-dev @next/bundle-analyzer
```

## Expected Performance Improvements

1. **Faster Navigation**: 40-60% improvement due to caching
2. **Reduced Image Load Times**: 30-50% improvement with optimization
3. **Better Perceived Performance**: Loading states improve user experience
4. **Reduced Bundle Size**: 20-30% improvement with optimizations
5. **Faster Development**: Turbopack provides faster development builds

## Testing Performance

### 1. **Development Testing**

```bash
npm run dev
# Test navigation between routes
# Monitor network tab for API calls
# Check bundle size
# Use performance dashboard
```

### 2. **Production Testing**

```bash
npm run build
npm start
# Run Lighthouse audits
# Test on different devices
# Monitor Core Web Vitals
```

### 3. **Automated Testing**

```bash
# Start development server
npm run dev

# In another terminal, run performance tests
npm run test:performance
```

## Maintenance

### Regular Tasks

1. Monitor bundle size weekly
2. Run Lighthouse audits monthly
3. Review and update caching strategies
4. Optimize images as needed
5. Update dependencies regularly
6. Run automated performance tests

### Performance Budget

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## Troubleshooting

### Common Issues

1. **Slow API calls**: Check caching implementation
2. **Large bundle size**: Use bundle analyzer
3. **Image loading issues**: Verify image optimization
4. **Navigation delays**: Check middleware performance
5. **Configuration warnings**: Update to latest Next.js practices

### Debug Tools

- Chrome DevTools Performance tab
- Network tab for API monitoring
- React DevTools for component profiling
- Lighthouse for comprehensive audits
- Performance dashboard for real-time monitoring

## Quick Performance Checklist

- [ ] API calls are cached
- [ ] Images are optimized and lazy-loaded
- [ ] Bundle size is reasonable (< 500KB initial)
- [ ] Navigation feels fast (< 1s)
- [ ] Loading states are implemented
- [ ] Performance monitoring is active
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals are green

## Performance Commands

```bash
# Development with performance monitoring
npm run dev

# Bundle analysis
npm run analyze

# Performance testing
npm run test:performance

# Lighthouse audit
npm run performance

# Production build
npm run build
npm start
```
