import { useDocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href="https://compoundfolio.com/" />
      <meta
        content="compoundfolio, compaundfolio, compound, dividends, portfolio tracker, investment portfolio tracker, dividends tracking app, dividend tracking app, asset management app, investment helper, investment portfolio tracking, investment portfolio analytics, dividend calendar"
        name="keywords"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="google-site-verification"
        content="uHQ64Jv92zNvUhGPU6Kp3xsl6LvL69C14_QZaJTZ0Iw"
      />
      <link rel="icon" href="/fav.png" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
