import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultValue, IAnimal } from "../../models/IAnimal";
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
    let fedAnimal = { ...animal, isFed: true, lastFed: new Date().toString() };
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
    <div>
      <div>
        <img src={animal.imageUrl} alt={animal.name} />
      </div>
      <div>
        <h2>{animal.name}</h2>
        <p>{animal.latinName}</p>
      </div>
      <div>
        <p>Född: </p>
        <span>{animal.yearOfBirth}</span>
      </div>
      <div>
        <p>Information: </p>
        <span>{animal.longDescription}</span>
      </div>
      <div>
        <p>Medicin: </p>
        <span>{animal.medicine}</span>
      </div>
      <div>
        {animal.isFed ? (
          <button disabled>Mata djuret!</button>
        ) : (
          <button onClick={handleFeedAnimal}>Mata djuret!</button>
        )}
      </div>
    </div>
  );
};
