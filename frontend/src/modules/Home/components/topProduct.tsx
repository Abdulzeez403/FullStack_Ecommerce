// import { Slider } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ProductCard from "@/components/card";
import { ProductType } from "../../../../data";
import { ProductData } from "../../../../data";
import Link from "next/link";

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
    <div className=" w-[70%] mx-auto py-4">
      <div className=" bg-red-500 py-4">
        <h4 className="text-white  px-5 font-bold text-lg">Top Products</h4>
      </div>

      <Slider {...settings}>
        {ProductData?.map((item, index) => (
          <Link href="/product" key={index}>
            <ProductCard
              img={item?.img}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default TopProduct;
