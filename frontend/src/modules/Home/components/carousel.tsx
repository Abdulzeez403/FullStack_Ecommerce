import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

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
      <div className="w-[70%] mx-auto  bg-red-500">
        <div className=" flex space-x-2">
          <div className="w-[822px] rounded-md ">
            <Carousel autoplay dots={true}>
              <div className="w-[73%]  ">
                <Image
                  src="/../public/images/jumia.jpg "
                  width={2000}
                  height={5000}
                  alt="Phone_Category"
                  priority
                  object-fit="contain"
                  className="bg-yellow-400 rounded-md"
                />
              </div>

              <div className="w-[73%]  ">
                <Image
                  src="/../public/images/Desktop_Homepage.png "
                  width={2000}
                  height={5000}
                  alt="Phone_Category"
                  priority
                  object-fit="contain"
                  className="bg-yellow-400 rounded-sm"
                />
              </div>

              <div className="w-[73%]  ">
                <Image
                  src="/../public/images/jumia.jpg "
                  width={2000}
                  height={5000}
                  alt="Phone_Category"
                  priority
                  object-fit="contain"
                  className="bg-yellow-400 rounded-sm"
                />
              </div>
              <div>
                <Image
                  src="/../public/images/Desktop.jpg"
                  width={2000}
                  height={5000}
                  alt="Phone_Category"
                  priority
                  object-fit="contain"
                  className="bg-yellow-400 rounded-sm"
                />
              </div>
            </Carousel>
          </div>

          <div className=" space-y-3">
            <div className="bg-red-300 w-60 h-[210px] rounded-lg bottom-2">
              <Image
                src="/../public/images/free-delivery.png "
                width={500}
                height={500}
                alt="Phone_Category"
                priority
                object-fit="contain"
                className="bg-yellow-400 rounded-md"
              />
            </div>
            <div className="bg-blue-300 w-60 h-[210px]  rounded-lg ">
              <Image
                src="/../public/images/free-delivery.png "
                width={500}
                height={500}
                alt="Phone_Category"
                priority
                object-fit="contain"
                className="bg-yellow-400 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
