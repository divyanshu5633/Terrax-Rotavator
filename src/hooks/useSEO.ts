import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SITE_NAME = 'TERRAX';
const BASE_URL = 'https://terrax.in';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const resolvedCanonical = canonical ? `${BASE_URL}${canonical}` : undefined;
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta description
    setMeta('description', description ?? '');

    // Canonical
    if (resolvedCanonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = resolvedCanonical;
    }

    // Open Graph
    setOgMeta('og:title', fullTitle);
    setOgMeta('og:description', description ?? '');
    setOgMeta('og:url', resolvedCanonical ?? '');
    setOgMeta('og:image', resolvedOgImage);
    setOgMeta('og:type', 'website');
    setOgMeta('og:site_name', SITE_NAME);
  }, [fullTitle, description, resolvedCanonical, resolvedOgImage]);
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setOgMeta(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}
