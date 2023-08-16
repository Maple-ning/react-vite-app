import React, { useState , useEffect } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Affix } from 'antd';
import { useStyle } from "./style";
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from "@/hooks";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '/home', <PieChartOutlined />),
  getItem('Config', '/config', <DesktopOutlined />),
];


const sideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [getLocalSelect, setLocalSelect, clearLocalSelect] = useLocalStorage("selectKey");
  const [selectKey, setSelectKey] = useState(getLocalSelect() || ["/home"]);
  const { styles } = useStyle();
  const navigate = useNavigate();
  const handleMenuClick = (e: any) => {
    navigate(e.key, { replace: true });
    setSelectKey([e.key]);
  }
  useEffect(()=>{
    setLocalSelect(selectKey);
  },[setLocalSelect,selectKey])
  return (
    <Affix className={styles.column}>
      <Sider width={200} style={{ height: "100vh" }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={selectKey} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
    </Affix>
  )
}

export default sideMenu;