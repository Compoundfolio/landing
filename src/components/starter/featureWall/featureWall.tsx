import { component$ } from '@builder.io/qwik';
import FeatureWrapper from '~/components/core/featureWrapper/featureWrapper';
import { FEATURE_WALL_BRICKS } from './const';

export default component$(() => {
  return (
    <FeatureWrapper
      shortTitle="Feature wall"
      title="Asset management have never been that easy"
    >
      {FEATURE_WALL_BRICKS.map(({ title, description }) => (
        <>{title} {description}</>
      ))}
    </FeatureWrapper>
  )
})