import { useContext, useState } from "react";
import * as types from "../types";
import { DecksContext } from "../contexts/DecksContextProvider";

const HomeDeckInput: React.FC = () => {
  const { setDecks } = useContext(DecksContext);
  const [inputDeck, setDeck] = useState<types.InputDeck>(types.createInputDeck);

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
    }
  }

  return (
    <div className="inputLine">
      <input
        type="text"
        name="name"
        value={inputDeck.name}
        placeholder="New Deck?"
        onChange={handleInputChange}
      ></input>
      <button className="add-button" onClick={addDeck}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default HomeDeckInput;
