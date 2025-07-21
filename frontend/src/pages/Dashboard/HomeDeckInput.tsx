import React, { useContext, useState, RefObject } from "react";
import * as types from "../../types";
import { DecksContext } from "../../contexts/DecksContextProvider";
import styles from "./styles/HomeDeck.module.css";
import * as util from "../../utils/localStoreCalls";

interface HomeDeckInputProps {
  onSubmit: () => void;
  focus: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
}

const HomeDeckInput: React.FC<HomeDeckInputProps> = ({
  onSubmit,
  focus,
  inputRef,
}) => {
  const { setDecks } = useContext(DecksContext);
  const [inputDeck, setDeck] = useState<types.InputDeck>(types.createInputDeck);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDeck((prevDeck) => ({
      ...prevDeck,
      [name]: value,
    }));
  }

  function addDeck() {
    if (inputDeck.name.trim() !== "") {
      const newDeck = util.createDeck(inputDeck);
      setDecks((prevDecks) => {
        const newDecks = new Map(prevDecks);
        newDecks.set(newDeck.id, newDeck);
        return newDecks;
      });
      setDeck(types.createInputDeck());
      onSubmit();
    }
  }

  return (
    <li className={styles.listDeck}>
      <input
        type="text"
        name="name"
        value={inputDeck.name}
        placeholder="New Deck Name"
        onChange={handleInputChange}
        ref={inputRef}
      />
      <div className="buttonContainer">
        <button className="addButton" onClick={addDeck}>
          +
        </button>
      </div>
    </li>
  );
};

export default HomeDeckInput;
