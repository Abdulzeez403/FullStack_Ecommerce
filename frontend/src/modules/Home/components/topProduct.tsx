import React, { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/card";
import Link from "next/link";
import { AiOutlineEye, AiOutlineHeart, AiOutlineLock, AiTwotoneStar } from "react-icons/ai";
import { IProduct } from "../models";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ApTextHeader from "@/components/typography/header";
import { useCartContext } from "@/modules/cart/context";
import Cookies from "universal-cookie";
import { Button } from "antd";

interface IProps {
  products: IProduct[]
}
export const TopProduct: React.FC<IProps> = ({ products }) => {

  const myelement = useRef() as any

  const handlePrevClick = () => {
    if (myelement.current) {
      myelement.current.scrollLeft += 200;

    }
  }

  const handleNextClick = () => {
    if (myelement.current) {
      myelement.current.scrollLeft -= 200;

    }
  }


  const { addCart } = useCartContext();
  const cookies = new Cookies();
  const userId = cookies.get("userId");

  const handleAddsToCart = (id: any, quantity: any) => {
    addCart({
      product: {
        _id: id,
        quantity: quantity
      },
      userId,
    })

  }
  return (
    <div className="">
      <div className="flex justify-between py-4">
        <div>
          <ApTextHeader title=" Popular Products 2023" />
        </div>
        <div className="flex gap-x-2">
          <Button
            type="primary"
            shape="circle"
            className="bg-slate-400"
            icon={
              <BiChevronLeft size={25} />
            }
            onClick={handlePrevClick} />
          <Button
            type="primary"
            shape="circle" icon={
              <BiChevronRight size={25} />
            }
            className="bg-slate-400"
            onClick={handleNextClick}

          />

        </div>
      </div>

      <div className="flex w-[30rem] gap-x-2 md:w-[40rem] overflow-scroll md:overflow-auto lg:w-[80rem] lg:overflow-hidden " ref={myelement}>
        {products?.map((item, index) => (
          <Link href={`${item?._id}`}>

            <div className="rounded-md " >
              <div key={item?._id} className="relative ">
                <ProductCard
                  img={item?.images[0]?.uri}
                  price={item?.price}
                  oldPrice="200"
                  name={item?.Product_name}
                  category={item?.categories?.map((m) => m?.value)}
                  addToCart={() => handleAddsToCart(item?._id, item?.quantity)}
                />
                <div className="absolute left-1 top-0  ">
                  <div className=" m-2 ">
                    <AiOutlineHeart size={22} color='gray' />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
