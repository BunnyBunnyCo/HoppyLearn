import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DeckEditor from "./pages/DeckEditor/DeckEditor";
import StudySession from "./pages/StudySession/StudySession";
import DecksContextProvider from "./contexts/DecksContextProvider";
import CurrentDeckContextProvider from "./contexts/CurrentDeckContextProvider";

function App() {
  return (
    <DecksContextProvider>
      <CurrentDeckContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/edit/:id" element={<DeckEditor />} />
            <Route path="/study/:id" element={<StudySession />} />
          </Routes>
        </Router>
      </CurrentDeckContextProvider>
    </DecksContextProvider>
  );
}

export default App;
