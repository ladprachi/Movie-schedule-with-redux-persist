/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { Menu, Button, Avatar, Dropdown, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AVATAR_ITEMS, ROUTE_CONFIG } from "../../../constant/Constant";
import { useCallback, useState } from "react";

const Header = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  const hideAddMovieButton = location.pathname.startsWith("/movie/edit");

  const onFinishLogOut = useCallback(
    () => {
      localStorage.removeItem("token", false);
      localStorage.removeItem("authCredentials");
      navigate(ROUTE_CONFIG?.LOGIN);
    }, [navigate])

  const handleClickAvatar = useCallback((e) => {
    const key = e.key;
    if (key === "3") {
      onFinishLogOut();
    }
    setCurrent(key);
    const item = AVATAR_ITEMS.find((item) => item.key === key);
    if (item && item.path) {
      navigate(item.path);
    }
  }, [onFinishLogOut])

  return (
    <div className="header">
      <Dropdown
        overlay={
          <Menu style={{ right: "-1750%", top: "50%" }} items={AVATAR_ITEMS} selectedKeys={[current]} onClick={handleClickAvatar} >
            {AVATAR_ITEMS.map((item, index) =>
              item.type === "divider" ? (
                <Menu.Divider key={index} onFinish={onFinishLogOut} />
              ) : (
                <Menu.Item key={index}>{item.label}</Menu.Item>
              )
            )}
          </Menu>
        }
        trigger={["click"]}
      >
        <Typography.Link>
          <Avatar
            size="large"
            style={{ left: "95%", top: "10%" }}
            icon={<UserOutlined />}
            onClick={(e) => e.preventDefault()}
          />
        </Typography.Link>
      </Dropdown>

      {!hideAddMovieButton && (
        <Button
          style={{ left: "85%", top: "10%" }}
          onClick={() => navigate(ROUTE_CONFIG?.ADD_MOVIE)}
        >
          Add Movie
        </Button>
      )}
    </div>
  );
};
export default Header;
