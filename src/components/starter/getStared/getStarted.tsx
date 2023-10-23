import { component$ } from "@builder.io/qwik";
import styles from "./getStarted.module.css";
import RhombusButton from "~/components/core/rhombusButton/rhombusButton";
import DividendsModalImage from "../../../../public/images/dividendsModal.jpg?jsx";

export default component$(() => {
  return (
    <>
      <div class={[styles.kolhoz, styles.kolhoz_top]} />
      <div class={[styles.kolhoz, styles.kolhoz_bottom]} />
      <div class={styles.blackHole} />

      <div class="centered relative full-w">
        <span
          class={styles.changeTitle}
          style={{ fontStyle: "normal !important" }}
        >
          It's time for
        </span>
        <div style={{ position: "relative", width: "min-content" }}>
          <DividendsModalImage
            loading="lazy"
            class={styles.getStarted_dividendsModalImage}
          />
          <div class={styles.getStarted_ctaButton}>
            <RhombusButton />
          </div>
        </div>
        <span class={styles.changeTitle}>COMPOUNDFOLIO</span>
      </div>
    </>
  );
});
