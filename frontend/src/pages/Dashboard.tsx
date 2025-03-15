import { Link } from "react-router-dom";
import bunny from "../smilebunny.png";
import Decklist from "../components/Decklist";
import * as types from "../types";

function Dashboard({ decks, setDecks }: types.SharedProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bunny} className="App-logo" alt="logo" />
        <h1>바니바니요요</h1>
        <Decklist decks={decks} setDecks={setDecks} />
      </header>
    </div>
  );
}

export default Dashboard;
