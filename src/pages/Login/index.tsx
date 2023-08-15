import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import { setLocalStorage } from "@/utils/publicFn";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from "./index.module.scss";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    setLocalStorage("learn-token", "test");
    setTimeout(() => {
      navigate('/test')
    }, 200);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.loginView}>
      <Form
        name="basic"
        size="large"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        style={{
          minWidth: 360,
          maxWidth: '75vw',
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码" />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 0, span: 16 }}
        >
          <Checkbox>自动登录</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;