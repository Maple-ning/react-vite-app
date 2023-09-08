import React from 'react';
import { Layout } from 'antd';
import ItemLogo from "./components/itemLogo";
import MenuList from "./components/menuList";

const { Header } = Layout;

const topMenu: React.FC = () => {

  return (
    <Header className="blogs-header">
      <div className="blogs-header-bar">
        <ItemLogo/>
        <MenuList />
      </div>
    </Header>
  )
}

export default topMenu;