import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./smilebunny.png";
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
  /*
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>바니바니요요</h1>
      </header>
    </div>
    
  );
  */
}

export default App;
