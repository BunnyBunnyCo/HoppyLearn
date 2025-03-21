import EditDeckMenu from "../components/EditDeckMenu";
import NavButton from "../components/NavButton";
import { useDeck } from "../hooks/useDeck";
import Header from "../components/Header";
import home from "../assets/home.svg";
import book from "../assets/book.svg";

function EditDeck() {
  const deck = useDeck();

  const navButtons = [
    <NavButton icon={home} text="Home" alt="Go Home" destination="/" />,
  ];

  if (!deck) {
    return (
      <>
        <Header navButtons={navButtons} />
        <h1>Deck Not Found!</h1>
      </>
    );
  }

  navButtons.push(
    <NavButton
      icon={book}
      text="Study"
      alt="Go Study"
      destination={`/study/${deck.id}`}
    />
  );
  return (
    <div className="edit-deck">
      <Header navButtons={navButtons} />
      <EditDeckMenu />
    </div>
  );
}

export default EditDeck;
