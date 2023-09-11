import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
export const Category = () => {
  return (
    <div className="my-1 px-[1rem] md:px-[8rem] lg:px-[10rem]">
      <nav className="w-[400px] overflow-scroll  md:w-[100%] md:overflow-auto lg:w-[100%] lg:overflow-auto ">
        <ul className="flex justify-between">
          <div className="">
            <li>
              <Link href="/" className="flex space-x-3 items-center pr-4">
                <h4> Categories</h4>
                <AiOutlineMenuUnfold color="black" size={20} />
              </Link>
            </li>

          </div>

          <div className="flex gap-x-4">
            <li>
              <Link href="">Phones</Link>
            </li>
            <li>
              <Link href="">Accessorires</Link>
            </li>
            <li>
              <Link href="">Clothings</Link>
            </li>
            <li>
              <Link href="">Electronics</Link>
            </li>
            <li>
              <Link href="">Babys</Link>
            </li>
            <li>
              <Link href="">Fashions</Link>
            </li>
            <li>
            </li>
          </div>

        </ul>
      </nav>
    </div>
  );
};
