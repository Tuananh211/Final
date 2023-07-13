import React from "react";
import { Input, Select, Space } from "antd";
const { Option } = Select;

// const selectAfter = (
//     <Select
//       defaultValue="USD"
//       style={{
//         width: 80,
//       }}
//     >
//       <Option value="USD">$</Option>
//       {/* <Option value="VND">VND</Option> */}
//     </Select>
//   );

//   const selectAfter2 = (
//     <Select
//       defaultValue="VND"
//       style={{
//         width: 80,
//       }}
//     >
//       {/* <Option value="USD">$</Option> */}
//       <Option value="VND">VND</Option>
//     </Select>
//   );

const selectAfter1 = (
  <div className="currentConvert">
    <div className="vnflag"></div>
    VND
  </div>
);
const selectAfter2 = (
  <div className="currentConvert">
    <div className="usflag"></div>
    USD
  </div>
);
function Value({ input, onChange, isSwap }) {
  return (
    <Space direction="vertical">
      <label htmlFor="inputMoney">Số tiền</label>
      <Input
        id="inputMoney"
        size="large"
        addonAfter={isSwap === true ? selectAfter1 : selectAfter2}
        value={input}
        onChange={onChange}
      />
    </Space>
  );
}
export default Value;
