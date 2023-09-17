import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import router from 'next/router';
import { toast } from 'react-toastify';
import { IAuthSignIn } from './model';
import Link from 'next/link';
import Cookies from "universal-cookie"
import axios from 'axios';


const SignIn: React.FC = () => {

  const cookies = new Cookies();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (user: IAuthSignIn) => {
    setLoading(true);
    //   try {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/user/login`
    //       , {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(user),


    //       });
    //     setLoading(false);
    //     const data = await res.json();
    //     cookies.set("userId", data?._id)

    //     router.push("/");
    //     toast.success("Login Successfully");
    //   } catch (err) {
    //     toast.error("Error Occurred!");
    //   }
    // };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ROUTE}/user/login`,
        user,
        { withCredentials: true }
      );

      setLoading(false);

      const data = response.data;
      cookies.set('userId', data?._id);
      router.push('/');
      toast.success('Login Successfully');
    } catch (err) {
      toast.error('Error Occurred!');
    }
  };

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
