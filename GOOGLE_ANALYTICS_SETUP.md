# Google Analytics Setup Instructions

## 1. Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Get your GA4 Measurement ID (format: G-XXXXXXXXXX)

## 2. Environment Configuration

Create a `.env.local` file in your project root and add:

```bash
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here
```

Replace `your_google_analytics_id_here` with your actual GA4 Measurement ID.

## 3. Usage Examples

### Track Custom Events

```javascript
import { event, trackButtonClick, trackFormSubmission } from "@/lib/analytics";

// Track button clicks
trackButtonClick("contact-form-submit", "header");

// Track form submissions
trackFormSubmission("contact-form", "contact");

// Track custom events
event({
  action: "download",
  category: "engagement",
  label: "product-catalog-pdf",
  value: 1,
});
```

### Track Product Views

```javascript
import { trackProductView } from "@/lib/analytics";

trackProductView("product-123", "Wooden Spoon Set", "kitchen", 29.99);
```

### Track E-commerce Purchases

```javascript
import { purchase } from "@/lib/analytics";

purchase("order-123", 99.99, "USD", [
  {
    item_id: "product-123",
    item_name: "Wooden Spoon Set",
    category: "kitchen",
    quantity: 1,
    price: 29.99,
  },
]);
```

## 4. Available Analytics Functions

- `pageview(url)` - Track page views
- `event({ action, category, label, value })` - Track custom events
- `purchase(transactionId, value, currency, items)` - Track purchases
- `trackFormSubmission(formName, formType)` - Track form submissions
- `trackButtonClick(buttonName, location)` - Track button clicks
- `trackProductView(productId, productName, category, price)` - Track product views
- `trackSearch(searchTerm, resultsCount)` - Track search queries

## 5. Testing

1. Set up your environment variable
2. Run your development server: `npm run dev`
3. Open browser dev tools and check the Network tab for Google Analytics requests
4. Use Google Analytics Real-time reports to verify tracking is working

## 6. Privacy Considerations

- Ensure you have proper privacy policies in place
- Consider implementing cookie consent if required by your jurisdiction
- The analytics implementation respects user privacy and only tracks essential metrics
