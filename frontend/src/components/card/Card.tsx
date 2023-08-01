import "./Card.css";

interface CardProps {
  title: string;
  image: string;
  price: number;
}

export function Card({ title, image, price }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>
        <b>Valor</b>
        {price}
      </p>
    </div>
  );
}
