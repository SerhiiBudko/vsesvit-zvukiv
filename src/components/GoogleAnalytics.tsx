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

    // Initialize dataLayer first
    window.dataLayer = window.dataLayer || [];
    
    // Define gtag function before script loads (commands will queue in dataLayer)
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    // Wait for script to load before configuring
    script.onload = () => {
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false, // We handle page views manually for React Router
      });
    };
    
    // Handle script load errors
    script.onerror = () => {
      console.error('Failed to load Google Analytics script');
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script if component unmounts
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

