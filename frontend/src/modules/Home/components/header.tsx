import React from "react";
import { Button, Space, Dropdown, Input } from "antd";
import {
  DownOutlined,
  SmileOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { BsPersonGear, BsSearch } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useUserContext } from "@/modules/auth/UserContext";



// const items1: MenuProps["items"] = [
//   {
//     key: "1",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="/dashboard/home"
//       >
//         <div className="flex space-x-2 items-center">
//           <BsPersonGear size={20} />
//           <h4>Help</h4>

//         </div>


//       </a>

//     ),

//   },

//   {
//     key: "2",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         <div className="flex space-x-2 items-center">
//           {/* <HiOutlineInboxIn size={20} /> */}
//           <h4>Contact  agents</h4>

//         </div>
//       </a>

//     ),

//   },
// ];


export const Header = () => {
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
            <h4>Dashboard</h4>

          </div>


        </a>

      ),

    },

    {
      key: "2",
      label: (
        <a
          target="_self"
          rel="noopener noreferrer"
          href="
          "
        >
          <div className="flex space-x-2 items-center" >
            <AiOutlinePoweroff size={20} />
            <h4>SignOut</h4>

          </div>
        </a>

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
  const { LogOutUser } = useUserContext()
  return (
    <div className="bg-white py-4">
      <div className="w-[70%] mx-auto">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="font-extrabold text-[2rem] text-yellow-300 ">
              CityStore
            </h2>
          </div>

          <div className="flex gap-2">
            <div className="w-[30rem]">
              <Input
                size="large"
                placeholder="Search products, brand and categories"
                allowClear={false}
                className="w-[100%]"
                prefix={<BsSearch color="gray" />}
              />
            </div>

            <div className="flex gap-x-4 items-center">
              <Button
                type="default"
                size="large"
                className="bg-yellow-500 text-white font-semibold"
              >
                SEARCH
              </Button>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div className="flex items-center gap-x-2 hover:text-yellow-500">
                      <UserOutlined style={{ fontSize: 20 }} />
                      <h4 className="font-semibold"> Account</h4>
                      <DownOutlined style={{ fontSize: 15 }} />
                    </div>
                  </Space>
                </a>
              </Dropdown>

              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div className="flex items-center gap-x-2  hover:text-yellow-500">
                      <QuestionCircleOutlined style={{ fontSize: 20 }} />

                      <h4 className="font-semibold"> Help</h4>

                      <DownOutlined style={{ fontSize: 15 }} />
                    </div>
                  </Space>
                </a>
              </Dropdown>

              <button>
                <div className="flex gap-x-2 items-center  hover:text-yellow-500 focus:border-2" onClick={() => {
                  LogOutUser();
                  console.log("kdkdk")
                }}>
                  <ShoppingCartOutlined style={{ fontSize: 20 }} />
                  <h4 className="font-semibold">Chart</h4>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
