import React from "react";
import { Card } from "antd";
import Image from "next/image";

interface IProps {
    img?: any;
    name:string;

}
const CategoryCard: React.FC<IProps> = ({
    img,
    name

}) => (
    <Card style={{ width: 205 }} >
        <div>
            <Image src={img} width={150} height={150} alt="ProductImage" />
            <h4 className="text-lg text-center">{name}</h4>
        </div>


        <div className="  my-2">
            {/* <div className="flex space-x-1">
          <BsStarFill size={14} color="Orange" />
          <BsStarFill size={14} color="Orange" />
          <BsStarFill size={14} color="Orange" />
          <BsStarFill size={14} color="Orange" />
          <BsStarHalf size={14} color="Orange" />
      </div> */}
            {/* <div className="flex space-x-5 items-center my-2">

        <div className="flex  items-center">
          <TbCurrencyNaira size={21} />
          <h4 className="font-bold text-lg"> {price}</h4>
        </div>

        <div className="flex  items-center line-through">
          <TbCurrencyNaira size={21} color="gray" />
          <h4 className="font-thin text-lg"> {oldPrice}</h4>
        </div>
      </div> */}


        </div>
    </Card>
);

export default CategoryCard;
