import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/HomePage";
import EditDeck from "./pages/EditDeckPage";
import StudyDeck from "./pages/StudyDeckPage";
import DecksContextProvider from "./contexts/DecksContextProvider";
import CurrentDeckContextProvider from "./contexts/CurrentDeckContextProvider";

function App() {
  return (
    <DecksContextProvider>
      <CurrentDeckContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/edit/:id" element={<EditDeck />} />
            <Route path="/study/:id" element={<StudyDeck />} />
          </Routes>
        </Router>
      </CurrentDeckContextProvider>
    </DecksContextProvider>
  );
}

export default App;
