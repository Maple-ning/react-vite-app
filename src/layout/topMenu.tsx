import React, { useEffect,useMemo, useState } from 'react';
import { Layout } from 'antd';
import { useStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Affix } from 'antd';
import Breadcrumb from "@/components/Breadcrumb";

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
        <Breadcrumb/>

        <Button type="text" onClick={logout}>退出登录</Button>
      </Header>
    </Affix>
  )
}

export default topMenu;