/**
 * Google Analytics 4 Utility
 *
 * SETUP:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
 * 2. Add it to .env.local: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. For production, add VITE_GA_MEASUREMENT_ID to GitHub Secrets
 */

// Get GA Measurement ID from environment variable
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Check if gtag is available
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

function canTrack() {
  return typeof window !== 'undefined' && !!window.gtag && !!GA_MEASUREMENT_ID;
}

/**
 * Track a page view.
 *
 * GA4 wants an explicit `page_view` event for client-side navigation. The
 * earlier version re-ran gtag('config', ...) on every route change and passed
 * `page_path`, which is a Universal Analytics parameter that GA4 ignores.
 */
export function trackPageView(path: string, title?: string) {
  if (!canTrack()) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_location: window.location.origin + path,
    page_path: path,
    page_title: title || document.title,
  });
}

/**
 * Track an event
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    [key: string]: any;
  }
) {
  if (!canTrack()) {
    return;
  }

  window.gtag('event', eventName, eventParams);
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string) {
  trackEvent('form_submit', {
    form_name: formName,
  });
}

/**
 * Track button click
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string) {
  trackEvent('external_link_click', {
    link_url: url,
  });
}
