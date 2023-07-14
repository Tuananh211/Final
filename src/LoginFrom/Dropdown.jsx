import React from "react";
import { Dropdown, Avatar, Space } from "antd";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import koro from "../assets/Koro.png";

const DropDown = ({ onClick }) => {
  const items = [
    {
      key: "1",
      label: (
        <Space style={{ alignItems: "center" }}>
          <CgProfile
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          ></CgProfile>
          Profile
        </Space>
      ),
    },
    {
      key: "2",
      label: (
        <Space style={{ alignItems: "center" }} onClick={onClick}>
          <TbLogout
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          ></TbLogout>
          Logout
        </Space>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <Avatar size={50} src={koro}></Avatar>
    </Dropdown>
  );
};
export default DropDown;
