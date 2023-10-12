
import React, { useState } from 'react';
import { Space } from 'antd';
import ApImage from '@/components/images/image';
import { ICart } from './model';
import { Form, Formik, FormikProps } from 'formik'
import { BsFillPlusSquareFill, BsStarFill } from 'react-icons/bs'
import { ApTextInput } from '@/components/input/TextInput';
import { AiFillMinusSquare, AiTwotoneDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { useCartContext } from './context';


interface IProps {
    cart: ICart;
}


export const Cartlist: React.FC<IProps> = ({ cart }) => {
    const { deleteCart } = useCartContext();
    const cartLabel = cart?.product?.product;
    let [counter, setCounter] = useState(1);

    const handleSubmit = () => {
        console.log()
    }


    return (
        <div>
            <Space className="flex justify-between items-center border-b py-4">
                <Space className="flex gap-4 items-center">
                    <Space className="w-20 h-20">
                        {cart && cartLabel?.images && cartLabel?.images[0] && (
                            <ApImage imgUrl={cartLabel?.images[0].uri}
                                className="w-ful h-full object-contain"
                                alt="cartimage" />
                        )}
                    </Space>
                    <div>
                        <p className="capitalize font-semibold">
                            {cartLabel?.Product_name}
                        </p>
                        <Formik
                            initialValues={{
                                quantity: cartLabel?.quantity
                            }}
                            onSubmit={handleSubmit}
                        >
                            {(props: FormikProps<any>) => (
                                <Form className=" ">

                                    <div className="flex space-x-2 items-center">

                                        <div>
                                            <BsFillPlusSquareFill size={30} onClick={() => setCounter(counter++)} />
                                        </div>
                                        <ApTextInput
                                            type="number"
                                            name="quantity"
                                            className="  rounded-md outline-0 border hover:bg-white w-[3.1rem] "
                                            value={counter}
                                        />

                                        <div><AiFillMinusSquare size={35}
                                            onClick={() => setCounter(counter--)} /></div>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </Space>
                <Space>
                    <p className="p-gray-400 text-lg ">
                        N{cartLabel?.price * counter}.00
                    </p>
                    <div className=''>
                        <AiTwotoneDelete size={20} color="red"
                            onClick={() => deleteCart(cart?._id)} />
                    </div>
                </Space>
            </Space>
        </div>

    );
};

