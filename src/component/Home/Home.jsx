// import { Layout, Menu,Button } from "antd";
// import { useState } from "react";
// // import Sidebar from "../Sidebar";
// import Dashboard from "../Dashboard";
// import { BiMenu,BiCloset } from "react-icons/bi";

// const { Sider, Header, Content,Footer } = Layout;

// const Home = () => {
//   const [collapsed, setcollaped] = useState(false);
//   return (
//     // <Layout>
//     //   <Sider
//     //     theme="light"
//     //     trigger={null}
//     //     collapsible
//     //     collapsed={collapsed}
//     //     className="sider"
//     //   >
//     //     <Sidebar />
//     //     <Button
//     //       type="text"
//     //       icon={collapsed ? <BiMenu /> : <BiCloset />}
//     //       onClick={() => setcollaped(!collapsed)}
//     //       className="triger-btn"
//     //     />
//     //   </Sider>
//     //   <Layout>
//     //     <Header className="header">
//     //       {/* <MainHeader /> */}
//     //     </Header>
//     //     <Content className="content"></Content>
//     //   </Layout>
//     // </Layout>
//     <Layout className="layout">
//          <Sider
//         theme="light"
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//         className="sider"
//       >
//          <Button
//           type="text"
//           icon={collapsed ? <BiMenu /> : <BiCloset />}
//           onClick={() => setcollaped(!collapsed)}
//           className="triger-btn"
//         />
//       </Sider>
//       <Header>
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//           <Menu.Item key="1">Book Dashboard</Menu.Item>
//         </Menu>
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <div className="site-layout-content">
//           <Dashboard />
//         </div>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>Book Dashboard ©2024</Footer>
//     </Layout>
//   );
// };

// export default Home;
