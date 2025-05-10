import { useContext, useState, useEffect, useRef } from "react";
import * as types from "../types";
import { DecksContext } from "../contexts/DecksContextProvider";

interface HomeDeckInputProps {
  onSubmit: () => void;
  focus: boolean; // added prop
}

const HomeDeckInput: React.FC<HomeDeckInputProps> = ({ onSubmit, focus }) => {
  const { setDecks } = useContext(DecksContext);
  const [inputDeck, setDeck] = useState<types.InputDeck>(types.createInputDeck);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focus]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDeck((prevCard: types.InputCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  function addDeck() {
    if (inputDeck.name.trim() !== "") {
      const newDeck = types.createDeck(inputDeck);
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
    <li className="list-deck">
      <input
        type="text"
        name="name"
        value={inputDeck.name}
        placeholder="New Deck Name"
        onChange={handleInputChange}
        ref={inputRef}
      ></input>
      <div className="button-container">
        <button className="add-button" onClick={addDeck}>
          +
        </button>
      </div>
    </li>
  );
};

export default HomeDeckInput;
