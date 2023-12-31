import { component$ } from "@builder.io/qwik";
import styles from "./askYourself.module.css";
import { COMPETITORS_DESTROY } from "./config";

export default component$(() => {
  return (
    <>
      <div class="blackLinearBg" />

      <div class="centered gap-16px">
        <span class="intro_sub">Ask Yourself</span>
        <h2 class={styles.ask_title} id="a">
          Honestly, is this the way <br />
          to manage your investments?
        </h2>
        <section class={styles.ask__itemWrapper}>
          {COMPETITORS_DESTROY.map(({ title, weaknesses, imgPreview }) => (
            <article class={styles.ask__item} key={title}>
              <div class={styles.ask__item_head}>
                <h3 class={styles.ask__item_head_title}>{title}</h3>
                <hr class={styles.ask__item_head_titleHr} />
              </div>

              <div class={styles.ask__item_content}>
                {imgPreview}
                <ul class={styles.ask__item_weaknessContainer}>
                  {weaknesses.map((weakness) => (
                    <li
                      key={title + weakness}
                      class={styles.ask__item_weaknessWrapper}
                    >
                      <svg
                        class={styles.ask__item_weaknessIcon}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_870_9679)">
                          <rect
                            width="16"
                            height="16"
                            fill="#1290FF"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M12.6663 4.2735L11.7263 3.3335L7.99967 7.06016L4.27301 3.3335L3.33301 4.2735L7.05967 8.00016L3.33301 11.7268L4.27301 12.6668L7.99967 8.94016L11.7263 12.6668L12.6663 11.7268L8.93967 8.00016L12.6663 4.2735Z"
                            fill="#0F6F72"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_870_9679">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span class={styles.ask__item_weakness}>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
});
