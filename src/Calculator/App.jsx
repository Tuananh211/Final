import { useState } from "react";
import Button from "./components/Button";
import "./Calculator.css";
import Input from "./components/Input";
import { FaDeleteLeft } from "react-icons/fa6";

function Calculator() {
  const [input, setInput] = useState("");
  // const [currentNumber, setCurrentNumber] = useState(0);
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOpeartor] = useState("");
  const [result, setResult] = useState("");
  const [operatorColor, setOperatorColor] = useState("");
  // Hàm xử lý khi cập nhật input
  const handleSetInput = (value) => {
    setInput(input + value);
  };

  // Hàm xóa dữ liệu ô input
  const clearInput = () => {
    setInput("");
    setOpeartor("");
    setPreviousNumber("");
    setOperatorColor("");
  };
  //  Xử lý khi nhấn nút dấu phép tính
  const handleOperator = (value) => {
    if (input !== "") {
      if (previousNumber !== "" && result !== "" && operator !== "") {
        const current = parseFloat(input);
        const previous = parseFloat(previousNumber);
        let computedResult = "";
        if (operator === "add") {
          computedResult = previous + current;
        } else if (operator === "subtract") {
          computedResult = previous - current;
        } else if (operator === "multiply") {
          computedResult = previous * current;
        } else if (operator === "divide") {
          computedResult = previous / current;
        }

        setInput(computedResult.toString());
        setPreviousNumber(computedResult.toString());
      } else {
        setPreviousNumber(input);
        setOpeartor(value);
        setOperatorColor(value);
      }

      setInput("");
      setResult(input);
      setOpeartor(value);
      setOperatorColor(value);
    } else {
      setOpeartor(value);
      setOperatorColor(value);
    }
  };

  //Hàm xử lý khi nhấn dấu =
  const evaluate = () => {
    if (input !== "" && operator !== "" && previousNumber !== "") {
      var curNumber = parseFloat(input);
      var preNumber = parseFloat(previousNumber);
      if (operator === "add") {
        setInput(preNumber + curNumber);
      } else if (operator === "subtract") {
        setInput(preNumber - curNumber);
      } else if (operator === "devide") {
        setInput(preNumber / curNumber);
      } else if (operator === "multi") {
        setInput(preNumber * curNumber);
      }
      setPreviousNumber(input);
      setOpeartor("");
      setResult("");
      setOperatorColor("");
    }
  };
  // Xử lý việc thêm dấu âm
  const negateInput = () => {
    if (input != "") {
      setInput(String(-input));
    }
  };

  // Xử lý thêm dấu chấm
  const addDecimal = (val) => {
    // only add decimal if there is no current decimal point present in the input area
    if (input.indexOf(".") === -1) {
      setInput(input + val);
    }
  };
  //Xử lý khi nhấn nút CE
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <>
      <div className="container1">
        <h1 className="calTitle">Calculator</h1>
        <div className="calculator">
          <Input input={input} result={previousNumber}></Input>

          <div className="buttonGroup">
            <Button onClick={() => negateInput()}>+/-</Button>
            <Button>%</Button>
            <Button onClick={() => handleDelete()}>
              <FaDeleteLeft />
            </Button>
            <Button onClick={() => clearInput()}>C</Button>

            <Button onClick={() => handleSetInput(1)}>1</Button>
            <Button onClick={() => handleSetInput(2)}>2</Button>
            <Button onClick={() => handleSetInput(3)}>3</Button>
            <Button
              onClick={() => handleOperator("devide")}
              className={operatorColor === "device" ? "active" : ""}
            >
              {" "}
              &#247;
            </Button>

            <Button onClick={() => handleSetInput(4)}>4</Button>
            <Button onClick={() => handleSetInput(5)}>5</Button>
            <Button onClick={() => handleSetInput(6)}>6</Button>
            <Button
              onClick={() => handleOperator("subtract")}
              className={operatorColor === "subtract" ? "active" : ""}
            >
              -
            </Button>

            <Button onClick={() => handleSetInput(7)}>7</Button>
            <Button onClick={() => handleSetInput(8)}>8</Button>
            <Button onClick={() => handleSetInput(9)}>9</Button>
            <Button
              onClick={() => handleOperator("add")}
              className={operatorColor === "add" ? "active" : ""}
            >
              +
            </Button>

            <Button onClick={() => addDecimal(".")}>.</Button>
            <Button onClick={() => handleSetInput(0)}>0</Button>
            <Button onClick={() => evaluate()}>=</Button>
            <Button
              onClick={() => handleOperator("multi")}
              className={operatorColor === "multi" ? "active" : ""}
            >
              &#215;
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
