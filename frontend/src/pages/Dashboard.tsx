import bunny from "../assets/smilebunny.png";
import Decklist from "../components/Decklist";
import * as types from "../types";

function Dashboard({ decks, setDecks }: types.SharedProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bunny} className="App-logo" alt="logo" />
        <h1>Hoppy Learn</h1>
        <hr className="divider"></hr>
        <h5>My Decks</h5>
        <Decklist decks={decks} setDecks={setDecks} />
      </header>
    </div>
  );
}

export default Dashboard;
