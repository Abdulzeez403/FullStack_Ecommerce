import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import ApImage from "@/components/images/image";

const contentStyle: React.CSSProperties = {
  height: "384px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "10px",
};

export const CarouselPage = () => {
  return (
    <div className="flex justify-center m-0 items-center ">
      <div className="w-[430px] px-8  md:w-[40rem] lg:w-[82rem]">

        <Carousel autoplay dots={true}>
          <ApImage imgUrl="/../public/images/hero2.png " alt="phone"
          />

          <ApImage imgUrl="/../public/images/Desktop_Homepage.png " alt="phone" />
          <ApImage imgUrl="/../public/images/Desktop.jpg" alt="phone" />
        </Carousel>
      </div>
    </div>

  );
};
