'use client';

import { useAnalytics } from '@/lib/useAnalytics';

export default function AnalyticsWrapper({ children }) {
  useAnalytics();
  
  return <>{children}</>;
}
