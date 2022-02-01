import { WrappedImage } from "./Image";

export const AddToSlack = ({ isLocal }: { isLocal: boolean }) => {
  return (
    <a href="https://wordle-admin.0x63problems.dev/slack/install">
      <WrappedImage
        alt="Add to Slack"
        height="40"
        width="139"
        src="https://platform.slack-edge.com/img/add_to_slack@2x.png"
        isLocal={isLocal}
      />
    </a>
  );
};
