import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ScreenView from "~/components/core/screenView/screenView";

export default component$(() => {
  return <ScreenView />;
});

export const head: DocumentHead = {
  title: "Compoundfolio - Track your investments without Spreadsheets!",
  meta: [
    {
      name: "description",
      content:
        "Compoundfolio is investment tracker for advanced investors. Benefit from tracking stocks form 70+ exchanges, managing dividend and real estate cas-flow.",
    },
  ],
};
