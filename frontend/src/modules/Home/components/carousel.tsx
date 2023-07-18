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
    <div className="flex justify-center m-0 items-center">
      <div className="w-[50%] h-[450px] rounded-2x1 border-2 bg-red-200 ">
            <Carousel autoplay dots={true}>
              <ApImage imgUrl="/../public/images/jumia.jpg " alt="phone" />
              <ApImage imgUrl="/../public/images/Desktop_Homepage.png " alt="phone" />
              <ApImage imgUrl="/../public/images/Desktop.jpg" alt="phone" />
            </Carousel>
      </div>
    </div>
  );
};
