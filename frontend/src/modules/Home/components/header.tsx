import React, { useEffect, useState } from "react";
import { Button, Space, Dropdown, Input, Badge } from "antd";
import {
  DownOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { BsPersonGear, BsSearch } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useUserContext } from "@/modules/auth/UserContext";
import Cookies from "universal-cookie";
import { useCartContext } from "@/modules/cart/context";

interface IProps {
  cartModal: () => void;
}


export const Header: React.FC<IProps> = ({ cartModal }) => {

  const cookies = new Cookies();
  const { LogOutUser, user, CurrentUser } = useUserContext();
  const [userCurrent, setUserCurrent] = useState();
  const { carts } = useCartContext()
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_self"
          rel="noopener noreferrer"
          href="/dashboard/home"
        >
          <div className="flex space-x-2 items-center">
            <BsPersonGear size={20} />
            <h4>My DashBoard</h4>

          </div>


        </a>

      ),

    },

    {
      key: "2",
      label: (
        <div className="flex space-x-2 items-center"
          onClick={() => { ClearCookies() }} >
          <AiOutlinePoweroff size={20} />
          <h4>SignOut</h4>

        </div>

      ),

    },

    {
      key: "3",
      label: (
        <a
          target="_self"
          rel="noopener noreferrer"
          href="/signup"
        >
          <div className="flex space-x-2 items-center">
            <AiOutlinePoweroff size={20} />
            <h4>SignUp</h4>

          </div>
        </a>

      ),

    },


  ];

  useEffect(() => {
    const CurrentUserFunc = () => {
      const getCookies = cookies.get("userId")
      CurrentUser(getCookies);
      setUserCurrent(getCookies)
    };
    CurrentUserFunc()

  }, [])





  const ClearCookies = () => {
    LogOutUser();
    cookies.remove("userId")
    cookies.remove("jwt", { path: '/' })
  }



  return (
    <div className="bg-white py-4  px-[1rem] md:px-[2rem] lg:px-[10rem]">
      <div className="flex justify-between  items-center ">

        <div>
          <h2 className="font-extrabold text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] text-yellow-300 ">
            CityStore
          </h2>
          <div className="hidden md:block md:text-[.6rem] lg:block   
          lg:text-[.9rem]">
            <p>Buying the right stuff</p>

          </div>
        </div>

        <div className="hidden md:flex lg:flex ">
          <div className="w-[30rem] md:w-[20rem] lg:w-[30rem]">
            <Input
              size="large"
              placeholder="Search products, brand and categories"
              allowClear={false}
              className="w-[100%] rounded-r-none"
              prefix={<BsSearch color="gray" />}
            />
          </div>
          <Button
            type="primary"
            size="large"
            className="bg-black text-white font-semibold rounded-l-none p-x-2 "
          >
            <BsSearch color="white" size={20} />

          </Button>
        </div>


        <div className="flex gap-x-4 items-center">


          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="flex items-center gap-x-2 hover:text-yellow-500">
                  <UserOutlined style={{ fontSize: 20 }} />
                  <div className=" hidden md:flex md:items-center lg:flex lg:items-center">

                    <h4 className="font-semibold"> {userCurrent ? `Hi, ${user?.firstName}` : "Account"}</h4>
                    <DownOutlined style={{ fontSize: 15 }} />
                  </div>
                </div>
              </Space>
            </a>
          </Dropdown>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="flex items-center gap-x-2  hover:text-yellow-500">
                  <QuestionCircleOutlined style={{ fontSize: 20 }} />

                  <div className="hidden md:flex md:items-center lg:flex lg:items-center">
                    <h4 className="font-semibold hidden md:block lg:block"> Help</h4>
                    <DownOutlined style={{ fontSize: 15 }} />
                  </div>


                </div>
              </Space>
            </a>
          </Dropdown>

          <button>
            <div className="flex gap-x-2 items-center  hover:text-yellow-500 focus:border-2" >
              <Badge count={carts?.length == 0 ? <h4>0</h4> : carts.length}>

                <ShoppingCartOutlined style={{ fontSize: 20 }} />
              </Badge>

              <div className=" hidden md:flex md:items-center lg:flex lg:items-center">
                <h4 className="font-semibold" onClick={() => cartModal()}>
                  Chart
                </h4>

              </div>

            </div>
          </button>
        </div>


      </div>
    </div>
  );
};
