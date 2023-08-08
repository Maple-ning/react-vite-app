import {  Outlet } from "react-router-dom";
import { Layout } from 'antd';

const { Content } = Layout;

const ContentView = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Outlet/>
    </Content>
  )
}

export default ContentView;