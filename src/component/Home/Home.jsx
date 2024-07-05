import { Layout, Button } from "antd";
import { useState } from "react";
import Sidebar from "../Sidebar";
import { Header as MainHeader } from "../../component/Header";
// import { Menu } from "@mui/material";
import { BiCloset, BiMenu } from "react-icons/bi";

const { Sider, Header, Content } = Layout;

const Home = () => {
  const [collapsed, setcollaped] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <BiMenu /> : <BiCloset />}
          onClick={() => setcollaped(!collapsed)}
          className="triger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          {/* <MainHeader /> */}
        </Header>
        <Content className="content"></Content>
      </Layout>
    </Layout>
  );
};

export default Home;
