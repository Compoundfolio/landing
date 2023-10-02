import {
  component$,
  Slot,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import resetStyles from "./reset.css?inline";
import globalStyles from "./global.css?inline";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/all";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
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

  useVisibleTask$(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(_ScrollSmoother);

      // ScrollSmoother.create({
      //   smooth: 1, // seconds it takes to "catch up" to native scroll position
      //   effects: true,
      // });
    }
  });

  return (
    <>
      {/* <Header /> */}
      <main>
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});
