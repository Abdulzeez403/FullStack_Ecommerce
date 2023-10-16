import React, { useState } from 'react'
import Image from "next/image"
import { BsFillPlusSquareFill, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { TbCurrencyNaira } from 'react-icons/tb'
import { useCartContext } from '../cart/context'
import { Form, Formik, FormikProps } from 'formik'
import { ApTextInput } from '@/components/input'
import { IProduct } from '../Home/models'
import Cookies from 'universal-cookie'
import { AiFillMinusSquare } from 'react-icons/ai'
import { ProductCarousel } from './carousel'


interface IProps {
    productId: IProduct;
}


export const DetailPage: React.FC<IProps> = ({ productId }) => {
    const cookies = new Cookies();
    const userId = cookies.get("userId");
    let [counter, setCounter] = useState(0)

    const { loading, addCart } = useCartContext();
    const handleSubmit = (values: any) => {
        addCart({
            product: {
                _id: productId?._id,
                quantity: values.quantity,
            },
            userId,
        });
    }

    return (
        <div className='  mx-auto my-4'>
            <div className='flex justify-center space-x-6 '>
                <div className='flex space-x-3 bg-white rounded-md border-2 p-6'>

                    <div className='w-[23rem]' >
                        <ProductCarousel product={productId} />
                    </div>

                    <div className='mt-3'>
                        <div className='my-2 bg-orange-600 p-[2px] text-white text-[10px] w-[60px]'>Free Delivery</div>

                        <h4 className='font-bold text-lg my-2'>{productId?.Product_name}</h4>
                        <p className=''>{productId?.description}</p>
                        <div className='my-2'>
                            <div className="flex space-x-1">
                                <BsStarFill size={14} color="Orange" />
                                <BsStarFill size={14} color="Orange" />
                                <BsStarFill size={14} color="Orange" />
                                <BsStarFill size={14} color="Orange" />
                                <BsStarHalf size={14} color="Orange" />
                            </div>
                        </div>

                        <div>
                            <div className="flex  items-center">
                                <TbCurrencyNaira size={21} />
                                <h4 className="font-bold text-[1.2rem]">{productId?.price}</h4>
                            </div>

                            <div className="flex  items-center line-through">
                                <TbCurrencyNaira size={19} color="gray" />
                                <h4 className="font-thin text-md"> 2000</h4>
                            </div>
                        </div>

                        <div >

                            <Formik
                                initialValues={{
                                    quantity: ""
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
                                                type="string"
                                                name="quantity"
                                                className="  rounded-md outline-0 border hover:bg-white w-[3rem] "
                                                value={counter}
                                            />

                                            <div><AiFillMinusSquare size={35}
                                                onClick={() => setCounter(counter--)} /></div>
                                        </div>


                                        <button className='my-2 bg-yellow-600 text-white rounded-md px-4 py-2 w-[18rem]' type='submit'>{loading ? "Loading..." : "Add to Cart"}</button>
                                    </Form>
                                )}
                            </Formik>

                        </div>




                    </div>


                </div>

                <div className='w-[20%]  bg-white rounded-md border-2 pl-2 '>
                    <h4 className='border-b-2 text-md  py-1 '>Delivery & Retruns</h4>
                    <h4 className='text-sm border-b-2 py-1  '>Free delivery on thousands of productIds in Lagos, Ibadan & Abuja Details</h4>
                </div>

            </div>
        </div>
    )
}
