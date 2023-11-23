import { component$, useStyles$ } from "@builder.io/qwik";
import { FAQ_LIST } from "./config";
import styles from "./faq.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <div class="flex gap-32px relative screenViewContentMaxWidth container">
        <div class="flex flex-col">
          <h2 class="faq_title">Frequently Asked Questions</h2>
          <svg
            class="faq_wtfIcon"
            width="748"
            height="794"
            viewBox="0 0 748 794"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_848_10116)">
              <path
                d="M211.134 429.52C205.01 429.52 201.838 422.21 206.023 417.738L403.496 206.654C408.487 201.319 417.287 206.235 415.36 213.282L376.418 355.736C375.201 360.189 378.553 364.581 383.17 364.581H536.866C542.99 364.581 546.162 371.891 541.978 376.364L344.504 587.448C339.513 592.782 330.713 587.866 332.64 580.82L371.582 438.366C372.799 433.912 369.447 429.52 364.83 429.52H211.134Z"
                fill="#FFD391"
              />
            </g>
            <g filter="url(#filter1_i_848_10116)">
              <path
                d="M332.346 399.571L413.014 346.039L417.578 330.421L404.678 310.754L358.669 305.748L337.394 320.264L331.66 340.052L284.236 334.892L294.688 298.071L346.856 262.923L434.626 272.473L468.75 324.171L456.42 365.086L374.614 419.211L366.54 447.338L319.824 442.255L332.346 399.571ZM301.03 493.21L306.88 472.36L326.231 459.067L350.297 461.686L361.382 478.29L355.533 499.14L335.827 512.394L311.761 509.775L301.03 493.21Z"
                fill="#111F28"
              />
            </g>
            <path
              d="M332.346 399.571L332.07 399.155L331.918 399.256L331.867 399.431L332.346 399.571ZM413.014 346.039L413.29 346.455L413.443 346.354L413.494 346.179L413.014 346.039ZM417.578 330.421L418.058 330.561L418.123 330.34L417.996 330.147L417.578 330.421ZM404.678 310.754L405.096 310.48L404.966 310.283L404.732 310.257L404.678 310.754ZM358.669 305.748L358.723 305.251L358.54 305.231L358.387 305.335L358.669 305.748ZM337.394 320.264L337.112 319.851L336.964 319.952L336.914 320.125L337.394 320.264ZM331.66 340.052L331.606 340.549L332.024 340.595L332.14 340.191L331.66 340.052ZM284.236 334.892L283.755 334.756L283.593 335.325L284.182 335.389L284.236 334.892ZM294.688 298.071L294.409 297.656L294.257 297.758L294.207 297.934L294.688 298.071ZM346.856 262.923L346.91 262.426L346.728 262.406L346.577 262.508L346.856 262.923ZM434.626 272.473L435.043 272.197L434.914 272.001L434.68 271.976L434.626 272.473ZM468.75 324.171L469.229 324.315L469.297 324.091L469.168 323.896L468.75 324.171ZM456.42 365.086L456.696 365.503L456.847 365.403L456.899 365.23L456.42 365.086ZM374.614 419.211L374.338 418.794L374.184 418.895L374.133 419.073L374.614 419.211ZM366.54 447.338L366.486 447.835L366.905 447.881L367.021 447.476L366.54 447.338ZM319.824 442.255L319.344 442.115L319.176 442.688L319.77 442.752L319.824 442.255ZM301.03 493.21L300.549 493.074L300.488 493.292L300.611 493.481L301.03 493.21ZM306.88 472.36L306.597 471.948L306.447 472.05L306.398 472.225L306.88 472.36ZM326.231 459.067L326.285 458.57L326.101 458.55L325.948 458.655L326.231 459.067ZM350.297 461.686L350.713 461.408L350.583 461.214L350.351 461.188L350.297 461.686ZM361.382 478.29L361.864 478.425L361.926 478.204L361.798 478.012L361.382 478.29ZM355.533 499.14L355.812 499.554L355.964 499.452L356.014 499.275L355.533 499.14ZM335.827 512.394L335.773 512.891L335.955 512.911L336.106 512.809L335.827 512.394ZM311.761 509.775L311.342 510.047L311.471 510.247L311.707 510.273L311.761 509.775ZM332.623 399.988L413.29 346.455L412.738 345.622L332.07 399.155L332.623 399.988ZM413.494 346.179L418.058 330.561L417.098 330.281L412.534 345.899L413.494 346.179ZM417.996 330.147L405.096 310.48L404.26 311.028L417.16 330.695L417.996 330.147ZM404.732 310.257L358.723 305.251L358.615 306.245L404.624 311.251L404.732 310.257ZM358.387 305.335L337.112 319.851L337.676 320.677L358.951 306.161L358.387 305.335ZM336.914 320.125L331.18 339.913L332.14 340.191L337.874 320.403L336.914 320.125ZM331.714 339.555L284.29 334.395L284.182 335.389L331.606 340.549L331.714 339.555ZM284.717 335.029L295.169 298.207L294.207 297.934L283.755 334.756L284.717 335.029ZM294.968 298.485L347.135 263.338L346.577 262.508L294.409 297.656L294.968 298.485ZM346.802 263.42L434.572 272.97L434.68 271.976L346.91 262.426L346.802 263.42ZM434.209 272.748L468.333 324.447L469.168 323.896L435.043 272.197L434.209 272.748ZM468.272 324.027L455.942 364.941L456.899 365.23L469.229 324.315L468.272 324.027ZM456.145 364.669L374.338 418.794L374.89 419.628L456.696 365.503L456.145 364.669ZM374.133 419.073L366.06 447.2L367.021 447.476L375.095 419.349L374.133 419.073ZM366.594 446.841L319.878 441.758L319.77 442.752L366.486 447.835L366.594 446.841ZM320.304 442.396L332.826 399.712L331.867 399.431L319.344 442.115L320.304 442.396ZM301.512 493.345L307.361 472.495L306.398 472.225L300.549 493.074L301.512 493.345ZM307.163 472.772L326.514 459.479L325.948 458.655L306.597 471.948L307.163 472.772ZM326.177 459.564L350.243 462.183L350.351 461.188L326.285 458.57L326.177 459.564ZM349.881 461.963L360.966 478.568L361.798 478.012L350.713 461.408L349.881 461.963ZM360.901 478.155L355.051 499.005L356.014 499.275L361.864 478.425L360.901 478.155ZM355.254 498.725L335.548 511.979L336.106 512.809L355.812 499.554L355.254 498.725ZM335.881 511.897L311.815 509.278L311.707 510.273L335.773 512.891L335.881 511.897ZM312.181 509.504L301.45 492.938L300.611 493.481L311.342 510.047L312.181 509.504Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_f_848_10116"
                x="0.120117"
                y="0.400391"
                width="747.76"
                height="793.301"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="102"
                  result="effect1_foregroundBlur_848_10116"
                />
              </filter>
              <filter
                id="filter1_i_848_10116"
                x="265.753"
                y="257.032"
                width="208.157"
                height="271.453"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.826667 0 0 0 0 0.566667 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_848_10116"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <form class="content">
          {FAQ_LIST.map(({ question, answer }, index) => (
            <article key={index} class="faq_item">
              <input type="radio" id={`${index}`} name="q" class="questions" />
              <label for={`${index}`} class="question">
                <b class="q_head">QUESTION:</b>{" "}
                <span class="q_text">{question}</span>
              </label>
              <div class="answers">
                <b class="q_head">ANSWER:</b>{" "}
                <span class="q_text">{answer}</span>
              </div>
            </article>
          ))}
        </form>
      </div>
      <svg
        class="faq_bg"
        width="1900"
        height="1076"
        viewBox="0 0 1900 1076"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="290.372"
          width="1.37245"
          height="1900"
          transform="rotate(-90 0 290.372)"
          fill="#FFD391"
          fill-opacity="0.24"
        />
        <rect
          y="468.372"
          width="1.37245"
          height="1900"
          transform="rotate(-90 0 468.372)"
          fill="#FFD391"
          fill-opacity="0.24"
        />
        <rect
          y="674.372"
          width="1.37245"
          height="1900"
          transform="rotate(-90 0 674.372)"
          fill="#4C596B"
          fill-opacity="0.19"
        />
        <rect
          x="366.146"
          width="0.989583"
          height="1076"
          fill="url(#paint0_linear_854_10243)"
          fill-opacity="0.1"
        />
        <rect
          x="765.938"
          width="0.989583"
          height="1076"
          fill="url(#paint1_linear_854_10243)"
          fill-opacity="0.1"
        />
        <rect
          x="1143.96"
          width="0.989583"
          height="1076"
          fill="url(#paint2_linear_854_10243)"
          fill-opacity="0.1"
        />
        <rect
          x="1537.81"
          width="0.989583"
          height="1076"
          fill="url(#paint3_linear_854_10243)"
          fill-opacity="0.1"
        />
        <defs>
          <linearGradient
            id="paint0_linear_854_10243"
            x1="366.641"
            y1="0"
            x2="366.641"
            y2="1076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.223958" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_854_10243"
            x1="766.432"
            y1="0"
            x2="766.432"
            y2="1076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.223958" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_854_10243"
            x1="1144.45"
            y1="0"
            x2="1144.45"
            y2="1076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.223958" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_854_10243"
            x1="1538.31"
            y1="0"
            x2="1538.31"
            y2="1076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.223958" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
});
