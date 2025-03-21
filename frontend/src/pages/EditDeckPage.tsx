import EditDeckMenu from "../components/EditDeckMenu";
import { useDeck } from "../hooks/useDeck";
import Header from "../components/Header";
import home from "../assets/home.svg";
import book from "../assets/book.svg";

function EditDeck() {
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
    icon: book,
    text: "Study",
    alt: "Go Study",
    destination: `/study/${deck.id}`,
  });
  return (
    <div className="edit-deck">
      <Header navButtons={NavButtons} />
      <EditDeckMenu />;
    </div>
  );
}

export default EditDeck;
