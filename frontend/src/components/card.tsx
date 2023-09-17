import React from "react";
import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsStarFill } from "react-icons/bs";

interface IProps {
  name?: string;
  img?: any[];
  rating?: number;
  price?: string;
  oldPrice?: string;
  description?: string;
  proudctDetail?: string;
  category?: string[]
}
const ProductCard: React.FC<IProps> = ({
  img,
  name,
  rating,
  price,
  oldPrice,
  description,
  proudctDetail,
  category
}) => (
  <div className="bg-white rounded-md w-[300px]" >
    <div>
      <div className="bg-slate-300 w-[300px] flex-wrap">
        <div className="w-[200px] mx-auto">
          <Image src={img as any} width={200} height={200} alt="ProductImage" />
        </div>

      </div>
      <div className="py-2 px-1">
        <div >
          <h4 className="font-semibold text-md">{name}</h4>
          <h4 className=" text-slate-500 text-sm ">{category}</h4>
        </div>
        <div className="  my-2">
          <div className="flex gap-x-2 items-center">
            <div className="flex gap-x-1 items-center ">
              <BsStarFill size={14} color="Orange" />
              <h4 className="font-semibold text-md">4.7</h4>
            </div>
            <div className="w-[2px] h-4 bg-black mx-[2px]"></div>

            <div>
              <h4 className="font-semibold text-md">1,205 Sold</h4>
            </div>

          </div>

          <div className="flex space-x-3 items-center my-2">

            <div className="flex  items-center line-through">
              <TbCurrencyNaira size={21} color="gray" />
              <h4 className="font-thin text-lg"> {oldPrice}</h4>
            </div>
            <div className="flex  items-center">
              <TbCurrencyNaira size={21} />
              <h4 className="font-bold text-lg"> {price}</h4>
            </div>
          </div>


        </div>

      </div>
    </div>

  </div>
);

export default ProductCard;
