'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type InstallPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

type PWAContextValue = {
  canInstall: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  isSafari: boolean;
  promptInstall: () => Promise<void>;
  updateAvailable: boolean;
  updateApp: () => void;
  dismissUpdate: () => void;
};

const PWAContext = createContext<PWAContextValue | null>(null);

export function usePWA() {
  const context = useContext(PWAContext);
  if (!context) throw new Error('usePWA deve ser usado dentro de PWAProvider.');
  return context;
}

function formHasUnsentValues() {
  return Array.from(document.forms).some((form) => Array.from(form.elements).some((element) => {
    if (element instanceof HTMLInputElement) {
      if (element.type === 'checkbox' || element.type === 'radio') return element.checked !== element.defaultChecked;
      return element.value !== element.defaultValue;
    }
    if (element instanceof HTMLTextAreaElement) return element.value !== element.defaultValue;
    if (element instanceof HTMLSelectElement) return Array.from(element.options).some((option) => option.selected !== option.defaultSelected);
    return false;
  }));
}

export function PWAProvider({ children }: { children: ReactNode }) {
  const [installPrompt, setInstallPrompt] = useState<InstallPrompt | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [updateRegistration, setUpdateRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateDismissed, setUpdateDismissed] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || ('standalone' in navigator && Boolean((navigator as Navigator & { standalone?: boolean }).standalone));
    const appleDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const safari = /Safari/i.test(navigator.userAgent) && !/CriOS|FxiOS|EdgiOS|OPiOS/i.test(navigator.userAgent);
    setIsInstalled(standalone);
    setIsIOS(appleDevice);
    setIsSafari(safari);

    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPrompt);
    };
    const handleInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };
    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', handleInstalled);

    if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      navigator.serviceWorker.register('/sw.js', { scope: '/' }).then((registration) => {
        setUpdateRegistration(registration);
        const checkWaiting = () => {
          if (registration.waiting && navigator.serviceWorker.controller) setUpdateAvailable(true);
        };
        checkWaiting();
        registration.addEventListener('updatefound', () => {
          const worker = registration.installing;
          worker?.addEventListener('statechange', () => {
            if (worker.state === 'installed' && navigator.serviceWorker.controller) setUpdateAvailable(true);
          });
        });
        registration.update().catch(() => {});
      }).catch(() => {});
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
      window.removeEventListener('appinstalled', handleInstalled);
    };
  }, []);

  async function promptInstall() {
    if (!installPrompt) return;
    try {
      await installPrompt.prompt();
      await installPrompt.userChoice;
    } catch {
      // Some browsers dismiss the install prompt by rejecting its promise.
    } finally {
      setInstallPrompt(null);
    }
  }

  function updateApp() {
    if (formHasUnsentValues() && !window.confirm('Há informações preenchidas em um formulário. Atualizar agora pode apagá-las. Deseja continuar?')) return;
    const waitingWorker = updateRegistration?.waiting;
    if (!waitingWorker) {
      updateRegistration?.update().catch(() => {});
      setUpdateAvailable(false);
      return;
    }
    const reloadAfterUpdate = () => window.location.reload();
    navigator.serviceWorker.addEventListener('controllerchange', reloadAfterUpdate, { once: true });
    waitingWorker.postMessage({ type: 'SKIP_WAITING' });
  }

  const value = useMemo<PWAContextValue>(() => ({
    canInstall: Boolean(installPrompt), isInstalled, isIOS, isSafari, promptInstall,
    updateAvailable: updateAvailable && !updateDismissed, updateApp,
    dismissUpdate: () => setUpdateDismissed(true),
  }), [installPrompt, isInstalled, isIOS, isSafari, updateAvailable, updateDismissed, updateRegistration]);

  return <PWAContext.Provider value={value}>{children}{value.updateAvailable && <div className="pwa-update-banner" role="status"><span>Uma nova versão está disponível.</span><div><button type="button" onClick={value.dismissUpdate}>Depois</button><button className="pwa-update-action" type="button" onClick={value.updateApp}>Atualizar</button></div></div>}</PWAContext.Provider>;
}
