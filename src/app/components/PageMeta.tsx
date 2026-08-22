import { useEffect } from "react";
import { SITE } from "@/constants/contact";

type PageMetaProps = {
  /** Page-specific part of the title; the site name is appended. */
  title: string;
  description: string;
  /** Path this page canonically lives at, e.g. "/contact". */
  path: string;
};

function setMeta(selector: string, attr: string, name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Sets the document title, description and canonical URL for a route.
 *
 * The site is a client-rendered SPA, so index.html can only carry one static
 * title. Without this every page would report the home page's title to search
 * engines and to anyone sharing a link.
 */
export function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} — ${SITE.name}`;
    const url = `${SITE.url}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path]);

  return null;
}
