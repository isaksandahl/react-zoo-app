import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { getList, save } from "../../services/LocalStorageService";

export const Home = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;

    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimals(response.data);
      });
  });
  save(animals);
  console.log(animals);
  return <>Home Wroks!</>;
};
