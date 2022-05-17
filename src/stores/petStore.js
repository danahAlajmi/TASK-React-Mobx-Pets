import { makeAutoObservable } from "mobx";
import petsData from "../petsData";

class PetStore {
  pets = petsData;

  constructor() {
    makeAutoObservable(this);
  }
  handleAdopt = (petId) =>
    (this.pets = this.pets.filter((pet) => pet.id !== petId));

  addPet = (newPet) => {
    let newPetID = this.pets.length + 1;
    newPet.id = newPetID;
    this.pets.push(newPet);
    console.log(newPet);
  };

  updatethePet = (updatedPet) => {
    this.pets = this.pets.map((element) =>
      element.id === updatedPet.id ? updatedPet : element
    );
  };
}
const petStore = new PetStore();
export default petStore;
