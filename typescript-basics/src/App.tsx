import * as React from "react";
// Axios
import axios from "axios";
// Ant Design
import { Layout } from "antd";
import MissionList from "./components/MissionList";
import NavBar from "./components/NavBar";

const { Content } = Layout;

interface Props {}

const App: React.FunctionComponent<Props> = props => {
  const [apiData, setAPIData] = React.useState([]);
  // Temporary state for search functionality
  // Need to move this into some form of state management
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then(res => setAPIData(res.data))
      .catch(err => console.log(err));
  }, []);

  const filterItems = (item: any, index: number, array: Array<Object>) => {
    if (searchText !== "") {
      return item.mission_name === searchText
    } else {
      return apiData
    }
  };

  let test = apiData.filter(filterItems);
  console.log(test);

  return (
    <div className="App">
      <Layout>
        <NavBar setSearchText={setSearchText} />
        <Content className="app-content">
          <h1>{searchText}</h1>
          <MissionList apiData={test} />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
