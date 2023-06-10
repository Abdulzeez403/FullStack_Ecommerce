import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

interface IProps {
  name?: string;
  img?: any;
  rating?: number;
  price?: string;
  oldPrice?: string;
  description?: string;
}
const ProductCard: React.FC<IProps> = ({
  img,
  name,
  rating,
  price,
  oldPrice,
  description,
}) => (
  <Card style={{ width: 245 }}>
    <Image src={img} width={200} height={200} alt="ProductImage" />
    <h4 className="text-lg">{name}</h4>
    <div>
      <div>
        <div className="flex space-x-1">
          <AiTwotoneStar  size={10} color="yellow"/>
          <AiTwotoneStar  size={10} color="yellow"/>
          <AiTwotoneStar  size={10} color="yellow"/>
          <AiTwotoneStar  size={10} color="yellow"/>
          <BsStarHalf  size={10} color="yellow"/>

        </div>
      </div>
      <div className="flex  items-center">
        <TbCurrencyNaira size={21} />
        <h4 className="font-semibold text-lg"> {price}</h4>
      </div>

      <div className="flex  items-center line-through">
        <TbCurrencyNaira size={18} color="gray" />
        <h4 className="font-thin"> {oldPrice}</h4>
      </div>
    </div>
  </Card>
);

export default ProductCard;
