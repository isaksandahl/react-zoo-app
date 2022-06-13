import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
// import "../assests/image-not-found.jpg";

interface IAnimalProps {
  animal: IAnimal;
}

export const PrintAnimals = (props: IAnimalProps) => {
  return (
    <div className="animal-container">
      <Link to={"/animals/" + props.animal.id} key={props.animal.id}>
        <div className="image-container">
          <img
            src={props.animal.imageUrl}
            alt={props.animal.name}
            // onError={(e: SyntheticEvent<HTMLImageElement>) => {
            //   e.currentTarget.onerror = null;
            //   e.currentTarget.src = "../assests/image-not-found.jpg";
            // }}
          />
        </div>
      </Link>
      <div>
        <h2>{props.animal.name}</h2>
        <p>{props.animal.shortDescription}</p>
      </div>
    </div>
  );
};
