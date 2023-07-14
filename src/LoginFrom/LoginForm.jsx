// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

const LoginForm = ({ onSubmit }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    // <div style={{
    //      border: "1px solid black",
    //      paddingTop:'16px',
    //      display:'flex',
    //      alignItems:'center',
    //      justifyContent:'center'
    //      }}>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",

        padding: "40px",
        margin: "auto",
        border: "1px solid #cccc",
        borderRadius: "8px",
        marginTop: "40px",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <h1 style={{ textAlign: "center" }}>LOGIN FORM</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={username}
          // style={{ backgroundColor: "transparent" }}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={async () => {
              console.log("submit");
              onSubmit(username, password);
            }}
          >
            Submit
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="reset">
            Reset
          </Button>
        </Form.Item>
      </div>
    </Form>
    // </div>
  );
};
export default LoginForm;
