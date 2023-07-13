import ProtoTypes from "prop-types";
import styles from "../chessBoard/chessBoard.module.css";
import classNames from "classnames/bind";
import RowChess from "../row/row";
const cx = classNames.bind(styles);
const ChessBoard = ({ size, oddColor, evenColor, change, onClick }) => {
  const rows = [];
  for (var i = 0; i < size; i++) {
    const rowType = i % 2 === 0 ? 0 : 1;
    rows.push(
      <RowChess
        oddColor={oddColor}
        evenColor={evenColor}
        key={i}
        rowType={rowType}
        size={size}
        change={change}
        onClick={onClick}
      />
    );
  }
  return <div className={cx("chessboard")}>{rows}</div>;
};
ChessBoard.prototype = {
  size: ProtoTypes.number.isRequired,
};
export default ChessBoard;
