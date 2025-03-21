import HomeDecklist from "./HomeDecklist";
import HomeDeckInput from "./HomeDeckInput";

const HomeMenu: React.FC = () => {
  return (
    <div className="decklist">
      <HomeDecklist />
      <HomeDeckInput />
    </div>
  );
};

export default HomeMenu;
