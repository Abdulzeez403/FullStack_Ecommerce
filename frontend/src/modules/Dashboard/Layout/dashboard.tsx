import React, { useEffect, useState } from "react";
import { Menu, Layout, theme, Space, Avatar } from "antd";
import Link from "next/link";

import {
  EditOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined

} from "@ant-design/icons";
import { MdOutlineMapsHomeWork, MdPayment, MdPostAdd, MdProductionQuantityLimits } from "react-icons/md";
import { BsBox, BsClockHistory } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";

const { Header, Sider, Content } = Layout;

interface IProps {
  children: React.ReactNode;
}
export const DashboardNav: React.FC<IProps> = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="text-white font-extrabold text-center py-5 text-[1.2rem]">
            CityStore
          </div>
          <Menu
            theme="dark"
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
                label: "Home",
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
                label: "SignOut",
              },
            ]}

          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ paddingLeft: 12, background: colorBgContainer }}>

            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger text-[1.7rem]",
                onClick: () => setCollapsed(!collapsed),
              }
            )}

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
    </div>
  );
};


{/* <div className="flex space-x-4 items-center">
<Space direction="vertical" size={16}>
  <Space wrap size={16}>
    <Avatar size="small" icon={<UserOutlined />} />
  </Space>
</Space>
<div>
  <h4>Abdulazeez Sodiq</h4>
</div>
</div> */}
