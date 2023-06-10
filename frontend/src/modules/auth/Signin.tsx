import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import router from 'next/router';
import { toast } from 'react-toastify';
import { IAuthSignIn } from './model';
import Link from 'next/link';

const SignIn: React.FC = () => {



  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (user: IAuthSignIn) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }); 
      setLoading(false);
      const data = await res.json();
      localStorage.setItem("currentUser", JSON.stringify(data));
      router.push("/");
      toast.success("Login Successfully");
    } catch (err) {
      toast.error("Error Occurred!");
    }
  };
  // console.log('Received values of form: ', values);


  return (
    <div className='py-10'>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ email: "", password: "" }}
        onFinish={onFinish}


      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" className='w-[20rem] py-2' />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className='py-2'
          />
        </Form.Item>
        <Form.Item >
          <div className='flex justify-between'>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <div>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </div>
          </div>

        </Form.Item>

        <Form.Item className='flex justify-center m-0 align-items '>
          <Button type="primary" htmlType="submit" className=" bg-blue-500 w-[20rem]"  >
            {loading ? "Loading..." : "Log In"}
          </Button>
          <h4 className='text-center'>
            Or
          </h4>
          <h4 className='text-center'>
            <Link href="/signUp" className='text-center'>register now!</Link>

          </h4>
        </Form.Item>
      </Form>

    </div>

  );
};

export default SignIn;
