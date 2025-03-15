import React, { useState } from "react";

interface InputCard {
  front: string;
  back: string;
}
const createEmptyCard = (): InputCard => ({
  front: "",
  back: "",
});

const EditDeckMenu: React.FC = () => {
  const [cards, setCards] = useState<InputCard[]>([]);
  const [newCard, setCard] = useState<InputCard>(createEmptyCard());

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(newCard);
    const { name, value } = event.target;
    console.log("name: " + name + " | value: " + value);
    setCard((prevCard: InputCard) => ({
      ...prevCard,
      [name]: value,
    }));
    console.log(newCard);
  }

  function addCard() {
    console.log(newCard);
    if (newCard.front.trim() !== "" && newCard.back.trim() !== "") {
      setCards((t) => [...t, newCard]);
      setCard(createEmptyCard());
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = cards.filter((_, i) => i !== index);
    setCards(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...cards];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setCards(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < cards.length - 1) {
      const updatedTasks = [...cards];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setCards(updatedTasks);
    }
  }
  return (
    <div className="edit-deck">
      <h1>Edit Deck</h1>
      <div className="inputLine">
        <input
          name="front"
          type="text"
          placeholder="Front"
          value={newCard.front}
          onChange={handleInputChange}
        />
        <input
          name="back"
          type="text"
          placeholder="Back"
          value={newCard.back}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addCard}>
          +
        </button>
      </div>

      <ol>
        {cards.map((card, index) => (
          <li key={index}>
            <span className="text">
              {card.front} | {card.back}
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EditDeckMenu;
