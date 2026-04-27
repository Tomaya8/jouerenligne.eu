import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RS421GG2MG"
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-RS421GG2MG');`}
      </Script>
    </>
  );
}
