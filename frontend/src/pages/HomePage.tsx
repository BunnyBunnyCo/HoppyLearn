import bunny from "../assets/smilebunny.png";
import HomeMenu from "../components/HomeMenu";

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bunny} className="App-logo" alt="logo" />
        <h1>Hoppy Learn</h1>
        <hr className="divider"></hr>
        <h5>My Decks</h5>
        <HomeMenu />
      </header>
    </div>
  );
}

export default Dashboard;
