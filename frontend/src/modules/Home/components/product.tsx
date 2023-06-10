import React from "react";
import ProductCard from "@/components/card";
import { ProductData } from "../../../../data";
import Link from "next/link";

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
          <Link href="/productDetail">
            <div key={index}>
              <ProductCard
                img={item?.img}
                price={item?.price}
                oldPrice={item?.oldPrice}
                name={item?.name}
              />
            </div>
          </Link>

        ))}
      </div>
    </div>
  );
};
