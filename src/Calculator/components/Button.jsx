import React from "react";
function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`inputbtn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
