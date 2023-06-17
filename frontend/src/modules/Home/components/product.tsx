import React from "react";
import ProductCard from "@/components/card";
import { ProductData } from "../../../../data";
import Link from "next/link";
import { AiOutlineEye, AiOutlineHeart, AiOutlineLock, AiTwotoneStar } from "react-icons/ai";


export const Product = () => {
  return (
    <div className="w-[70%] mx-auto">
      <div className="bg-yellow-500 py-4">
        <h4 className="text-white  px-5 font-bold text-lg">
          Available Products
        </h4>
      </div>
      <div className="grid grid-cols-4 gap-12 py-3 ">
        {ProductData?.map((item, index) => (
          <div >
            <div key={index} className="group relative ">
              <ProductCard
                img={item?.img}
                price={item?.price}
                oldPrice={item?.oldPrice}
                name={item?.name}
                category={item?.category}
              />
              <div className="absolute right-1 top-0 invisible group-hover:visible ">
                <Link href="/productDetail">
                  <div className=" p-1 m-2 rounded-md border-[1px] border-gray-200">
                    <AiOutlineEye size={22} color='gray' />
                  </div>
                </Link>

                <div className=" p-1 m-2 rounded-md border-[1px] border-gray-200">
                  <AiOutlineHeart size={22} color='gray' />
                </div>
                <div className=" p-1 m-2 rounded-md border-[1px] border-gray-200">
                  <AiOutlineLock size={22} color='gray' />

                </div>

              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};
