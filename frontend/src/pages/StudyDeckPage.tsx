import { useDeck } from "../hooks/useDeck";
import StudyDeckMenu from "../components/StudyDeckMenu";
import Header from "../components/Header";
import home from "../assets/home.svg";
import edit from "../assets/edit.jpg";
import NavButton from "../components/NavButton";

function StudyDeck() {
  const deck = useDeck();

  const navButtons = [
    <NavButton icon={home} text="Home" alt="Go Home" destination="/" />,
  ];

  if (!deck) {
    return (
      <div className="study-deck">
        <Header navButtons={navButtons} title="Study" />
        <h1>Deck Not Found!</h1>
      </div>
    );
  }

  navButtons.push(
    <NavButton
      icon={edit}
      text="Edit"
      alt="Go Edit"
      destination={`/edit/${deck.id}`}
    />
  );

  return (
    <div className="study-deck">
      <Header navButtons={navButtons} title="Study" />
      <StudyDeckMenu />
    </div>
  );
}

export default StudyDeck;
