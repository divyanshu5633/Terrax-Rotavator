import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SITE_NAME = 'TERRAX';
const BASE_URL = 'https://terrax.in';
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/brand/terrax-og-image.jpg`;

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  const resolvedCanonical = canonical
    ? canonical === '/'
      ? `${BASE_URL}/`
      : `${BASE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : undefined;
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    if (description) {
      setMeta('description', description);
    }

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
    setOgMeta('og:title', title);
    if (description) setOgMeta('og:description', description);
    if (resolvedCanonical) setOgMeta('og:url', resolvedCanonical);
    setOgMeta('og:image', resolvedOgImage);
    setOgMeta('og:type', 'website');
    setOgMeta('og:site_name', SITE_NAME);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    if (description) setMeta('twitter:description', description);
    setMeta('twitter:image', resolvedOgImage);
  }, [title, description, resolvedCanonical, resolvedOgImage]);
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
