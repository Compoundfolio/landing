import { $, component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

export default component$(() => {
  const initGoogleAnalytics = $(() => {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag() {
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    }
    // @ts-ignore
    gtag("js", new Date());
    // @ts-ignore
    gtag("config", `${process.env.GOOGLE_ANALYTICS_KEY}`);
    alert("wht");
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          // @ts-ignore
          fetchpriority="high"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
          // @ts-ignore
          fetchpriority="high"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          // @ts-ignore
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          // @ts-ignore
          fetchpriority="high"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          />
        </noscript>
        <RouterHead />
        <ServiceWorkerRegister />
      </head>

      <body lang="en">
        <RouterOutlet />
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_KEY}`}
        ></script>

        <script onLoad$={initGoogleAnalytics}></script>
        <script
          dangerouslySetInnerHTML={`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "${process.env.GOOGLE_ANALYTICS_KEY}");
        alert("wht");
        `}
        />
      </body>
    </QwikCityProvider>
  );
});
