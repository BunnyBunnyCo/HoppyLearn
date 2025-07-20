import React from "react";
import * as types from "../types";
import styles from "./Header.module.css";

const Header: React.FC<types.HeaderProps> = ({ navButtons, title }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <div className={styles.navButtonContainer}>
        {navButtons.map((button, index) => (
          <React.Fragment key={index}>{button}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;
