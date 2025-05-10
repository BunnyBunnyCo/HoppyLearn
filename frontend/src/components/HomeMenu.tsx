import { useState } from "react";
import HomeDecklist from "./HomeDecklist";

const HomeMenu: React.FC = () => {
  const [showInput, setShowInput] = useState(false);

  const handleAddButtonClick = () => {
    setShowInput(true);
  };

  const handleInputSubmit = () => {
    setShowInput(false);
  };

  return (
    <div className="decklist">
      <HomeDecklist showInput={showInput} onSubmit={handleInputSubmit} />
      {!showInput && (
        <button className="add-button" onClick={handleAddButtonClick}>
          +
        </button>
      )}
    </div>
  );
};

export default HomeMenu;
