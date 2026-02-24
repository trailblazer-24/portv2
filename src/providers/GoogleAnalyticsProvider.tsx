"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function GoogleAnalyticsProvider() {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

  if (!gaId) {
    return null;
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const enableAnalytics = () => {
      timeoutId = setTimeout(() => {
        setShouldLoadAnalytics(true);
      }, 2000);
    };

    if (document.readyState === "complete") {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(enableAnalytics);
      } else {
        enableAnalytics();
      }
    } else {
      window.addEventListener("load", enableAnalytics, { once: true });
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("load", enableAnalytics);
    };
  }, []);

  if (!shouldLoadAnalytics) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
