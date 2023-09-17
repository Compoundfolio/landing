import { component$ } from "@builder.io/qwik";
import styles from "./screenView.module.css"
import IntroView from "~/components/starter/intro/introView";
import GetStarted from "~/components/starter/getStared/getStarted";
import AskYourself from "~/components/starter/askYourself/askYourself";
import Visualizations from "~/components/starter/visualizations/visualizations";
import CoreFeatures from "~/components/starter/coreFeatures/coreFeatures";
import FeatureWall from "~/components/starter/featureWall/featureWall";
import Numbers from "~/components/starter/numbers/numbers";
import Faq from "~/components/starter/faq/faq";
import Customize from "~/components/starter/customize/customize";

export default component$(() => {
  return <>
    <main class={styles.screenView}>
      <div class={styles.content} id="intro">
        <IntroView />
      </div>
      <div class={styles.screenView__paralaxContainer} id="askYourself">
        <AskYourself />
      </div>
      <div class={styles.content} id="getStarted">
        <GetStarted />
      </div>
      <div class={styles.screenView__paralaxContainer} id="visualizations">
        <Visualizations />
      </div>
      <div class={styles.screenView__paralaxContainer} id="coreFeatures">
        <CoreFeatures />
      </div>
      <div class={styles.screenView__paralaxContainer} id="coreFeatures">
        <Customize />
      </div>
      <div class={styles.screenView__paralaxContainer} id="featureWall">
        <FeatureWall />
      </div>
      <div class={styles.content} id="numbers">
        <Numbers />
      </div>
      <div class={styles.content} id="faq">
        <Faq />
      </div>
    </main>
  </>
})