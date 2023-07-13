import { Card, Avatar } from "antd";
import React from "react";
import avatar from "../assets/avatar.jpg";
const Info = ({ collapsed,modeTheme }) => {
  return (
    <Card
      hoverable
      style={{
        background: "transparent",
        border: "none",
        padding: "12px",
        display: `${collapsed ? "none" : "block"}`,
      }}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px",
      }}
    >
      <Avatar
        src={avatar}
        size={70}
        style={{
          backgroundSize: "cover",
        }}
      ></Avatar>
      <span
        style={{
          fontSize: "16px",
          color: `${modeTheme==='light'?"	#000000":"#ffff"}`,
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Vũ Đình Tuấn Anh
      </span>
    </Card>
  );
};
export default Info;
