import { component$, useStyles$, $ } from "@builder.io/qwik";
import styles from "./comparisonSlider.css?inline";
import ImgExcelpng from "../../../../public/images/excel.png?jsx";
import ImgComppng from "../../../../public/images/compoundPower.png?jsx";
import AppImg from "../../../../public/images/after.png?jsx";

export default component$(() => {
  useStyles$(styles);

  const beforeAfter = $(() => {
    const compareArea = document.getElementById("before_after");
    const input = document.getElementById("before_after_slider");
    if (compareArea && input) {
      // @ts-ignore
      compareArea.style.width = input.value + "%";
    }
  });

  return (
    <>
      <AppImg class="appImg" loading={undefined} />
      <section class="parent-container relative">
        <div class="before-after-container">
          <figure>
            <div id="before_after"></div>
          </figure>
          <input
            onInput$={beforeAfter}
            onChange$={beforeAfter}
            type="range"
            min="0"
            max="100"
            value="50"
            id="before_after_slider"
          />
        </div>
        <svg
          class="abstractFigureLeft"
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
        >
          <rect
            x="1"
            y="1"
            width="128"
            height="127"
            stroke="url(#paint0_linear_847_9992)"
            stroke-width="2"
          />
          <rect
            x="9"
            y="9"
            width="128"
            height="128"
            stroke="url(#paint1_linear_847_9992)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_847_9992"
              x1="65"
              y1="0"
              x2="65"
              y2="129"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0F6F72" />
              <stop offset="1" stop-color="#FFD391" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_847_9992"
              x1="73"
              y1="8"
              x2="73"
              y2="138"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0F6F72" />
              <stop offset="1" stop-color="#FFD391" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="abstractFigureRight"
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
        >
          <rect
            x="1"
            y="1"
            width="128"
            height="127"
            stroke="url(#paint0_linear_847_9992)"
            stroke-width="2"
          />
          <rect
            x="9"
            y="9"
            width="128"
            height="128"
            stroke="url(#paint1_linear_847_9992)"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_847_9992"
              x1="65"
              y1="0"
              x2="65"
              y2="129"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0F6F72" />
              <stop offset="1" stop-color="#FFD391" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_847_9992"
              x1="73"
              y1="8"
              x2="73"
              y2="138"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0F6F72" />
              <stop offset="1" stop-color="#FFD391" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="cometaLine"
          width="1919"
          height="1"
          viewBox="0 0 1919 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1919" height="1" fill="url(#paint0_linear_847_10024)" />
          <defs>
            <linearGradient
              id="paint0_linear_847_10024"
              x1="4.25368e-08"
              y1="0.98774"
              x2="1919"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0" />
              <stop offset="0.197917" stop-color="#0F6F72" />
              <stop offset="0.802083" stop-color="#FFD391" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <ImgComppng
          class="beforeLogo"
          alt="Compoundfolio logo"
          decoding="sync"
          loading="eager"
        />
        <ImgExcelpng
          class="afterLogo"
          decoding="sync"
          loading="eager"
          alt="Excel logo"
        />
      </section>
    </>
  );
});
