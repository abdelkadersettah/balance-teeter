import { useEffect } from "react";
import style from "./style.scss";
const Element = ({
  top,
  type,
  side,
  size,
  weight,
  offset,
  setBottom,
  style,
  ...restProps
}) => {
  let element = null;
  const styles = {
    left: `${
      side === "right"
        ? Math.min(50 + offset * 10, 100)
        : Math.max(50 - offset * 10, 0)
    }%`,
    fontSize: `${size}em`,
  };
  useEffect(() => {
    console.log(element && element.getBoundingClientRect().bottom);
    // eslint - disable - next - line;
  }, [top]);
  console.log(type, weight, "from element");
  return (
    <div
      className={["element", `element--${type}`].join(" ")}
      style={{ ...style, ...styles }}
      ref={(ref) => (element = ref)}
      {...restProps}
    >
      <span className="element__inner">{weight}</span>
    </div>
  );
};

export default Element;
