import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Layout } from 'antd';
import HomeIcon from "@/assets/icon/homeIcon";
import ArticleIcon from "@/assets/icon/articleIcon";
import AboutMeIcon from "@/assets/icon/AboutMeIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "@/hooks";

const { Header } = Layout;

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '/home',
    icon: <HomeIcon />
  },
  {
    label: '文章',
    key: '/article',
    icon: <ArticleIcon />
  },
  {
    label: '关于',
    key: '/about',
    icon: <AboutMeIcon />
  }
];

const LayoutHeader: React.FC = () => {
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
    <Header className="layout-header">
      <div className="layout-header-bar">
        <div className="item-logo">
          <img src="/maple.svg" style={{ width: "50px", marginRight: "0.5rem" }} />
          枫叶之家
        </div>
        <div className="layout-menu-list">
          <ul className="layout-menu-wrapper">
            {
              items.map((item) => {
                return <li key={item.key} className={selectKey === item.key ? "layout-menu-item-selected layout-menu-item" : "layout-menu-item"} onClick={() => onClick(item)}>
                  {item.icon}
                  <span className="layout-menu-item-content">{item.label}</span>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </Header>
  )
}

export default LayoutHeader;