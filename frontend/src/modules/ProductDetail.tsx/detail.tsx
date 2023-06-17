import React from 'react'
import Image from "next/image"
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { TbCurrencyNaira } from 'react-icons/tb'
export const DetailPage = () => {
    return (
        <div className=' w-[90%] mx-auto  my-4'>


            <div className='flex justify-center space-x-6 align-items-center '>

                <div className='w-[60%] flex space-x-6 bg-white rounded-md border-2  align-items-center'>
                    <div className=' bg-gray-300 px-5 py-5 my-5 mx-5'>
                        <div className='flex justify-center align-items m-0'>
                            <Image src="/../public/images/phones.png" width={300} height={400} alt="ProductImage" />
                        </div>
                    </div>

                    <div className=''>
                        <h4 className='font-bold text-lg my-2'>Men Vintage Short Sleeve Stand Collar Shirt-Yellow</h4>
                        {/* <p className=''>description: Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Doloremque debitis
                            distinctio omnis a, illum quod minima quas suscipit possimus odio!</p> */}

                        <div className='my-2'>
                            <div className="flex space-x-1">
                                <BsStarFill size={14} color="Orange" />
                                <BsStarFill size={14} color="Orange" />
                                <BsStarFill size={14} color="Orange" />
                                <BsStarFill size={14} color="Orange" />
                                <BsStarHalf size={14} color="Orange" />
                            </div>
                        </div>
                        <div className='my-2 bg-orange-600 p-[2px] text-white text-[10px] w-[60px]'>Free Delivery</div>

                        <div>

                            <div className="flex  items-center">
                                <TbCurrencyNaira size={21} />
                                <h4 className="font-bold text-[1.2rem]"> 1,200</h4>
                            </div>

                            <div className="flex  items-center line-through">
                                <TbCurrencyNaira size={19} color="gray" />
                                <h4 className="font-thin text-md"> 2000</h4>
                            </div>
                        </div>

                        <button className='my-2 bg-yellow-600 text-white rounded-md px-4 py-2 w-96'>Add to Cart</button>


                    </div>


                </div>

                <div className='w-[20%]  bg-white rounded-md border-2 pl-2 '>
                    <h4 className='border-b-2 text-md  py-1 '>Delivery & Retruns</h4>
                    <h4 className='text-sm border-b-2 py-1  '>Free delivery on thousands of products in Lagos, Ibadan & Abuja Details</h4>
                </div>

            </div>
        </div>

    )
}
