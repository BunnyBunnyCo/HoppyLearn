import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as types from "../types";
import * as util from "../util/helpers";
import trash from "../assets/trashcan.svg";
import upArrow from "../assets/up-arrow.svg";
import downArrow from "../assets/down-arrow.svg";
import home from "../assets/home.svg";
import book from "../assets/book.svg";
let currentDeck: types.Deck = {
  id: 0,
  name: "",
  cards: [],
};

const EditDeckMenu: React.FC<types.SharedProps> = ({ decks, setDecks }) => {
  const [inputCard, setCard] = useState<types.InputCard>(
    types.createInputCard()
  );

  const { id } = useParams<{ id: string }>();
  const deckID: number = util.idToNum(id);
  const deck = decks.get(deckID);
  useEffect(() => {
    if (!deck) return;
    currentDeck = deck;
  });

  if (!deck) {
    return <h1>Deck {id} Not Found!</h1>;
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCard((prevCard: types.InputCard) => ({
      ...prevCard,
      [name]: value,
    }));
  }

  function addCard() {
    if (inputCard.front.trim() !== "" && inputCard.back.trim() !== "") {
      const newCard = types.createCard(deckID, inputCard);
      currentDeck.cards.push(newCard);
      resetDecks();
      setCard(types.createInputCard());
    }
  }

  function deleteTask(index: number) {
    const updatedCards = currentDeck.cards.filter((_, i) => i !== index);
    currentDeck.cards = updatedCards;
    resetDecks();
  }

  function moveCardUp(index: number) {
    if (index > 0) {
      const updatedCards = [...currentDeck.cards];
      [updatedCards[index], updatedCards[index - 1]] = [
        updatedCards[index - 1],
        updatedCards[index],
      ];
      currentDeck.cards = updatedCards;
      resetDecks();
    }
  }

  function moveCardDown(index: number) {
    if (index < currentDeck.cards.length - 1) {
      const updatedCards = [...currentDeck.cards];
      [updatedCards[index], updatedCards[index + 1]] = [
        updatedCards[index + 1],
        updatedCards[index],
      ];
      currentDeck.cards = updatedCards;
      resetDecks();
    }
  }

  function resetDecks() {
    setDecks((prevDecks) => {
      const newDecks = new Map(prevDecks);
      newDecks.set(deckID, currentDeck);
      return newDecks;
    });
  }

  return (
    <div className="edit-deck">
      <div className="header">
        <h1 className="header-title">{deck.name}</h1>
        <div className="header-buttons">
          <Link to={`/`}>
            <button className="header-button">
              <img src={home} alt="home" className="header-button-icon" />
              <span>Home</span>
            </button>
          </Link>
          <Link to={`/study/${deck.id}`}>
            <button className="header-button">
              <img src={book} alt="book" className="header-button-icon" />
              <span>Study</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="inputLine">
        <input
          name="front"
          type="text"
          placeholder="Front"
          value={inputCard.front}
          onChange={handleInputChange}
        />
        <input
          name="back"
          type="text"
          placeholder="Back"
          value={inputCard.back}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addCard}>
          +
        </button>
      </div>

      <ol>
        {decks.get(deckID)?.cards.map((card, index) => (
          <li key={index} className="list-card">
            <span className="text">
              {card.front} | {card.back}
            </span>
            <button
              className="delete-button "
              onClick={() => deleteTask(index)}
            >
              <img src={trash} alt="Delete" className="button-icon" />
            </button>
            <button className="move-button" onClick={() => moveCardUp(index)}>
              <img src={upArrow} alt="Up" className="button-icon" />
            </button>
            <button className="move-button" onClick={() => moveCardDown(index)}>
              <img src={downArrow} alt="Up" className="button-icon" />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EditDeckMenu;
