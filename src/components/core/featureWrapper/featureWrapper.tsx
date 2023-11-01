import { $, Slot, component$ } from "@builder.io/qwik";
import style from "./featureWrapper.module.css";
import { APP_LINK } from "~/consts";

interface IFeatureWrapper {
  shortTitle: string;
  title: string;
  replacesText?: string;
  description?: string;
  ctaButtonTitle?: string;
}

export default component$(
  ({
    shortTitle,
    title,
    replacesText,
    description,
    ctaButtonTitle,
  }: IFeatureWrapper) => {
    const handleClickCta = $(() => {
      window.open(APP_LINK, "_blank");
    });

    return (
      <article class={style.feature}>
        <p class={style.feature_shortTitle}>{shortTitle}</p>
        <div class="centered gap-24px">
          <h2 class={style.feature_title}>{title}</h2>
          {description && (
            <span class={style.feature_description}>{description}</span>
          )}
        </div>
        <div class="centered">
          <Slot />
          {replacesText && (
            <em class={style.feature_description}>
              <b>REPLACES: </b>
              {replacesText}
            </em>
          )}
        </div>
        {ctaButtonTitle && (
          <button
            onClick$={handleClickCta}
            class={style.feature_callToActionButton}
          >
            {ctaButtonTitle}
          </button>
        )}
      </article>
    );
  }
);
