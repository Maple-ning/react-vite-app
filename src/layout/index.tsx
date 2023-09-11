import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./topMenu";
const { Content } = Layout;
import "@/assets/styles/layout.scss";

function LayoutContainer() {
  return (
    <Layout className="layout-container">
      <Header />
      <Content className="layout-content-main" id="layout-content">
        <Outlet />
      </Content>
      <div className="bg"></div>
    </Layout>
  );
}

export default LayoutContainer;
