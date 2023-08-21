import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import "../style/topMenu.scss";
import { useLocalStorage } from "@/hooks";

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/home',
  },
  {
    label: 'Note',
    key: '/note',
  },
  {
    label: (
      <a href="https://github.com/Maple-ning" target="_top" rel="noopener noreferrer">
        GitHub
      </a>
    ),
    key: '/github',
  },
  {
    label: 'About Me',
    key: '/about',
  },
];

const menuList: React.FC = () => {
  const navigate = useNavigate();
  const [getLocalSelect, setLocalSelect] = useLocalStorage("selectKey");
  const [selectKey, setSelectKey] = useState(getLocalSelect() || "/home");

  const onClick: MenuProps['onClick'] = (e) => {
    if(e.key === '/github') return false;
    navigate(e.key);
    setSelectKey(e.key);
  };
  useEffect(() => {
    setLocalSelect(selectKey);
  }, [setLocalSelect, selectKey])
  return (
    <div className="menu-list">
      <Menu onClick={onClick} selectedKeys={[selectKey]} mode="horizontal" items={items} style={{ background: "transparent", width: 500 }} />
    </div>
  );
}

export default menuList;
