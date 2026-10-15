export function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function EmailText({ address }: { address: string }) {
  const dot = address.indexOf('.');
  const at = address.lastIndexOf('@');
  if (dot < 0 || at < dot) return <span>{address}</span>;
  return <span>{address.slice(0, dot + 1)}<wbr />{address.slice(dot + 1, at + 1)}<wbr />{address.slice(at + 1)}</span>;
}
