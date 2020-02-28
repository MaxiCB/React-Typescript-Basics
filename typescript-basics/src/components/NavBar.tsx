import * as React from "react";
// Ant Design
import { Input, Layout } from "antd";

interface Props {
    setSearchText: Function
}

const { Header } = Layout;
const { Search } = Input;

const NavBar: React.FunctionComponent<Props> = props => {
  return (
    <Header>
      <Search
        className="nav-search"
        placeholder="Search for a mission!"
        onSearch={value => {console.log(value); props.setSearchText(value)}}
      />
      <h2 className="navbar-title">SpaceX Explorer</h2>
    </Header>
  );
};

export default NavBar;
