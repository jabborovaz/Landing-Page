import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.min.css";
import { Button, Form, Input } from "antd";

function OwnForm(props) {
  const { onFinish, onFinishFailed } = props;
  return (
    <div>
      <div className="flex flex-row justify-center mt-20">
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            wrapperCol={{
              offset: 1,
              span: 23,
            }}
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            wrapperCol={{
              offset: 1,
              span: 23,
            }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 13,
              span: 11,
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 13,
              span: 11,
            }}
          >
            <Button type="link">Sign up</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default OwnForm;
