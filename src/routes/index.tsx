import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import IntroView from "~/components/starter/intro/introView";

export default component$(() => {
  return (
    <>
      <IntroView />
    </>
  );
});

export const head: DocumentHead = {
  title: "Compoundfolio - Investment portfolio manager",
  meta: [
    {
      name: "description",
      content: "TODO",
    },
  ],
};
