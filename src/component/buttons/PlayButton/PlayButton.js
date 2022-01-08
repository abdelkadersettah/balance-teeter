import "./style.scss";
const PlayButton = ({ children, type, clicked }) => {
  return (
    <button onClick={clicked} className={["btn", type].join(" ")}>
      {children}
    </button>
  );
};

export default PlayButton;
