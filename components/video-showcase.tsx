'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { whatsappLink } from '../lib/site';

type VideoShowcaseProps = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  src: string;
  poster: string;
  previewEnd?: number;
  duration: string;
  highlights: string[];
  primaryLabel: string;
  primaryHref: string;
  quoteMessage: string;
};

export function VideoShowcase({
  id,
  title,
  eyebrow,
  description,
  src,
  poster,
  previewEnd,
  duration,
  highlights,
  primaryLabel,
  primaryHref,
  quoteMessage,
}: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const previewSrc = previewEnd ? `${src}#t=0,${previewEnd}` : src;

  return (
    <section className="video-showcase" aria-labelledby={`${id}-title`}>
      <div className="container video-showcase-grid">
        <div className="video-showcase-player">
          <video
            ref={videoRef}
            controls
            preload="none"
            playsInline
            poster={poster}
            aria-label={`Demonstração em vídeo: ${title}`}
            onPlay={() => setHasStarted(true)}
          >
            <source src={previewSrc} type="video/mp4" />
            Seu navegador não oferece suporte à reprodução de vídeo HTML5.
          </video>
          {!hasStarted && (
            <button
              className="video-showcase-play"
              type="button"
              aria-label={`Reproduzir demonstração: ${title}`}
              onClick={() => {
                const playback = videoRef.current?.play();
                playback?.catch(() => setHasStarted(false));
              }}
            >
              <span aria-hidden="true">▶</span>
            </button>
          )}
          <span className="video-showcase-duration">Demonstração · {duration}</span>
        </div>

        <div className="video-showcase-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{description}</p>
          <ul className="video-showcase-highlights">
            {highlights.map((highlight) => <li key={highlight}><span aria-hidden="true">✓</span>{highlight}</li>)}
          </ul>
          <div className="video-showcase-actions">
            <Link className="button" href={primaryHref}>{primaryLabel}<span aria-hidden="true">→</span></Link>
            <a className="video-showcase-quote" href={whatsappLink(quoteMessage)} target="_blank" rel="noreferrer">Solicitar orçamento no WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
          {previewEnd && <a className="video-showcase-full" href={src} target="_blank" rel="noreferrer">Assistir ao vídeo completo <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </section>
  );
}
