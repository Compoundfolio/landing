import { Slot, component$ } from '@builder.io/qwik';
import style from './featureWrapper.module.css'

interface IFeatureWrapper {
  shortTitle: string
  title: string
  replacesText?: string
  description?: string
  ctaButtonTitle?: string
}

export default component$(({
  shortTitle,
  title,
  replacesText,
  description,
  ctaButtonTitle,
}: IFeatureWrapper) => {
  return (
    <article class={style.feature}>
      <p class={style.feature_shortTitle}>{shortTitle}</p>
      <div class="centered gap-16px">
        <h2 class={style.feature_title}>{title}</h2>
        {description && <span class={style.feature_description}>{description}</span>}
      </div>
      <div class="centered">
        <Slot />
        {replacesText && (
          <em class={style.feature_description}>
            <b>REPLACES: </b>{replacesText}
          </em>
        )}
      </div>
      {ctaButtonTitle && (
        <a href='http://localhost:3000' preventdefault:click>
          <button class={style.feature_callToActionButton}>{ctaButtonTitle}</button>
        </a>
      )}
    </article>
  )
})