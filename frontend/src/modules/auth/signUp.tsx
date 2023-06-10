import type { CascaderProps } from 'antd';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';
import router from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IAuthSignUp } from './model';
import Image from "next/image"
import Signin from './Signin';


interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}



export const SignUp: React.FC = () => {

    const [signIn, setSignIn] = useState<any>("signIn");
    const [loading, setLoading] = useState<boolean>(false);


    const onFinish = (values: any) => {
        setLoading(true);

        try {
            fetch(`http://localhost:5000/api/user/Register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }).then(() => {
                setLoading(false);

                toast.success("Registered Successfully");
                setSignIn("signIn")
            })
        } catch (error) {
            toast.error("Error occurred!");

        }

    };

    // const handleSubmit = async (
    //     values: IAuthSignUp,
    //     { setSubmitting }: FormikHelpers<IAuth>
    //   ) => {
    //     try {
    //       await axios
    //         .post(`${process.env.AUTH_URL}/Register`, values)
    //         .then(() => {
    //           toast.success("Registered Successfully");
    //         })
    //         .then(() => {
    //           router.push("/signIn");
    //         });
    //     } catch (error) {
    //       console.error(error);
    //     }

    //     setSubmitting(false);
    //   };


    return (
        <div className='flex justify-center items-center m-0 h-screen'>

            <div className="flex  justify-center space-x-4 bg-slate-100 rounded-md pl-5  h-[29rem]">
                <div>
                    <div className='flex justify-around  items-center bg-white  rounded-md my-4 py-2'>
                        <header className={signIn == "signUp" ? 'text-center font-weight-600  font-bold text-[1rem] pointer-events-auto border-b-4 border-blue-400' : "text-center font-weight-600  font-bold text-[1rem]"} onClick={() => setSignIn("signUp")}>Register</header>
                        <header className={signIn == "signIn" ? 'text-center font-weight-600  font-bold text-[1rem] pointer-events-auto border-b-4 border-blue-400' : "text-center font-weight-600  font-bold text-[1rem]"} onClick={() => setSignIn("signIn")}>Login</header>

                    </div>

                    <div className='px-5 py-15'>



                        {
                            signIn === "signIn" ? (
                                <Signin />

                            ) : (
                                <Form
                                    name="register"
                                    onFinish={onFinish}
                                    initialValues={{
                                        firistName: "", lastName: "", email: "",
                                        mobile: "", password: ""
                                    }}
                                    style={{ maxWidth: 800 }}
                                    scrollToFirstError
                                >


                                    <Form.Item
                                        name="firstName"
                                        label="FirstName"
                                        tooltip="What do you want others to call you?"
                                        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="lastName"
                                        label="LastNname"
                                        tooltip="What do you want others to call you?"
                                        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="mobile"
                                        label="Mobile"
                                        tooltip="What do you want others to call you?"
                                        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item >
                                        <Button type="primary" htmlType="submit" className=" bg-blue-500 w-[20rem]"  >
                                            {loading ? "Loading..." : "Register"}
                                        </Button>
                                    </Form.Item>
                                </Form >
                            )
                        }
                    </div>


                </div>

                <div className='w-[310px] h-[350px]'>
                    <Image src="/../public/images/Register.jpg" alt="Image" width={310} height={200} />
                </div>

            </div>
        </div>



    );
};

