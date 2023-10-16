import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Space } from "antd";
import Phone from "../../../../public/svg/phone.svg"
import Health from "../../../../public/svg/health.svg"
import Fashion from "../../../../public/svg/fashion.svg"
import Electronics from "../../../../public/svg/electronics.svg"
import Baby from "../../../../public/svg/bady.svg"
import Applinance from "../../../../public/svg/applinance.svg"
export const Category = () => {
  return (
    <div className="hidden  lg:block lg:w-[16rem] bg-white p-3 mr-2">
      <nav className="">
        <ul className="block justify-between">
          <div className="">
            {/* <li>
              <Link href="/" >
                <Space>
                  <AiOutlineMenuUnfold color="black" size={20} />
                  <h4 className="text-md"> Categories</h4>
                </Space>

              </Link>
            </li> */}

          </div>

          <div className="space-y-4 ">
            <li>
              <Space>
                <Phone />
                <Link href="/productList">Phones & Tablet</Link>
              </Space>
            </li>
            <li>
              <Space>
                <Health />
                <Link href="">Health & Beauty</Link>
              </Space>

            </li>
            <li>
              <Space>
                <Fashion />
                <Link href="">Fashion</Link>
              </Space>

            </li>
            <li>
              <Space>
                <Electronics />
                <Link href="">Electronics</Link>
              </Space>
            </li>
            <li>
              <Space>
                <Baby />
                <Link href="">Baby Product</Link>
              </Space>

            </li>
            <li>
              <Space>
                <Applinance />
                <Link href="">Applinances</Link>
              </Space>

            </li>
            <li>
            </li>
          </div>

        </ul>
      </nav>
    </div>
  );
};
