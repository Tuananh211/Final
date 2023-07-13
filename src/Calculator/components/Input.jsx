import React from "react";
function Input({ input, result }) {
  return (
    <div className="input">
      <input className="result" readOnly value={result}></input>
      <input className="inputtxt" readOnly value={input}></input>
    </div>
  );
}
export default Input;
