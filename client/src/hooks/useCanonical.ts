import { useEffect } from 'react';

type PageMetadata = {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
};

export function useCanonical(path: string, metadata: PageMetadata = {}) {
  useEffect(() => {
    const canonicalUrl = `https://www.rezendepaisagismo.com.br${path}`;
    const absoluteImage = metadata.image
      ? metadata.image.startsWith('http')
        ? metadata.image
        : `https://www.rezendepaisagismo.com.br${metadata.image}`
      : undefined;

    const setMeta = (
      selector: string,
      attribute: 'name' | 'property',
      key: string,
      value?: string
    ) => {
      if (!value) return;
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = value;
    };
    
    // Remover tag canônica existente
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Criar e adicionar nova tag canônica
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);

    if (metadata.title) {
      document.title = metadata.title;
      setMeta('meta[property="og:title"]', 'property', 'og:title', metadata.title);
      setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
    }

    if (metadata.description) {
      setMeta('meta[name="description"]', 'name', 'description', metadata.description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', metadata.description);
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description);
    }

    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property', 'og:type', metadata.type ?? 'website');
    setMeta('meta[property="og:image"]', 'property', 'og:image', absoluteImage);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImage);

    const existingRobots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (metadata.noIndex) {
      const robots = existingRobots ?? document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex, nofollow';
      robots.dataset.managedByApp = 'true';
      if (!existingRobots) document.head.appendChild(robots);
    } else if (existingRobots?.dataset.managedByApp === 'true') {
      existingRobots.remove();
    }
    
    return () => {
      // Cleanup não necessário pois a próxima página vai remover
    };
  }, [
    path,
    metadata.title,
    metadata.description,
    metadata.image,
    metadata.type,
    metadata.noIndex,
  ]);
}
