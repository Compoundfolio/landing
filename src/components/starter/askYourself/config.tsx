import Excel from "../../../../public/images/excelDark.avif?jsx";
import Brokerages from "../../../../public/images/brokerages.png?jsx";
import Competitors from "../../../../public/images/competitors.png?jsx";
import styles from "./askYourself.module.css";

export const COMPETITORS_DESTROY = [
  {
    title: "Spreadsheets",
    weaknesses: ["Time consuming", "Human errors", "Hard to automate"],
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
    title: "Brokerage apps",
    weaknesses: [
      "Poor functionality",
      "Not customizable",
      "Impossible to set and track financial goals progress",
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
      "Hard to manage several portfolios",
      "Don't support some of my assets",
      "Too focused on dividends",
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
