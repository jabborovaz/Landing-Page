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
const { Header, Sider, Content } = Layout;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="flex flex-row space-x-16">
        <div>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="h-12 m-2 text-white">
                <p className="text-xl text-center font-bold">Event Portal</p>
              </div>
              <Menu
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
                    label: "Events",
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
              />
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
              <Content>Content</Content>
            </Layout>
          </Layout>
        </div>
        <div className="h-12 flex flex-row mt-3 py-2">
          <div>
            <input type="text" className="border w-40" />
            <button className="border px-3">
              <SearchOutlined />
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
