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

export default component$(() => {
  return <>
    <section class={styles.screenView}>
      <div class={styles.screenView__paralaxContainer} id="intro">
        <IntroView />
      </div>
      <div class={styles.content} id="askYourself">
        <AskYourself />
      </div>
      <div class={styles.screenView__paralaxContainer} id="getStarted">
        <GetStarted />
      </div>
      <div class={styles.content} id="visualizations">
        <Visualizations />
      </div>
      <div class={styles.screenView__paralaxContainer} id="coreFeatures">
        <CoreFeatures />
      </div>
      <div class={styles.content} id="featureWall">
        <FeatureWall />
      </div>
      <div class={styles.screenView__paralaxContainer} id="numbers">
        <Numbers />
      </div>
      <div class={styles.content} id="faq">
        <Faq />
      </div>

      {/* <nav class="section-nav">
    		<ol>
    			<li><a href="#introduction">Introduction</a></li>
    			<li><a href="#request-response">Request &amp; Response</a></li>
    			<li><a href="#authentication">Authentication</a></li>
    			<li><a href="#endpoints">Endpoints</a>
    				<ul>
    					<li class=""><a href="#endpoints--root">Root</a></li>
    					<li class=""><a href="#endpoints--cities-overview">Cities Overview</a></li>
    					<li class=""><a href="#endpoints--city-detail">City Detail</a></li>
    					<li class=""><a href="#endpoints--city-config">City Config</a></li>
    					<li class=""><a href="#endpoints--city-spots-overview">City Spots Overview</a></li>
    					<li class=""><a href="#endpoints--city-spot-detail">City Spot Detail</a></li>
    					<li class=""><a href="#endpoints--city-icons-overview">City Icons Overview</a></li>
    					<li class=""><a href="#endpoints--city-icon-detail">City Icon Detail</a></li>
    				</ul>
    			</li>
    			<li class=""><a href="#links">Links</a></li>
    			<li class=""><a href="#expanders">Expanders</a></li>
    			<li class=""><a href="#filters">Filters</a></li>
    		</ol>
    	</nav> */}
    </section>
  </>
})