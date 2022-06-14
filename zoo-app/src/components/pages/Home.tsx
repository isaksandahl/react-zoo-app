import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { save } from "../../services/LocalStorageService";
import { PrintAnimals } from "../PrintAnimal";

export const Home = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;
    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
        save(response.data);
      });
  });
  return (
    <div>
      {animals.map((animal) => {
        return <PrintAnimals key={animal.id} animal={animal}></PrintAnimals>;
      })}
    </div>
  );
};
