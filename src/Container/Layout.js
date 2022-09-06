import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="flex flex-row h-fit space-x-16">
        <div>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="h-12 m-2 text-white">
                <p className="text-xl text-center font-bold">Event Portal</p>
              </div>
              {/* <Menu
                theme="dark"
                mode="vertical"
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: <UserOutlined />,
                    label: "Dashboard",
                  },
                  {
                    key: "2",
                    icon: <VideoCameraOutlined />,
                    label: "Table",
                  },
                  {
                    key: "3",
                    icon: <UploadOutlined />,
                    label: "Tickets",
                  },
                  {
                    key: "4",
                    icon: <UploadOutlined />,
                    label: "Vendors",
                  },
                  {
                    key: "5",
                    icon: <UploadOutlined />,
                    label: "Staff Managment",
                  },
                  {
                    key: "6",
                    icon: <UploadOutlined />,
                    label: "Subscribtion Plan",
                  },
                  {
                    key: "7",
                    icon: <UploadOutlined />,
                    label: "Message",
                  },
                  {
                    key: "8",
                    icon: <UploadOutlined />,
                    label: "Finance",
                  },
                  {
                    key: "9",
                    icon: <UploadOutlined />,
                    label: "Dispute",
                  },
                ]}
              /> */}

              <Menu theme="dark" mode="vertical">
                <Menu.Item>
                  <Link to="/dash" type="submit">
                    Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/table" type="submit">
                    Table
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="bg-[#fff] h-screen">
              <Header
                className="bg-[#fff]"
                style={{
                  padding: 0,
                }}
              >
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "px-6 text-lg leading-9 cursor-pointer",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </Header>
              <Content>
                <div className="sm:w-[250px] md:w-[700px] h-fit">
                  <Outlet />
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
        <div className="h-12 w-full flex sm:flex-col md:flex-row justify-between mt-3 pr-16 py-2">
          <div>
            <input type="text" className="border w-40 pb-1" />
            <button className="border px-3 pb-1">
              <SearchOutlined />
            </button>
          </div>
          <div className="flex flex-row space-x-3">
            <Link to="/login" type="submit" className="hover:underline">
              Login
            </Link>
            <Link to="/registration" type="submit" className="hover:underline">
              Registration
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
