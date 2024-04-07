import { useCallback, useMemo, useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  MessageOutlined,
  VideoCameraOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONFIG } from "../../../constant/Constant";


const Sidebar = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();

  const headerItems = useMemo(() => {
    return [
      {
        label: "DashBoard",
        key: "dashboard",
        icon: <HomeOutlined />,
        path: ROUTE_CONFIG?.DASHBOARD,
      },
      {
        label: "Movies",
        key: "movie",
        icon: <VideoCameraOutlined />,
        path: ROUTE_CONFIG?.MOVIE,
      },
      {
        label: "Contact Us",
        key: "contact",
        icon: <WechatOutlined />,
        path: ROUTE_CONFIG?.CONTACT_US,
      },
      {
        label: "About Us",
        key: "about",
        icon: <MessageOutlined />,
        path: ROUTE_CONFIG?.ABOUT_US,
      },
    ];
  }, []);

  const handleClickSidebar = useCallback(
    (e) => {
      const key = e.key;
      setCurrent(key);
      const selectedItem = headerItems.find((item) => item.key === key);
      if (selectedItem && selectedItem.path) {
        navigate(selectedItem.path);
      }
    },
    [navigate, headerItems]
  );

  return (
    <div className="sidebar">
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        items={headerItems}
        onClick={handleClickSidebar}
        selectedKeys={[current]}
      />
    </div>
  );
};

export default Sidebar;
