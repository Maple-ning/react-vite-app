import { Layout } from 'antd';
import { Outlet } from "react-router-dom";
import Header from "./topMenu";
import Footer from "./Footer";
const { Content } = Layout;
import "@/assets/styles/layout.scss";


function LayoutContainer() {
    return (
        <Layout className="layout-container">
            <Layout>
                <Layout className="layout-content-wrap">
                    <Header />
                    <Content>
                        <Outlet />
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </Layout>
    );
}

export default LayoutContainer;
