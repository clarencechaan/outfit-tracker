import "./App.css";
import ClothingItem from "./components/ClothingItem";
import Outfit from "./components/Outfit";

function App() {
  return (
    <div className="App">
      <Outfit
        id={99}
        clothingItems={[
          <ClothingItem id={0} name="White T-shirt" />,
          <ClothingItem id={1} name="Black Jeans" />,
        ]}
      />
    </div>
  );
}

export default App;
