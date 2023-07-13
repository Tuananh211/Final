import Prototype from "prop-types";
import styles from "./cellStyle.module.css";
import className from "classnames/bind";
const cx = className.bind(styles);
const Cell = ({ isWhite, oddColor, evenColor, onClick, change }) => {
  const cellColor = change
    ? isWhite
      ? evenColor
      : oddColor
    : isWhite
    ? oddColor
    : evenColor;
  return (
    <div
      className={cx(`cell`, `${cellColor}`)}
      style={{ backgroundColor: cellColor }}
      onClick={onClick}
    ></div>
  );
};
Cell.prototype = {
  isWhite: Prototype.bool.isRequired,
};
export default Cell;
