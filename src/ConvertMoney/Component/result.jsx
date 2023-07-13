import React from "react";
import { Input, Select, Space } from "antd";
const { Option } = Select;
// const selectAfter = (
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
//   const selectAfter2 = (
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
function Result({ result, onChange, isSwap }) {
  return (
    <Space direction="vertical">
      <label htmlFor="inputMoney">Chuyển đổi thành</label>
      <Input
        id="inputMoney"
        size="large"
        addonAfter={isSwap === true ? selectAfter2 : selectAfter1}
        value={result}
        onChange={onChange}
      />
    </Space>
  );
}

export default Result;
