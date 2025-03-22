import React from "react";
import { Link } from "react-router-dom";
import * as types from "../types";

const NavButton: React.FC<types.NavButtonProps> = ({
  icon,
  text,
  alt,
  destination,
}) => {
  return (
    <Link to={destination}>
      <button className="nav-button">
        <img src={icon} alt={alt} className="nav-button-icon" />
        {text && <span>{text}</span>}
      </button>
    </Link>
  );
};

export default NavButton;
