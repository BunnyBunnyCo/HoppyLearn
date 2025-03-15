import { Link } from "react-router-dom";
import bunny from "../smilebunny.png";
import DashboardMenu from "../components/DashboardMenu";

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bunny} className="App-logo" alt="logo" />
        <h1>바니바니요요</h1>
        <DashboardMenu />
      </header>
    </div>
  );
}

export default Dashboard;
