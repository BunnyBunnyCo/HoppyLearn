import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import EditDeck from "./pages/EditDeck";
import StudyDeck from "./pages/StudyDeck";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditDeck />} />
        <Route path="/study/:id" element={<StudyDeck />} />
      </Routes>
    </Router>
  );
}

export default App;
