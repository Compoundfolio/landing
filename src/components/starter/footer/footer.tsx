import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import { FOOTER_APP_STRENGTH } from "./config";
import RhombusButton from "~/components/core/rhombusButton/rhombusButton";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div>
        <section class={styles.footer_top}>
          <div class={styles.footer_top_lowLvlWrapper}>
            <div class="flex align-center gap-32px">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_835_19250)">
                  <rect
                    width="100"
                    height="100"
                    rx="8"
                    fill="url(#paint0_angular_835_19250)"
                  />
                  <rect
                    width="100"
                    height="100"
                    rx="8"
                    fill="#000040"
                    fill-opacity="0.3"
                  />
                  <g filter="url(#filter0_d_835_19250)">
                    <rect
                      x="53.8857"
                      y="37"
                      width="26.9998"
                      height="26.9998"
                      rx="13.4999"
                      fill="white"
                    />
                  </g>
                  <g filter="url(#filter1_d_835_19250)">
                    <rect
                      x="33.5"
                      y="43.75"
                      width="20.2499"
                      height="20.2499"
                      rx="10.1249"
                      fill="white"
                    />
                  </g>
                  <g filter="url(#filter2_d_835_19250)">
                    <rect
                      x="20"
                      y="50.5001"
                      width="13.4999"
                      height="13.4999"
                      rx="6.74995"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_835_19250"
                    x="13.8857"
                    y="-3"
                    width="107"
                    height="107"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_835_19250"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_835_19250"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_835_19250"
                    x="-6.5"
                    y="3.75"
                    width="100.25"
                    height="100.25"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_835_19250"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_835_19250"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_835_19250"
                    x="-20"
                    y="10.5001"
                    width="93.5"
                    height="93.4999"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_835_19250"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_835_19250"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_angular_835_19250"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(48.6806 50.75) rotate(46.8573) scale(56.3625 98.8682)"
                  >
                    <stop offset="0.00697357" stop-color="#33394C" />
                    <stop
                      offset="0.747806"
                      stop-color="#0F6F72"
                      stop-opacity="0.69"
                    />
                  </radialGradient>
                  <clipPath id="clip0_835_19250">
                    <rect width="100" height="100" rx="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div class={styles.footer_top_lowLvlWrapper_container}>
                <h2 class={styles.footer_top_lowLvlWrapper_catchTitle}>
                  One app to replace them all
                </h2>
                <span class={styles.footer_top_lowLvlWrapper_catchSubTitle}>
                  Manage your investments on higher level
                </span>
              </div>
            </div>
            <RhombusButton />
          </div>
          <div class={styles.footer_top_lowLvlWrapper}>
            {FOOTER_APP_STRENGTH.map(({ title, description }) => (
              <article key={title} class={styles.footer_strength}>
                <div class={styles.footer_strength_head}>
                  <h3 class={styles.footer_strength_head_title}>{title}</h3>
                  <hr class={styles.footer_strength_head_titleHr} />
                </div>
                <span class={styles.footer_strength_description}>
                  {description}
                </span>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section class={styles.footer_bottom}>
        <span class={styles.footer_bottom_text}>
          {new Date().getFullYear()} Compoundfolio™. All rights reserved.
        </span>
        <a href="http://linkedin.com/company/compoundfolio">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 5.76471V26.2353C28 26.7033 27.8141 27.1522 27.4831 27.4831C27.1522 27.8141 26.7033 28 26.2353 28H5.76471C5.29668 28 4.84782 27.8141 4.51687 27.4831C4.18592 27.1522 4 26.7033 4 26.2353V5.76471C4 5.29668 4.18592 4.84782 4.51687 4.51687C4.84782 4.18592 5.29668 4 5.76471 4H26.2353C26.7033 4 27.1522 4.18592 27.4831 4.51687C27.8141 4.84782 28 5.29668 28 5.76471V5.76471ZM11.0588 13.1765H7.52941V24.4706H11.0588V13.1765ZM11.3765 9.29412C11.3783 9.02715 11.3276 8.76242 11.2271 8.51506C11.1267 8.2677 10.9785 8.04255 10.791 7.85246C10.6036 7.66237 10.3805 7.51107 10.1346 7.4072C9.88861 7.30332 9.62462 7.24891 9.35765 7.24706H9.29412C8.7512 7.24706 8.23053 7.46273 7.84663 7.84663C7.46273 8.23053 7.24706 8.7512 7.24706 9.29412C7.24706 9.83703 7.46273 10.3577 7.84663 10.7416C8.23053 11.1255 8.7512 11.3412 9.29412 11.3412V11.3412C9.56111 11.3477 9.82678 11.3016 10.0759 11.2055C10.3251 11.1094 10.5529 10.9651 10.7463 10.7809C10.9396 10.5967 11.0948 10.3762 11.203 10.132C11.3111 9.88776 11.3701 9.62464 11.3765 9.35765V9.29412ZM24.4706 17.6094C24.4706 14.2141 22.3106 12.8941 20.1647 12.8941C19.4621 12.8589 18.7625 13.0086 18.1358 13.3281C17.5091 13.6477 16.9771 14.126 16.5929 14.7153H16.4941V13.1765H13.1765V24.4706H16.7059V18.4635C16.6549 17.8483 16.8487 17.2378 17.2452 16.7646C17.6417 16.2915 18.2089 15.9939 18.8235 15.9365H18.9576C20.08 15.9365 20.9129 16.6424 20.9129 18.4212V24.4706H24.4424L24.4706 17.6094Z"
              fill="white"
              fill-opacity="0.51"
            />
          </svg>
        </a>
        <span class={styles.footer_bottom_text}>
          {/* TODO: Copy on click */}
          compaundfolio.support@gmail.com
        </span>
      </section>
    </footer>
  );
});
