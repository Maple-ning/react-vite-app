import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Result status="404" title="404" subTitle="对不起，此页面不存在." extra={
        <Button type="primary" onClick={() => navigate("/home")}>Back Home</Button>
      } />
    </div>

  )
};

export default NotFoundPage;