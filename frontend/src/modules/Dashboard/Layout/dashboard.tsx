import React, { useEffect, useState } from "react";
import { Menu, Layout, theme, Avatar, Badge, Space, } from "antd";
import Link from "next/link";
import Bell from "../../../../public/svg/bell.svg"

import {
  UserOutlined
} from "@ant-design/icons";
import { MdOutlineMapsHomeWork, MdPayment, MdProductionQuantityLimits } from "react-icons/md";
import { BsBox, BsClockHistory } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";

const { Header, Sider, Content } = Layout;

interface IProps {
  children: React.ReactNode;


}
export const DashboardNav: React.FC<IProps> = ({ children }) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (

    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        width="200"
      // style={{ background: "green" }}

      >
        <div className="text-white font-extrabold text-center py-5 text-[1.8rem]text-slate-500">
          CityStore
        </div>
        <Menu
          theme='dark'
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <Link href="/dashboard/home">
                  <MdOutlineMapsHomeWork size={30} />
                </Link>
              ),
              label: "Dashboard",
            },
            {
              key: "2",
              icon: (
                <Link href="/dashboard/product">
                  <MdProductionQuantityLimits size={30} />
                </Link>
              ),
              label: "Product",
            },
            {
              key: "3",
              icon: (
                <Link href='/dashboard/update/update'>
                  <BsBox style={{ fontSize: '25px' }} />
                </Link>
              ),
              label: "Order",
            },

            {
              key: "4",
              icon: (
                <Link href='/dashboard/update/update'>
                  <BsClockHistory style={{ fontSize: '25px' }} />
                </Link>
              ),
              label: "History",
            },
            {
              key: "5",
              icon: (
                <Link href='/dashboard/update/update'>
                  <MdPayment style={{ fontSize: '25px' }} />
                </Link>
              ),
              label: "Payment",
            },

            {
              key: "6",
              icon: (
                <Link href='/'>
                  <AiOutlinePoweroff style={{ fontSize: '25px' }} />
                </Link>
              ),
              label: "Profile",
            },

            {
              key: "7",
              icon: (
                <Link href='/'>
                  <AiOutlinePoweroff style={{ fontSize: '25px' }} />
                </Link>
              ),
              label: "SignOut",
            },


          ]}

        />
      </Sider>
      <Layout  >
        <Header style={{ background: colorBgContainer }}>
          <div className="flex justify-end m-0" >

            <Space className="items-center">
              <div>
                <Bell />
              </div>
              <Badge count={1}>
                <Avatar shape="circle" icon={<UserOutlined width="30" />} />
              </Badge>
              <h4 className="font-semibold text-md">Admin One</h4>
            </Space>
          </div>

        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "86vh",
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>


  );
};



