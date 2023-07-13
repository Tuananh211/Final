import { useState, useEffect } from "react";
import ChessBoard from "./chessBoard/chessBoard";
import styles from "./App.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Chess() {
  const [size, setSize] = useState(0);
  const [oddColor, setoddColor] = useState("#000000");
  const [evenColor, setevenColor] = useState("#ffffff");
  const [change, setChange] = useState("false");

  const handleSize = (e) => {
    setSize(Number(e.target.value));
  };
  const handleOddColor = (e) => {
    setoddColor(e.target.value);
  };
  const handleEvenColor = (e) => {
    setevenColor(e.target.value);
  };
  const handleChange = () => {
    setChange(!change);
    console.log(change);
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
             <h1 style={{textAlign:'center'}}>Chess Board</h1>
          {/* <div className={cx("center")}> */}
         
            <div className={cx("row")}>
            <label>Size of chess board</label>
            <input
              type="text"
              className={cx("input", "sizeChess")}
              onChange={(e) => {
                handleSize(e);
              }}
            />
          </div>
          {/* </div> */}
          <div className={cx("row")}>
            <label>Color for odd</label>
            <input
              type="color"
              value={oddColor}
              className={cx("color")}
              onChange={handleOddColor}
            ></input>
          </div>
          <div className={cx("row")}>
            <label>Color for even</label>
            <input
              type="color"
              value={evenColor}
              className={cx("color", "evencolor")}
              onChange={handleEvenColor}
            ></input>
          </div>
        </div>
        <ChessBoard
          size={size}
          oddColor={oddColor}
          evenColor={evenColor}
          change={change}
          onClick={handleChange}
        />
      </div>
    </>
  );
}

export default Chess;
