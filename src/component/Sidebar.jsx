import { Flex, Menu } from "antd";
import { BiBook } from "react-icons/bi";

import { TiUserOutline } from "react-icons/ti";

export default function Sidebar() {
  return (
    <div>
      <Flex>
        <div>
          <BiBook size={40} />
        </div>
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <TiUserOutline />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <TiUserOutline />,
            label: "Add Book",
          },
          {
            key: "3",
            icon: <TiUserOutline />,
            label: "Dashboard",
          },
        ]}
      />
    </div>
  );
}
