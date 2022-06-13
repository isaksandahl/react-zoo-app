import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { getList, save } from "../../services/LocalStorageService";

interface IParams {
  id: string;
}

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    name: "",
    shortDescription: "",
    imageUrl: "",
    latinName: "",
    yearOfBirth: 0,
    longDescription: "",
    medicine: "",
    isFed: false,
    lastFed: () => {},
  });
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
    let fedAnimal = { ...animal };
    if (fedAnimal.isFed === false) {
      fedAnimal.isFed = true;
      setAnimal(fedAnimal);
      save(animal);
    }
  };

  console.log(animal);

  return (
    <div>
      <div>
        <img src={animal.imageUrl} alt={animal.name} />
      </div>
      <h2>{animal.name}</h2>
      <p>{animal.latinName}</p>
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
      <button onClick={handleFeedAnimal}>Mata djuret!</button>
    </div>
  );
};
