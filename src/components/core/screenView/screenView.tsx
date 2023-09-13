import { component$ } from "@builder.io/qwik";
import styles from "./screenView.module.css"
import IntroView from "~/components/starter/intro/introView";
import GetStarted from "~/components/starter/getStared/getStarted";
import AskYourself from "~/components/starter/askYourself/askYourself";
import Visualizations from "~/components/starter/visualizations/visualizations";

export default component$(() => {
  return <>
    <section class={styles.screenView}>
      <div class={styles.screenView__paralaxContainer}>
        <IntroView />
      </div>
      <div class={styles.content}>
        <AskYourself />
      </div>
      <div class={styles.screenView__paralaxContainer}>
        <GetStarted />
      </div>
      <div class={styles.content}>
        <Visualizations />
      </div>
    </section>
  </>
})