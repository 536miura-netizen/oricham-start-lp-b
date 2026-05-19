import Script from 'next/script';

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function AnalyticsScripts() {
  return (
    <>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: true });
            `}
          </Script>
        </>
      ) : null}

      {clarityId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}

      <Script id="cta-tracking-and-utm" strategy="afterInteractive">
        {`
          (function () {
            var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

            function appendCurrentUtm(anchor) {
              var href = anchor.getAttribute('href');
              if (!href || href.charAt(0) === '#') return;

              try {
                var url = new URL(href, window.location.href);
                var currentParams = new URLSearchParams(window.location.search);
                var changed = false;

                utmKeys.forEach(function (key) {
                  var value = currentParams.get(key);
                  if (value && !url.searchParams.has(key)) {
                    url.searchParams.set(key, value);
                    changed = true;
                  }
                });

                if (changed) anchor.setAttribute('href', url.toString());
              } catch (error) {
                // Ignore malformed URLs so links never break because of tracking.
              }
            }

            document.querySelectorAll('a[href]').forEach(appendCurrentUtm);

            document.addEventListener('click', function (event) {
              var target = event.target.closest('[data-track-event]');
              if (!target) return;

              var eventName = target.getAttribute('data-track-event');
              var eventLabel = target.getAttribute('data-track-label') || target.textContent.trim();

              if (window.gtag && eventName) {
                window.gtag('event', eventName, {
                  event_category: 'cta',
                  event_label: eventLabel
                });
              }

              if (window.clarity && eventName) {
                window.clarity('event', eventName + ':' + eventLabel);
              }
            });
          })();
        `}
      </Script>
    </>
  );
}
