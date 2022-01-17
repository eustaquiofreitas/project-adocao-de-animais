"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const createMenuObjects_1 = require("../helpers/createMenuObjects");
const pet_Model_1 = require("../Models/pet.Model");
const search = (request, response) => {
    let query = request.query.q;
    if (!query) {
        return response.redirect("/");
    }
    let list = pet_Model_1.Pet.getFromName(query);
    return response.render("../templates/index", {
        menu: (0, createMenuObjects_1.createMenuObject)(""),
        banner: null,
        list,
    });
};
exports.search = search;
