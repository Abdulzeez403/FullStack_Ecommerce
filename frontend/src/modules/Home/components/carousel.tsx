import React from "react";
import { Carousel } from "antd";
import Image from "next/image"
import image1 from "../../../../public/images/Desktop_Homepage.png"
import image2 from "../../../../public/images/hero2.png"
import image3 from "../../../../public/images/hero2.png"


export const CarouselPage = () => {
  return (
    <div className="w-96 lg:w-[80%]">
      <Carousel autoplay dots={true} dotPosition="right" >
        <Image src={image1} alt="phone" />
        <Image src={image2} alt="phone" />
        <Image src={image3} alt="phone" />
      </Carousel>
    </div>


  );
};
