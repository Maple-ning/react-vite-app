import React from 'react';
import { Layout } from 'antd';
import { useStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Breadcrumb, Affix } from 'antd';

interface LayoutHeaderProps {
  children: JSX.Element | null
}

const { Header } = Layout;

const topMenu: React.FC = ({ children }: LayoutHeaderProps) => {
  const navigate = useNavigate();
  const { styles } = useStyle();
  const logout = () => {
    setTimeout(() => {
      navigate('/login')
    }, 200);
  }
  return (
    <Affix>
      <Header className={styles.header}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {children}
        <Button type="text" onClick={logout}>退出登录</Button>
      </Header>
    </Affix>
  )
}

export default topMenu;