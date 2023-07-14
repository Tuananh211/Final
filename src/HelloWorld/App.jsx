import { useState } from "react";
// import "./App.css";
import { FaRegEdit } from "react-icons/fa";
import { Input, Space, Typography } from "antd";
const { Text } = Typography;
function HelloWorld() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Space
        direction="vertical"
        style={{ marginLeft: "80px", marginTop:'30px' }}
      >
        <h1 style={{fontSize:"46px"}}> Hello World</h1>
        <Space
          direction="vertical"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "500px",
            border: "1px solid black",
            borderRadius: "8px",
            padding: "25px",
            backgroundColor:'#ffff'
          }}
        >
          <h3> Input Your Text</h3>
          <Input
            placeholder="Input text"
            onChange={(e) => handleInput(e)}
            style={{
              width: "100% ",
            }}
            prefix={<FaRegEdit></FaRegEdit>}
          />
          <Text
            type="success"
            style={{
              width: "100% ",
              fontWeight: "bold",
              // border :'1px solid black',
              padding: "4px 11px",
            }}
          >
            {input}
          </Text>
        </Space>
      </Space>
    </>
  );
}

export default HelloWorld;
