import { useState } from "react";
import "./App.css";
import { LuArrowRightLeft } from "react-icons/lu";

import Value from "./Component/value";
import Result from "./Component/result";

function ConvertMoney() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");
  const [isSwap, setisSwap] = useState(false);
  const [title, setTitle] = useState("Convert USD to VND");

  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue !== "") {
      if (!isSwap) {
        setInput(inputValue);
        const doubledValue = parseInt(inputValue) * 23755;
        setResult(doubledValue.toFixed(2).toString());
      } else {
        setInput(inputValue);
        const doubledValue = parseInt(inputValue) / 23755;
        setResult(doubledValue.toFixed(2).toString());
      }
    } else {
      setInput("");
      setResult("0");
    }
  };

  const handleResult = (e) => {
    const resultValue = e.target.value;
    if (resultValue !== "") {
      if (isSwap == false) {
        setResult(resultValue);
        const doubledValue = parseInt(resultValue) / 23755;
        setInput(doubledValue.toFixed(2).toString());
      } else {
        setResult(resultValue);
        const doubledValue = parseInt(resultValue) * 23755;
        setInput(doubledValue.toFixed(2).toString());
      }
    } else {
      setInput("0");
      setResult("");
    }
  };

  const handleSwag = () => {
    setisSwap(!isSwap);
    setInput("");
    setResult("0");
    if (isSwap) {
      setTitle("Convert USD to VND");
    } else {
      setTitle("Convert VND to USD");
    }
  };
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="mainContainer">
        <Value
          input={input}
          isSwap={isSwap}
          onChange={handleInput}
          className="value"
        />
        <div className="icon">
          <LuArrowRightLeft
            style={{ cursor: "pointer" }}
            onClick={handleSwag}
          ></LuArrowRightLeft>
        </div>
        <Result result={result} isSwap={isSwap} onChange={handleResult} />
      </div>
    </div>
  );
}

export default ConvertMoney;
