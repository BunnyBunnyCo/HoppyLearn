import React from "react";
import { Link } from "react-router-dom";
import * as types from "../types";
import styles from "./NavButton.module.css";

const NavButton: React.FC<types.NavButtonProps> = ({
  icon,
  text,
  alt,
  destination,
}) => {
  return (
    <Link to={destination}>
      <button className={styles.navButton}>
        <img src={icon} alt={alt} className={styles.navButtonIcon} />
        {text && <span>{text}</span>}
      </button>
    </Link>
  );
};

export default NavButton;
