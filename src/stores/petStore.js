import { makeAutoObservable } from "mobx";
import petsData from "../petsData";

class PetStore {
  pets = petsData;

  constructor() {
    makeAutoObservable(this);
  }
  handleAdopt = (petId) =>
    (this.pets = this.pets.filter((pet) => pet.id !== petId));
}
const petStore = new PetStore();
export default petStore;
