import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as types from "./types";
import Dashboard from "./pages/Dashboard";
import EditDeck from "./pages/EditDeck";
import StudyDeck from "./pages/StudyDeck";

function App() {
  //Maintain decklist state across views
  //preload some decks for testing before connnected to backend
  const [decks, setDecks] = useState<Map<number, types.Deck>>(
    new Map([
      [
        1,
        {
          id: 1,
          name: "Korean",
          cards: [
            { front: "Hello", back: "안녕", id: 101, deck: 1 },
            { front: "Carrot", back: "당근", id: 102, deck: 1 },
            { front: "Pretty", back: "예쁘다", id: 103, deck: 1 },
          ],
        },
      ],
      [
        2,
        {
          id: 2,
          name: "Spanish",
          cards: [
            { front: "Hello", back: "Hola", id: 201, deck: 2 },
            { front: "Carrot", back: "Zanahoria", id: 202, deck: 2 },
            { front: "Pretty", back: "Bonita", id: 203, deck: 2 },
          ],
        },
      ],
      [
        3,
        {
          id: 3,
          name: "French",
          cards: [
            { front: "Hello", back: "Bonjour", id: 301, deck: 3 },
            { front: "Carrot", back: "Carotte", id: 302, deck: 3 },
            { front: "Pretty", back: "Jolie", id: 303, deck: 3 },
          ],
        },
      ],
    ])
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard decks={decks} setDecks={setDecks} />}
        />
        <Route
          path="/edit/:id"
          element={<EditDeck decks={decks} setDecks={setDecks} />}
        />
        <Route
          path="/study/:id"
          element={<StudyDeck decks={decks} setDecks={setDecks} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
