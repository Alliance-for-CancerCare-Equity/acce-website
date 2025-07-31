import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="/vendor/jQuery/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/bootstrap/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/counter-up/countup.js" strategy="afterInteractive" />
        <Script src="/vendor/magnific-popup/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </Html>
  )
}