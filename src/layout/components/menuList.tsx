import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd'
import HomeIcon from "@/assets/icon/homeIcon";
import ArticleIcon from "@/assets/icon/articleIcon";
import AboutMeIcon from "@/assets/icon/AboutMeIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "@/hooks";

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '/home',
    icon:<HomeIcon/>
  },
  {
    label: '文章',
    key: '/article',
    icon:<ArticleIcon/>
  },
  {
    label: '关于',
    key: '/about',
    icon:<AboutMeIcon/>
  }
];

const menuList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [getLocalSelect, setLocalSelect] = useLocalStorage("selectKey");
  const [selectKey, setSelectKey] = useState(getLocalSelect() || "/home");

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === '/github') return false;
    navigate(e.key);
    setSelectKey(e.key);
  };
  useEffect(() => {
    setLocalSelect(selectKey);
  }, [setLocalSelect, selectKey]);
  useEffect(() => {
    const pathSplit = location.pathname.split('/');
    const path = "/" + pathSplit[1];
    setSelectKey(path);

  }, [navigate]);
  return (
    <div className="menu-list">
      <Menu className="top-ant-menu" onClick={onClick} selectedKeys={[selectKey]} mode="horizontal" items={items} />
    </div>
  );
}

export default menuList;
