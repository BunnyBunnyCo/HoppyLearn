import { useContext, useState, RefObject } from "react";
import * as types from "../types";
import { DecksContext } from "../contexts/DecksContextProvider";

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
      />
      <div className="button-container">
        <button className="add-button" onClick={addDeck}>
          +
        </button>
      </div>
    </li>
  );
};

export default HomeDeckInput;
