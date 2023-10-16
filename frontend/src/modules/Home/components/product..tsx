import React from "react";
import ProductCard from "@/components/card";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { IProduct } from "../models";
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
      <div className="flex justify-start pt-6">
        <div>
          <ApTextHeader title=" Products " />
        </div>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5   ">
        {products?.map((item, index) => (
          <Link href={`${item?._id}`}>

            <div className="rounded-md my-2 " >
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
