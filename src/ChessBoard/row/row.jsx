import styles from "../row/styleRow.module.css";
import className from "classnames/bind";
import Cell from "../cell/cell";

const cx = className.bind(styles);

const RowChess = ({ rowType, size, oddColor, evenColor, onClick, change }) => {
  const cells = [];
  for (var i = 0; i < size; i++) {
    const isWhite = (i + rowType) % 2 === 0;
    cells.push(
      <Cell
        oddColor={oddColor}
        evenColor={evenColor}
        key={i}
        isWhite={isWhite}
        onClick={onClick}
        change={change}
      />
    );
  }
  return <div className={cx("row2")}>{cells}</div>;
};

export default RowChess;
