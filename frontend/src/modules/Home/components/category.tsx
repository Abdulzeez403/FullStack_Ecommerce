import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
export const Category = () => {
  return (
    <div className="w-[70%] mx-auto my-1">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/" className="flex space-x-4 items-center">
              <h4> All Categories</h4>
              <AiOutlineMenuUnfold color="black" size={20} />
            </Link>
          </li>
          <li>
            <Link href="">Phone $ Tablet</Link>
          </li>
          <li>
            <Link href="">Computers & Accessories</Link>
          </li>
          <li>
            <Link href="">Clothings</Link>
          </li>
          <li>
            <Link href="">Electronics</Link>
          </li>
          <li>
            <Link href="">Baby Product</Link>
          </li>
          <li>
            <Link href="">Fashions</Link>
          </li>
          <li>
            <Link href="">Automobile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
