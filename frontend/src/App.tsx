import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import * as types from "./types";
import Dashboard from "./pages/Dashboard";
import EditDeck from "./pages/EditDeck";
import StudyDeck from "./pages/StudyDeck";

function App() {
  const [decks, setDecks] = useState<types.Deck[]>([
    { id: 1, name: "Korean", cards: [] },
    { id: 2, name: "Spanish", cards: [] },
    { id: 3, name: "French", cards: [] },
  ]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard decks={decks} setDecks={setDecks} />}
        />
        <Route path="/edit/:id" element={<EditDeck />} />
        <Route path="/study/:id" element={<StudyDeck />} />
      </Routes>
    </Router>
  );
}

export default App;
