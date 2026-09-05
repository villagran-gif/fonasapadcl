import { useEffect } from 'react';

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SITE_URL = 'https://fonasapad.cl';
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo_fonasa_pad.png`;

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
}

function upsertLink(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
}

const SeoHead = ({ title, description, canonicalPath, image = DEFAULT_IMAGE, jsonLd }: SeoHeadProps) => {
  useEffect(() => {
    const canonical = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });

    document.querySelectorAll('script[data-fonasapad-jsonld="true"]').forEach((node) => node.remove());

    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.fonasapadJsonld = 'true';
        script.text = JSON.stringify(block);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonicalPath, image, jsonLd]);

  return null;
};

export default SeoHead;
