import "../../styles/Animal.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultValue, IAnimal } from "../../models/IAnimal";
import { localTime } from "../../services/getLocalTimeService";
import { getList, save } from "../../services/LocalStorageService";

interface IParams {
  id: string;
}

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>(defaultValue);
  const params = useParams<Partial<IParams>>();
  let animalLS: IAnimal[] = getList<IAnimal>();

  useEffect(() => {
    if (params.id) {
      for (let i = 0; i < animalLS.length; i++) {
        if (animalLS[i].id === parseInt(params.id)) {
          setAnimal(animalLS[i]);
        }
      }
    }
  }, []);

  const handleFeedAnimal = () => {
    let fedAnimal = {
      ...animal,
      isFed: true,
      lastFed: localTime(),
    };
    setAnimal(fedAnimal);

    for (let i = 0; i < animalLS.length; i++) {
      if (animalLS[i].id === fedAnimal.id) {
        animalLS[i] = fedAnimal;
        save(animalLS);
      }
    }
  };

  console.log(animal);
  return (
    <div className="single-animal-container">
      <div className="single-animal-image-container">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://shop.peacefulmall.com/no-image.png";
          }}
        />
      </div>
      <div className="single-animal-div">
        <div>
          <span>Namn:</span>
          <h2>{animal.name}</h2>
        </div>
        <div>
          <span>Latin: </span>
          <p>{animal.latinName}</p>
        </div>
      </div>
      <div className="single-animal-div">
        <div>
          <span>Född: </span>
          <p>{animal.yearOfBirth}</p>
        </div>
      </div>
      <div className="single-animal-div">
        <div>
          <span>Medicin: </span>
          <p>{animal.medicine}</p>
        </div>
      </div>
      <div className="single-animal-desc-container">
        <details>
          <summary>Mer Information</summary>
          <p>{animal.longDescription}</p>
        </details>
      </div>
      <div className="single-animal-btn-container">
        {animal.isFed ? (
          <div>
            <button disabled>Mata djuret</button>
            <span>Senaste matad: {animal.lastFed}</span>
          </div>
        ) : (
          <div>
            <button onClick={handleFeedAnimal}>Mata djuret</button>
          </div>
        )}
      </div>
    </div>
  );
};
