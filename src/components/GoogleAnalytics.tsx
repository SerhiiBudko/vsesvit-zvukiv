import { useEffect } from 'react';

/**
 * Google Analytics 4 Component
 *
 * Loads GA4 script dynamically for better Cloudflare compatibility.
 *
 * SETUP:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
 * 2. Add it to .env.local: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. For production, add VITE_GA_MEASUREMENT_ID to GitHub Secrets
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
const GTAG_SRC = 'https://www.googletagmanager.com/gtag/js';

export function GoogleAnalytics() {
  useEffect(() => {
    // Only load if a real measurement ID is configured
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      return;
    }

    // Guard against a second injection (StrictMode double-invokes effects).
    if (document.querySelector(`script[src^="${GTAG_SRC}"]`)) {
      return;
    }

    // dataLayer and gtag are already initialized in index.html <head>
    // Just load the gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `${GTAG_SRC}?id=${GA_MEASUREMENT_ID}`;

    script.onload = () => {
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // We handle page views manually for React Router
      });
    };

    script.onerror = () => {
      console.error('Google Analytics: Failed to load script');
    };

    document.head.appendChild(script);

    // No cleanup: gtag.js is a page-level singleton. Removing it on unmount
    // would tear down tracking for the rest of the session.
  }, []);

  return null;
}
