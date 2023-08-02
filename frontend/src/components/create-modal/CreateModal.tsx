import { useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./modal.css"

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


interface ModalProps {
    closeModal(): void
}

export function CreateModal({ closeModal }: ModalProps) {
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
        closeModal();
    }
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <div className="top">
            <h2>Register a new food on menu</h2>
            <button onClick={closeModal}>X</button>
        </div>
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
