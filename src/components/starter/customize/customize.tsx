import { component$ } from "@builder.io/qwik";
import FeatureWrapper from "~/components/core/featureWrapper/featureWrapper";
import style from "./customize.module.css";

export default component$(() => {
  return (
    <FeatureWrapper
      shortTitle="Customization"
      title="Customize the platform by your own"
      description={`Hide / show / move parts of the user interface, \n choose the way of big data representation from multiple options`}
      replacesText="Sheets, Portsedio, Simply Safe Dividends, The Dividend Tracker"
      ctaButtonTitle="Start to manage"
    >
      <svg
        class={style.customize_previewSvg}
        width="376"
        height="378"
        viewBox="0 0 376 378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_854_10278)">
          <path
            d="M165.991 117.002C167.275 120.973 171.282 123.352 175.401 122.677C178.81 122.121 182.272 121.837 185.757 121.837C217.768 121.837 244.358 145.491 248.968 176.235C249.584 180.342 253.105 183.384 257.253 183.384H294.608C299.585 183.384 303.444 179.07 302.947 174.117C301.491 159.576 297.324 145.302 290.69 132.282C282.293 115.8 269.948 101.342 254.981 90.4709C240.014 79.5995 222.449 72.3203 204.18 69.4263C189.793 67.1479 174.981 67.5917 160.742 70.6751C155.877 71.7285 152.965 76.7233 154.498 81.4637L159.233 96.099L165.991 117.002Z"
            fill="#3CC8C8"
          />
          <path
            d="M230.824 294.561C245.181 288.613 258.041 280.02 269.031 269.03C280.02 258.035 288.613 245.181 294.561 230.823C299.017 220.064 301.828 208.856 302.959 197.38C303.444 192.427 299.585 188.125 294.608 188.125H257.26C253.093 188.125 249.584 191.184 248.962 195.297C244.808 222.905 222.923 244.796 195.315 248.956C191.196 249.578 188.143 253.093 188.143 257.253L188.149 282.772V294.608C188.149 299.585 192.457 303.444 197.404 302.953C208.879 301.822 220.076 299.011 230.824 294.561Z"
            fill="#0F6F72"
          />
          <path
            d="M118.481 210.122L82.9606 221.674C78.2262 223.213 75.9004 228.498 77.8947 233.06C86.257 252.199 99.4601 268.634 116.557 281.05C133.643 293.46 153.356 300.929 174.128 302.959C179.082 303.444 183.39 299.597 183.39 294.62V257.259C183.39 253.111 180.354 249.584 176.247 248.974C155.634 245.909 137.856 232.995 128.571 214.354C126.719 210.637 122.428 208.838 118.481 210.122Z"
            fill="#FFD391"
          />
          <path
            d="M126.542 145.603L96.3479 123.636C92.3236 120.706 86.6659 121.925 84.1567 126.222C76.7769 138.839 71.7465 152.829 69.4503 167.258C67.1541 181.692 67.598 196.552 70.699 210.832C71.7524 215.697 76.7532 218.609 81.4876 217.076L117.014 205.559C120.985 204.275 123.358 200.268 122.683 196.149C122.121 192.729 121.843 189.255 121.843 185.757C121.843 175.359 124.311 165.322 129.033 156.268C130.957 152.587 129.903 148.053 126.542 145.603Z"
            fill="#D9D9D9"
          />
          <path
            d="M138.508 77.8712C122.926 84.6652 109.137 94.6785 97.8449 107.379C94.5486 111.089 95.1404 116.83 99.1528 119.753L129.376 141.768C132.744 144.224 137.378 143.798 140.313 140.839C145.225 135.886 150.936 131.737 157.144 128.613C160.866 126.737 162.701 122.47 161.417 118.505L149.865 82.9548C148.332 78.2263 143.059 75.8887 138.508 77.8712Z"
            fill="#18FEFE"
          />
        </g>
        <circle
          cx="188"
          cy="189"
          r="177.25"
          stroke="#95A8AF"
          stroke-opacity="0.51"
          stroke-width="1.5"
        />
        <g filter="url(#filter0_d_854_10278)">
          <path
            d="M359 173.5L368 169V178L359 173.5Z"
            fill="url(#paint0_linear_854_10278)"
          />
        </g>
        <g filter="url(#filter1_d_854_10278)">
          <path
            d="M193 361L197.5 370L188.5 370L193 361Z"
            fill="url(#paint1_linear_854_10278)"
          />
        </g>
        <g filter="url(#filter2_d_854_10278)">
          <path
            d="M17 173L8 168.5V177.5L17 173Z"
            fill="url(#paint2_linear_854_10278)"
          />
        </g>
        <g filter="url(#filter3_d_854_10278)">
          <path
            d="M197 17L201.5 8L192.5 8L197 17Z"
            fill="url(#paint3_linear_854_10278)"
          />
        </g>
        <g filter="url(#filter4_d_854_10278)">
          <g filter="url(#filter5_d_854_10278)">
            <rect
              x="105"
              y="106"
              width="162"
              height="156"
              rx="8"
              fill="#111F28"
            />
            <rect
              x="105.5"
              y="106.5"
              width="161"
              height="155"
              rx="7.5"
              stroke="#0F6F72"
              stroke-opacity="0.5"
            />
          </g>
          <path
            d="M170 140.5H202C210.56 140.5 217.5 147.44 217.5 156V188C217.5 196.56 210.56 203.5 202 203.5H170C161.44 203.5 154.5 196.56 154.5 188V156C154.5 147.44 161.44 140.5 170 140.5Z"
            stroke="white"
          />
          <path
            d="M181.602 182.663C181.34 183.641 180.334 184.221 179.356 183.959V183.959C178.379 183.696 177.799 182.692 178.061 181.714L178.341 180.667C178.731 179.21 177.934 177.716 176.6 177.013C176.14 176.77 175.689 176.509 175.249 176.231C173.973 175.426 172.278 175.482 171.211 176.549L170.445 177.315C169.729 178.032 168.567 178.032 167.851 177.316V177.316C167.135 176.599 167.135 175.438 167.851 174.722L168.617 173.957C169.685 172.889 169.74 171.194 168.934 169.917C167.888 168.259 167.089 166.454 166.564 164.561C166.294 163.586 166.962 162.629 167.957 162.448V162.448C168.955 162.266 169.9 162.933 170.191 163.904C172.227 170.707 178.534 175.667 186 175.667C193.465 175.667 199.773 170.707 201.809 163.903C202.1 162.932 203.045 162.265 204.042 162.447V162.447C205.038 162.628 205.706 163.585 205.436 164.56C204.912 166.453 204.113 168.259 203.066 169.918C202.261 171.194 202.317 172.889 203.384 173.956L204.149 174.722C204.866 175.438 204.866 176.599 204.149 177.316V177.316C203.433 178.032 202.271 178.032 201.555 177.315L200.789 176.549C199.722 175.482 198.027 175.426 196.751 176.231C196.311 176.509 195.86 176.77 195.4 177.013C194.066 177.716 193.269 179.21 193.659 180.667L193.939 181.716C194.201 182.693 193.621 183.698 192.643 183.96V183.96C191.665 184.222 190.661 183.641 190.399 182.664L190.117 181.615C189.727 180.158 188.29 179.262 186.783 179.32C186.261 179.34 185.738 179.34 185.217 179.32C183.71 179.262 182.273 180.158 181.883 181.614L181.602 182.663Z"
            fill="white"
          />
          <path
            d="M176.498 216.2H177.898V226H176.498V216.2ZM170.87 226H169.47V216.2H170.87V226ZM176.624 221.632H170.73V220.414H176.624V221.632ZM180.831 226V216.2H182.231V226H180.831ZM185.165 226V216.2H189.295C190.341 216.2 191.26 216.405 192.053 216.816C192.856 217.227 193.477 217.801 193.915 218.538C194.363 219.275 194.587 220.129 194.587 221.1C194.587 222.071 194.363 222.925 193.915 223.662C193.477 224.399 192.856 224.973 192.053 225.384C191.26 225.795 190.341 226 189.295 226H185.165ZM186.565 224.782H189.211C190.023 224.782 190.723 224.628 191.311 224.32C191.909 224.012 192.371 223.583 192.697 223.032C193.024 222.472 193.187 221.828 193.187 221.1C193.187 220.363 193.024 219.719 192.697 219.168C192.371 218.617 191.909 218.188 191.311 217.88C190.723 217.572 190.023 217.418 189.211 217.418H186.565V224.782ZM198.006 220.428H203.046V221.618H198.006V220.428ZM198.132 224.782H203.844V226H196.732V216.2H203.648V217.418H198.132V224.782Z"
            fill="#4C596B"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_854_10278"
            x="351"
            y="161"
            width="25"
            height="25"
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
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_854_10278"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_854_10278"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_854_10278"
            x="180.5"
            y="353"
            width="25"
            height="25"
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
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_854_10278"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_854_10278"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_854_10278"
            x="0"
            y="160.5"
            width="25"
            height="25"
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
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_854_10278"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_854_10278"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_854_10278"
            x="184.5"
            y="0"
            width="25"
            height="25"
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
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_854_10278"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_854_10278"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_854_10278"
            x="101"
            y="102"
            width="170"
            height="164"
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
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_854_10278"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_854_10278"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_854_10278"
            x="100"
            y="101"
            width="188"
            height="182"
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
            <feMorphology
              radius="5"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_854_10278"
            />
            <feOffset dx="8" dy="8" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_854_10278"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_854_10278"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_854_10278"
            x1="368"
            y1="178"
            x2="358"
            y2="178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#9B9B9B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_854_10278"
            x1="188.5"
            y1="370"
            x2="188.5"
            y2="360"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#9B9B9B" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_854_10278"
            x1="8"
            y1="177.5"
            x2="18"
            y2="177.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#9B9B9B" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_854_10278"
            x1="192.5"
            y1="8"
            x2="192.5"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#9B9B9B" />
          </linearGradient>
          <clipPath id="clip0_854_10278">
            <rect
              width="235"
              height="235"
              fill="white"
              transform="translate(68 68)"
            />
          </clipPath>
        </defs>
      </svg>
    </FeatureWrapper>
  );
});
