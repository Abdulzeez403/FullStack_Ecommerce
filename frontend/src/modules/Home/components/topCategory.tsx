// import { Slider } from "antd";
import React from "react";
import { BsPhone } from "react-icons/bs";
import CategoryCard from "@/components/categoryCard";
import { TbBooks } from "react-icons/tb";
import { MdOutlineToys } from "react-icons/md";
import ApTextHeader from "@/components/typography/header";
import { Icon } from '@iconify/react';


const TopCategory = () => {

  return (
    <div className="py-6 ">
      <div className="flex justify-between items-center">
        <div className=" py-3 ">
          <ApTextHeader title='Our Top Category' />
        </div>

        <div>
          <h4 className="text-sm text-slate-600">Sell all</h4>
        </div>
      </div>


      <div className="flex gap-x-2 py-4 overflow-scroll lg:overflow-hidden ">
        <CategoryCard
          icon={<BsPhone style={{ fontSize: 32 }} />}
          title="Phones" />

        <CategoryCard
          icon={<Icon icon="mdi:shoe-sneaker" height='40' width="35" />}
          title="Shoes" />

        <CategoryCard
          icon={<BsPhone style={{ fontSize: 32 }} />}
          title="Electrionc" />

        <CategoryCard
          icon={<BsPhone style={{ fontSize: 32 }} />}
          title="Shirt" />
        <CategoryCard
          icon={<TbBooks style={{ fontSize: 32 }} />}
          title="Book" />
        <CategoryCard
          icon={<MdOutlineToys style={{ fontSize: 32 }} />}
          title="Toys" />
        <CategoryCard
          icon={<BsPhone style={{ fontSize: 32 }} />}
          title="Software" />
        <CategoryCard
          icon={<BsPhone style={{ fontSize: 32 }} />}
          title="Laptops" />
        <CategoryCard
          icon={<BsPhone style={{ fontSize: 32 }} />}
          title="Deskstop" />
        <CategoryCard
          icon={<BsPhone style={{ fontSize: 32 }} />}
          title="Bags" />
      </div>
    </div>


  );
};

export default TopCategory;
