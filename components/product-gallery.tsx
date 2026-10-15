'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { CatalogImages } from '../lib/catalog';

export function ProductGallery({ images, name }: { images: CatalogImages; name: string }) {
  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!zoom) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setZoom(false); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); triggerRef.current?.focus(); };
  }, [zoom]);
  const image = images[selected];
  return <div className="product-gallery">
    <button ref={triggerRef} className="product-gallery-main" type="button" onClick={() => setZoom(true)} aria-label={`Ampliar fotografia de ${name}`}><Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" /><span>Ampliar imagem ↗</span></button>
    {images.length > 1 && <div className="product-gallery-thumbs" aria-label="Fotografias do equipamento">{images.map((item, index) => <button type="button" key={item.src} className={index === selected ? 'active' : ''} onClick={() => setSelected(index)} aria-label={`Ver fotografia ${index + 1}: ${item.alt}`} aria-pressed={index === selected}><Image src={item.src} alt="" fill sizes="100px" /></button>)}</div>}
    {zoom && <div className="product-image-lightbox" role="dialog" aria-modal="true" aria-label={`Fotografia ampliada de ${name}`} onClick={() => setZoom(false)}><button ref={closeRef} type="button" onClick={() => setZoom(false)} aria-label="Fechar imagem ampliada">×</button><Image src={image.src} alt={image.alt} fill sizes="100vw" /></div>}
  </div>;
}
