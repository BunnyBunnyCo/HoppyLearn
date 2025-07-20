import React from "react";
import styles from "./styles/Dashboard.module.css";

interface HomeMenuHeaderProps {
  handleAddButtonClick: () => void;
}

const HomeMenuHeader: React.FC<HomeMenuHeaderProps> = ({
  handleAddButtonClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 0.5rem",
        margin: "0.8rem 0.8rem 0rem 0.8rem",
      }}
    >
      <span style={{ fontSize: "1rem", fontWeight: "bold" }}>My Decks</span>
      <button className={styles.addDeckButton} onClick={handleAddButtonClick}>
        Add Deck
      </button>
    </div>
  );
};

export default HomeMenuHeader;
