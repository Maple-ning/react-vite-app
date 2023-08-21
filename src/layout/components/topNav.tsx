import React from 'react';
import MenuList from "./menuList";
import RightSetting from "./rightSetting";
import "../style/topMenu.scss";

const topNav: React.FC = () => {

  return (
    <div className="top-nav">
      <div className="nav-list">
        <MenuList />
        <RightSetting />
      </div>
    </div>
  )
}

export default topNav;