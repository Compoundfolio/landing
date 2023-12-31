import { component$ } from "@builder.io/qwik";
import FeatureWrapper from "~/components/core/featureWrapper/featureWrapper";
import styles from "./numbers.module.css";

export default component$(() => {
  return (
    <>
      <FeatureWrapper
        shortTitle="Numbers"
        title={
          "Track assets from over 70 stock exchanges \n from all over the world"
        }
        ctaButtonTitle="Start tracking assets"
      >
        <div class={[styles.numbers, "gap-72px"]}>
          <div class={styles.numbers__item}>
            <span class={styles.numbers__item_number}>30+</span>
            <span class={styles.numbers__item_description}>
              years of historical data
            </span>
          </div>
          <div class={styles.numbers__item}>
            <span class={styles.numbers__item_number}>150K+</span>
            <span class={styles.numbers__item_description}>
              tickers to search for
            </span>
          </div>
          <div class={styles.numbers__item}>
            <span class={styles.numbers__item_number}>20K+</span>
            <span class={styles.numbers__item_description}>ETFs</span>
          </div>
        </div>
      </FeatureWrapper>
      <div class={styles.numbers_bgImage} />
    </>
  );
});
