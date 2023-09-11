import React from "react";
import { Card } from "antd";
import Image from "next/image";

interface IProps {
  icon?: any;
  title: string;

}
const CategoryCard: React.FC<IProps> = ({
  icon,
  title,

}) => (
  <div className="w-[7rem]">
    <div className="w-[4rem] mx-auto bg-slate-300 rounded-full p-4 ">
      <div className="w-[2rem] mx-auto ">
        <div className="">
          <div className="justify-center m-0">
            {icon}
          </div>
        </div>

      </div>
    </div>
    <h4 className="text-center pt-2 text-sm text-slate-700">{title}</h4>

  </div>

);

export default CategoryCard;
