export interface IAnimal {
  id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
  latinName: string;
  yearOfBirth: number;
  longDescription: string;
  medicine: string;
  isFed: boolean;
  lastFed: string;
}

export const defaultValue: IAnimal = {
  id: 0,
  name: "",
  shortDescription: "",
  imageUrl: "",
  latinName: "",
  yearOfBirth: 0,
  longDescription: "",
  medicine: "",
  isFed: false,
  lastFed: "",
};
