import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import ScreenView from "~/components/core/screenView/screenView";

export default component$(() => {
  return (
    <>
      <ScreenView />
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
