import { Request, Response } from "express";
import { Pet } from "../Models/pet.Model";
import { createMenuObject } from "../helpers/createMenuObjects";

export const home = (request: Request, response: Response) => {
  let list = Pet.getAll();
  return response.render("../templates/index", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    list,
  });
};
export const dogs = (request: Request, response: Response) => {
  let list = Pet.getFromType("dog");

  return response.render("../templates/index", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    list,
  });
};
export const cats = (request: Request, response: Response) => {
  let list = Pet.getFromType("cat");

  return response.render("../templates/index", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    list,
  });
};
export const fishes = (request: Request, response: Response) => {
  let list = Pet.getFromType('fish');

  return response.render("../templates/index", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    list,
  });
};
