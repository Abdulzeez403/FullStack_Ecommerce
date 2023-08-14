import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";

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
  <Card style={{ width: 245 }} >
    <div>
      <Image src={img as any} width={200} height={200} alt="ProductImage" />
      <h4 className="text-lg text-red-600 font-semibold">{category}</h4>
      <h4 className="text-lg">{name}</h4>
    </div>


    <div className="  my-2">
      <div className="flex space-x-1">
        <BsStarFill size={14} color="Orange" />
        <BsStarFill size={14} color="Orange" />
        <BsStarFill size={14} color="Orange" />
        <BsStarFill size={14} color="Orange" />
        <BsStarHalf size={14} color="Orange" />
      </div>
      <div className="flex space-x-5 items-center my-2">

        <div className="flex  items-center">
          <TbCurrencyNaira size={21} />
          <h4 className="font-bold text-lg"> {price}</h4>
        </div>

        <div className="flex  items-center line-through">
          <TbCurrencyNaira size={21} color="gray" />
          <h4 className="font-thin text-lg"> {oldPrice}</h4>
        </div>
      </div>


    </div>
  </Card>
);

export default ProductCard;
