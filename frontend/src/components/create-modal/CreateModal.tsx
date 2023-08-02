import { useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: unknown): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function CreateModal() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [image, setImage] = useState("");
    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }

        mutate(foodData);
    }
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Register a new food on menu:</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle}></Input>
          <Input label="price" value={price} updateValue={setPrice}></Input>
          <Input label="image" value={image} updateValue={setImage}></Input>
        </form>
        <button onClick={submit} className="btn-secondary">Post</button>
      </div>
    </div>
  );
}
