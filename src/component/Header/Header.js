import PlayButton from "../buttons/PlayButton/PlayButton";
import "./style.scss";
const Header = () => {
  return (
    <header className="header">
      <a href="/">Balance Teeter Totter</a>
      <nav className="nav">
        <PlayButton type={"play"} children={"play"} />
        <PlayButton type={"reset"} children={"reset"} />
      </nav>
    </header>
  );
};

export default Header;
