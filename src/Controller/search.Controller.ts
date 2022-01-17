import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObjects";
import { Pet } from "../Models/pet.Model";

export const search = (request: Request, response: Response) => {
  let query = request.query.q as string;
  if (!query) {
    return response.redirect("/");
  }

  let list = Pet.getFromName(query);

  return response.render("../templates/index", {
    menu: createMenuObject(""),
    banner: null,
    list,
  });
};
