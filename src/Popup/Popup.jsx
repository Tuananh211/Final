import React from "react";
import { Switch, Space, Select } from "antd";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import usa from "../assets/usd.svg";
import vnd from "../assets/vnd.svg";
function Popup({ onChange, onClick }) {
  const options = [
    {
      value: "vi",
      label: (
        <Space style={{ display: "flex", alignItems: "center" }}>
          <img
            src={vnd}
            alt="vnd"
            style={{
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
            }}
          />{" "}
          Việt Nam
        </Space>
      ),
    },
    {
      value: "en",
      label: (
        <Space style={{ display: "flex", alignItems: "center" }}>
          <img
            src={usa}
            alt="en"
            style={{
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
            }}
          />{" "}
          English
        </Space>
      ),
    },
  ];

  return (
    <>
      <Space direction="vertical">
        <Space size={40}>
          <label>Dark theme</label>
          <Switch
            defaultChecked
            onClick={onClick}
            checkedChildren={<BsFillMoonStarsFill />}
            unCheckedChildren={<BsFillSunFill />}
          />
        </Space>
        <Space size={40} style={{ margin: "10px 0px" }}>
          <label>Languages</label>
          <Select
            defaultValue="en"
            style={{
              width: 240,
            }}
            onChange={onChange}
            options={options}
          />
        </Space>
      </Space>
    </>
  );
}
export default Popup;
