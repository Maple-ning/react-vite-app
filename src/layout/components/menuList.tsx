import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate,useLocation  } from "react-router-dom";
import "../style/topMenu.scss";
import { useLocalStorage } from "@/hooks";

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '/home',
  },
  {
    label: '文章',
    key: '/article',
  },
  // {
  //   label: (
  //     <a href="https://github.com/Maple-ning" target="_top" rel="noopener noreferrer">
  //       GitHub
  //     </a>
  //   ),
  //   key: '/github',
  // },
  // {
  //   label: 'About Me',
  //   key: '/about',
  // },
];

const menuList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [getLocalSelect, setLocalSelect] = useLocalStorage("selectKey");
  const [selectKey, setSelectKey] = useState(getLocalSelect() || "/home");

  const onClick: MenuProps['onClick'] = (e) => {
    if(e.key === '/github') return false;
    navigate(e.key);
    setSelectKey(e.key);
  };
  useEffect(() => {
    setLocalSelect(selectKey);
  }, [setLocalSelect, selectKey]);
  useEffect(()=>{
    const pathSplit = location.pathname.split('/');
    const path = "/" + pathSplit[1];
    setSelectKey(path);
    
  },[navigate]);
  return (
    <div className="menu-list">
      <Menu onClick={onClick} selectedKeys={[selectKey]} mode="horizontal" items={items} style={{ background: "transparent", width: 500 }} />
    </div>
  );
}

export default menuList;
