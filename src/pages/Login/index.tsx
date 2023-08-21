import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { setLocalStorage } from "@/utils/publicFn";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";

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
      navigate("/home");
    }, 200);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-top">Login Blogs</div>
        <div className="login-form">
          <Form
            name="basic"
            size="large"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            style={{
              minWidth: 280,
              maxWidth: "75vw",
            }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Account"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 0, span: 16 }}
            >
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
