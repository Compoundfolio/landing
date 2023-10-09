import { component$ } from "@builder.io/qwik";
import FeatureWrapper from "~/components/core/featureWrapper/featureWrapper";
import { FEATURE_WALL_BRICKS } from "./const";
import styles from "./featureWall.module.css";

export default component$(() => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "calc(50% - 342px)",
          left: "calc(50vw - 342px)",
          width: "684px",
          height: "684px",
          filter: "blur(204.5px)",
          background: "rgba(255, 211, 144, 0.16)",
          borderRadius: "30000px",
          zIndex: -1,
          opacity: 0.65,
        }}
      />
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
