import { Layout } from 'antd';
import Header from "./rightHeader";
import Content from "./content";
import Footer from "./Footer";


const rightContent = () => {
  return (
    <Layout>
      <Header/>
      <Content/>
      <Footer/>
    </Layout>
  )
}

export default rightContent;