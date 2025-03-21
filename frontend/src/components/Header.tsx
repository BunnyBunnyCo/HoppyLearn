import * as types from "../types";

const Header: React.FC<types.HeaderProps> = ({ navButtons, title }) => {
  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
      <div className="header-buttons">
        {navButtons.map((button, _) => button)}
      </div>
    </div>
  );
};

export default Header;
