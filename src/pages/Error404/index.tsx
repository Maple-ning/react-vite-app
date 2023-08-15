import React from 'react';
import { Button, Result } from 'antd';

const NotFoundPage: React.FC = () => (
  <Result status="404" title="404" subTitle="对不起，此页面不存在." extra={
    <Button type="primary">Back Home</Button>
  } />
)

export default NotFoundPage;