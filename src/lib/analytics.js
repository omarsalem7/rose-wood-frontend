// Google Analytics utility functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events (GA4 format)
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track custom events (GA4 format - alternative)
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track e-commerce events
export const purchase = (transactionId, value, currency = 'USD', items = []) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    });
  }
};

// Track form submissions (GA4 format)
export const trackFormSubmission = (formName, formType = 'contact') => {
  trackEvent('form_submit', {
    form_name: formName,
    form_type: formType,
    event_category: 'engagement',
  });
};

// Track button clicks (GA4 format)
export const trackButtonClick = (buttonName, location = 'unknown') => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
    event_category: 'engagement',
  });
};

// Track product views (GA4 format)
export const trackProductView = (productId, productName, category, price) => {
  trackEvent('view_item', {
    item_id: productId,
    item_name: productName,
    item_category: category,
    value: price,
    currency: 'USD',
    event_category: 'ecommerce',
  });
};

// Track search queries (GA4 format)
export const trackSearch = (searchTerm, resultsCount = 0) => {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    event_category: 'engagement',
  });
};

// Debug function to test GA4 events
export const testAnalytics = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    
    // Test basic event
    window.gtag('event', 'test_event', {
      event_category: 'debug',
      event_label: 'manual_test',
      value: 1
    });
    
    // Test custom event
    trackEvent('custom_test', {
      test_parameter: 'test_value',
      timestamp: Date.now()
    });
    
  } else {
    console.log('Google Analytics not loaded');
  }
};
