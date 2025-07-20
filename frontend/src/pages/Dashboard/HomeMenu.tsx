import React, { useState, useRef, useEffect } from "react";
import HomeDecklist from "./HomeDecklist";
import HomeMenuHeader from "./HomeMenuHeader";
import styles from "./styles/Dashboard.module.css";

const HomeMenu: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddButtonClick = () => {
    setShowInput(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleInputSubmit = () => {
    setShowInput(false);
  };

  return (
    <div className={styles.decklistContainer}>
      <HomeMenuHeader handleAddButtonClick={handleAddButtonClick} />
      <HomeDecklist
        showInput={showInput}
        onSubmit={handleInputSubmit}
        inputRef={inputRef}
      />
    </div>
  );
};

export default HomeMenu;
