import "./App.css";
import { Card } from "./components/card/Card";
import { useFoodData } from "./hooks/useFoodData";

function App() {
  const { data } = useFoodData();

  return (
    <div className="container">
      <h1>Menu</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            title={foodData.title}
            image={foodData.image}
            price={foodData.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
