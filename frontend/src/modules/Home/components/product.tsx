import React, { useEffect } from "react";
import ProductCard from "@/components/card";
import Link from "next/link";
import { AiOutlineEye, AiOutlineHeart, AiOutlineLock, AiTwotoneStar } from "react-icons/ai";
import { IProduct } from "../models";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ApTextHeader from "@/components/typography/header";
import { useCartContext } from "@/modules/cart/context";
import Cookies from "universal-cookie";

interface IProps {
  products: IProduct[]
}
export const Product: React.FC<IProps> = ({ products }) => {


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
          <div className="bg-slate-400 rounded-full w-[1.2rem]">
            <div className="text-center">
              <BiChevronLeft size={25} />
            </div>
          </div>
          <div>
            <BiChevronRight size={30} />
          </div>
        </div>
      </div>




      <div className="flex gap-x-2 md:w-[40rem] md:overflow-auto lg:w-[80rem] lg:overflow-auto ">
        {products?.map((item, index) => (
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
                <Link href={`${item?._id}`}>
                  <div className=" m-2 ">
                    <AiOutlineHeart size={22} color='gray' />
                  </div>
                </Link>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};
