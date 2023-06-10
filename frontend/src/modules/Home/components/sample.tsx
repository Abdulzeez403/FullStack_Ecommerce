// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Sample = () => {
  return (
    <div className="w-[70%] mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              src="/../public/images/refig.png "
              width={100}
              height={100}
              alt="Refigerators"
              className="w-[80%] mx-auto rounded-sm"
            />
            <h4 className="text-center ">Refigerators</h4>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
