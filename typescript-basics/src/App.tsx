import * as React from 'react';
// Axios
import axios from 'axios'
// Components
import MissionCard from './components/MissionCard';
// Ant Design
import {List} from 'antd'

interface Props {}

const App: React.FunctionComponent<Props> = (props) => {

  const [apiData, setAPIData] = React.useState([])

  React.useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(res => setAPIData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <List
      style={{margin: '20px'}}
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 4,
      xxl: 6,
    }}
    dataSource={apiData}
    renderItem={item => (
      <List.Item >
        <MissionCard launch={item}/>
      </List.Item>
    )}
  />
    </div>
  );
}

export default App