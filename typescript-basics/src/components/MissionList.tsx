import React from "react";
// Components
import MissionCard from "./MissionCard";
// Ant Design
import { List } from "antd";

interface Props {
    apiData: Array<Object>
}

const MissionList: React.FunctionComponent<Props> = props => {
  return (
    <List
      className="mission-list-content"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 6
      }}
      dataSource={props.apiData}
      renderItem={item => (
        <List.Item>
          <MissionCard launch={item} />
        </List.Item>
      )}
    />
  );
};

export default MissionList;
