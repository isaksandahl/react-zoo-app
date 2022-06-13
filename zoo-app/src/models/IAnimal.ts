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
  lastFed(): void;
}
