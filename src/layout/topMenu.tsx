import React from 'react';
import { Layout } from 'antd';
import ItemLogo from "./components/itemLogo";
import TopNav from "./components/topNav";
import "./style/topMenu.scss";

const { Header } = Layout;

const topMenu: React.FC = () => {

  return (
    <Header className="blogs-header">
      <div className="blogs-header-bar">
        <ItemLogo/>
        <TopNav />
      </div>
    </Header>
  )
}

export default topMenu;