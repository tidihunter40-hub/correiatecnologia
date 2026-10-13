'use client';

export function OfflineRetry() {
  return <button className="button" type="button" onClick={() => window.location.reload()}>Tentar novamente <span aria-hidden="true">↻</span></button>;
}
