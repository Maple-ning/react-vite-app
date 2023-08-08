import Aside from "./aside";
import RightContent from "./rightContent";
import "@/assets/styles/layout.scss";
import { Layout } from 'antd';

function LayoutIndex() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Aside/>
            <RightContent/>
        </Layout>
    );
}

export default LayoutIndex;
