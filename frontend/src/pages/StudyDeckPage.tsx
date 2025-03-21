import { useDeck } from "../hooks/useDeck";
import StudyDeckMenu from "../components/StudyDeckMenu";
import Header from "../components/Header";
import home from "../assets/home.svg";
import edit from "../assets/edit.jpg";

function StudyDeck() {
  const deck = useDeck();

  const NavButtons = [
    { icon: home, text: "Home", alt: "Go Home", destination: "/" },
  ];

  if (!deck) {
    return (
      <>
        <Header navButtons={NavButtons} />
        <h1>Deck Not Found!</h1>
      </>
    );
  }

  NavButtons.push({
    icon: edit,
    text: "Edit",
    alt: "Go Edit",
    destination: `/edit/${deck.id}`,
  });

  return (
    <div className="study-deck">
      <Header navButtons={NavButtons} />
      <StudyDeckMenu />
    </div>
  );
}

export default StudyDeck;
