import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/Card";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/create-modal/CreateModal";

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Menu</h1>
      <button className="create-button" onClick={handleOpenModal}>New</button>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            title={foodData.title}
            image={foodData.image}
            price={foodData.price}
          />
        ))}
      </div>
        {isModalOpen && <CreateModal closeModal={() => handleOpenModal()}/>}
    </div>
  );
}

export default App;
