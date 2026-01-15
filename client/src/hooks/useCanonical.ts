import { useEffect } from 'react';

export function useCanonical(path: string) {
  useEffect(() => {
    const canonicalUrl = `https://rezendepaisagismo.com.br${path}`;
    
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
    
    return () => {
      // Cleanup não necessário pois a próxima página vai remover
    };
  }, [path]);
}
