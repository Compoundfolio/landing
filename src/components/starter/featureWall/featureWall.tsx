import { component$ } from "@builder.io/qwik";
import FeatureWrapper from "~/components/core/featureWrapper/featureWrapper";
import { FEATURE_WALL_BRICKS } from "./const";
import styles from "./featureWall.module.css";

export default component$(() => {
  return (
    <>
      <div class={styles.light} />
      <FeatureWrapper
        shortTitle="Feature wall"
        title={`Asset management \n have never been that easy`}
      >
        <section class={[styles.featureWall, "screenViewContentMaxWidth"]}>
          {FEATURE_WALL_BRICKS.map(({ title, description, icon }) => (
            <div key={title} class={styles.featureWall__item}>
              {icon}
              <h3 class={styles.featureWall__item_title}>{title}</h3>
              <span class={styles.featureWall__item_description}>
                {description}
              </span>
            </div>
          ))}
        </section>
      </FeatureWrapper>
    </>
  );
});
