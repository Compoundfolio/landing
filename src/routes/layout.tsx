import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import resetStyles from "./reset.css?inline";
import globalStyles from "./global.css?inline";

const REVALIDATE_MILLISECONDS_TIME = 60 * 60 * 24 * 7;
const MAX_SERVER_SIDE_REVALIDATION_IN_SECONDS = 31536000; // 365 days

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: REVALIDATE_MILLISECONDS_TIME,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: MAX_SERVER_SIDE_REVALIDATION_IN_SECONDS,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(resetStyles);
  useStyles$(globalStyles);

  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
