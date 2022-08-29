import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import React from 'react';
import './login.css';

const login = (props) => {
    let {user , setUser} = props
    console.log(user)
  const onFinish = (values) => {
    setUser(true)
    console.log('Received values of form: ', values);

  };

  return (
    <div className='form'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
      <Link  to={"/"}>
     <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        </Link>
        Or <a href="http://localhost:3000/register">register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
};

export default login;