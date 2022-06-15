import "../styles/PrintAnimal.scss";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
}

export const PrintAnimals = (props: IAnimalProps) => {
  return (
    <div className="animal-container">
      <div className="title-container">
        <h2>{props.animal.name}</h2>
      </div>
      <div className="image-container">
        <Link
          to={"/animals/" + props.animal.id}
          key={props.animal.id}
          className="image-link"
        >
          <img
            src={props.animal.imageUrl}
            alt={props.animal.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://shop.peacefulmall.com/no-image.png";
            }}
          />
        </Link>
      </div>
      <div className="desc-container">
        <p>{props.animal.shortDescription}</p>
        <div className="animal-btn-container">
          <Link to={"/animals/" + props.animal.id} key={props.animal.id}>
            <button>Läs mer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
