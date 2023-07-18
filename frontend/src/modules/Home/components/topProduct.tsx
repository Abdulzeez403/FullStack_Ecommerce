// import { Slider } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ProductType } from "../../../../data";
import { ProductData } from "../../../../data";
import Link from "next/link";
import CategoryCard from "@/components/categoryCard";

const TopProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className=" w-[70%] mx-auto py-6">
      <div className=" bg-red-600 py-3 ">
        <h4 className=" text-white px-5 font-extrabold text-lg">Our Top Category</h4>
      </div>


      <Slider {...settings}>
        {ProductData?.map((item, index) => (
          <Link href="/product" key={index}>
            <CategoryCard
              img={item?.img}
              name ={item?.name}
            />
          </Link>
        ))}
      </Slider>
</div>

  );
};

export default TopProduct;
