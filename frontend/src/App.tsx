import "./App.css";
import { Card } from "./components/card/Card";
import { FoodData } from "./interface/FoodData";

function App() {
  const data: FoodData[] = [];

  return (
    <div className="container">
      <h1>Menu</h1>
      <div className="card-grid">
        {data.map((foodData) => (
          <Card
            title={foodData.title}
            image={foodData.title}
            price={foodData.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
