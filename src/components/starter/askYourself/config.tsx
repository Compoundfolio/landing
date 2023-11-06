import Excel from "../../../../public/images/excelDark.png?jsx";
import Brokerages from "../../../../public/images/brokerages.png?jsx";
import Competitors from "../../../../public/images/competitors.png?jsx";
import styles from "./askYourself.module.css";

export const COMPETITORS_DESTROY = [
  {
    title: "Spreadsheets",
    weaknesses: [
      "Time consuming",
      "Difficult to manage",
      "High risk of human error",
      "Hard to automate",
      "Google spies your data",
    ],
    imgPreview: (
      <Excel
        decoding="async"
        loading="eager"
        alt="Excel image"
        class={styles.ask__item_competitorImage}
      />
    ),
  },
  {
    title: "Brokerages",
    weaknesses: [
      "Poor functionality",
      "Not customizable user interface",
      "Impossible to set and track financial goals progress",
      "Brokerages not interested to provide you tools \n for your investments tracking - aware investors pay less commissions",
    ],
    imgPreview: (
      <Brokerages
        decoding="async"
        loading="eager"
        alt="Brokerages image"
        class={styles.ask__item_competitorImage}
      />
    ),
  },
  {
    title: "Other tracking apps",
    weaknesses: [
      "Not customizable user interface",
      "Bad investment data visualization",
      "It's uncomfortable to manage multiple portfolios",
      "Only stocks and ETFs tracking",
      "Lack of app developers and users communication",
    ],
    imgPreview: (
      <Competitors
        decoding="async"
        loading="eager"
        alt="Competitors image"
        class={styles.ask__item_competitorImage}
      />
    ),
  },
];
