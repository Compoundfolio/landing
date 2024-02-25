import {
  partytownSnippet,
  PartytownConfig,
} from "@builder.io/partytown/integration";

/**
 * @public
 * You can pass setting with props
 */
export const QwikPartytown = (props: PartytownConfig) => {
  return <script dangerouslySetInnerHTML={partytownSnippet(props)} />;
};
