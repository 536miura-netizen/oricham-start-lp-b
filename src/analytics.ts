type GtagArgs = [command: string, ...args: unknown[]];

declare global {
  interface Window {
    dataLayer?: GtagArgs[];
    gtag?: (...args: GtagArgs) => void;
    __GA_TRACKING_ID__?: string;
  }
}

const GA_ID = import.meta.env.NEXT_PUBLIC_GA_ID?.trim();

export function initGoogleAnalytics() {
  if (!GA_ID || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  if (window.__GA_TRACKING_ID__ === GA_ID) {
    return;
  }

  window.__GA_TRACKING_ID__ = GA_ID;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: GtagArgs) => {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  if (document.getElementById("ga4-script")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
}
