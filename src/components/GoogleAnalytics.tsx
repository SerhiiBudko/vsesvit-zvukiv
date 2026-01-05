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

export function GoogleAnalytics() {
  useEffect(() => {
    // Only load if measurement ID is provided
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics: Measurement ID not configured');
      return;
    }

    // Load gtag.js script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false, // We handle page views manually for React Router
    });

    return () => {
      // Cleanup: remove script if component unmounts (shouldn't happen in normal use)
      const existingScript = document.querySelector(
        `script[src*="googletagmanager.com/gtag/js"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}

