import { component$ } from '@builder.io/qwik';
import FeatureWrapper from '~/components/core/featureWrapper/featureWrapper';
import { FEATURE_WALL_BRICKS } from './const';
import styles from './featureWall.module.css'

export default component$(() => {
  return (
    <FeatureWrapper
      shortTitle="Feature wall"
      title="Asset management have never been that easy"
    >
      <section class={styles.featureWall}>
        {FEATURE_WALL_BRICKS.map(({ title, description }) => (
          <div key={title} class={styles.featureWall__item}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM26.895 13.5H16.5V3.105C21.915 3.78 26.22 8.085 26.895 13.5ZM3 15C3 8.895 7.59 3.84 13.5 3.105V26.895C7.59 26.16 3 21.105 3 15ZM16.5 26.895V16.5H26.895C26.22 21.915 21.915 26.22 16.5 26.895Z" fill="white" />
            </svg>
            <h3 class={styles.featureWall__item_title}>{title}</h3>
            <span class={styles.featureWall__item_description}>{description}</span>
          </div>
        ))}
      </section>
    </FeatureWrapper>
  )
})