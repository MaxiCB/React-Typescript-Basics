import * as React from "react";
// Ant Design
import { Card } from "antd";

interface Props {
  launch: any;
}

const { Meta } = Card;

const MissionCard: React.FunctionComponent<Props> = props => {

  const launchImage = props.launch.links.mission_patch_small;
  const missionName = props.launch.mission_name;
  const missionLink = props.launch.links.article_link;

  return (
    <Card cover={<img src={launchImage} alt={missionName} />}>
      <Meta
        title={missionName}
        description={
          <a href={missionLink} rel="noopener noreferrer" target="_blank">
            Mission Link
          </a>
        }
      ></Meta>
    </Card>
  );
};

export default MissionCard;
