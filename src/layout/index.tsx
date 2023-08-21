import { Layout } from 'antd';
import { Outlet } from "react-router-dom";
import Header from "./topMenu";
import Footer from "./Footer";
const { Content } = Layout;
import "@/assets/styles/layout.scss";


function LayoutContainer() {
    return (
        <Layout className="layout-container">
            <Header />
            <Content className="layout-content-main">
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    );
}

export default LayoutContainer;
