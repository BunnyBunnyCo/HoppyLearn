import * as types from "../types";
import NavButton from "./NavButton";
import { useContext } from "react";
import { CurrentDeckContext } from "../contexts/CurrentDeckContextProvider";

const Header: React.FC<types.HeaderProps> = ({ navButtons }) => {
  const { currentDeck } = useContext(CurrentDeckContext);
  return (
    <div className="header">
      <h1 className="header-title">{currentDeck.name || "Hoppy Learn"}</h1>
      <div className="header-buttons">
        {navButtons.map((button, index) => button)}
      </div>
    </div>
  );
};

export default Header;
