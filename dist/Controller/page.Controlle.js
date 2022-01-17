"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const pet_Model_1 = require("../Models/pet.Model");
const createMenuObjects_1 = require("../helpers/createMenuObjects");
const home = (request, response) => {
    let list = pet_Model_1.Pet.getAll();
    return response.render("../templates/index", {
        menu: (0, createMenuObjects_1.createMenuObject)("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg",
        },
        list,
    });
};
exports.home = home;
const dogs = (request, response) => {
    let list = pet_Model_1.Pet.getFromType("dog");
    return response.render("../templates/index", {
        menu: (0, createMenuObjects_1.createMenuObject)("dog"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg",
        },
        list,
    });
};
exports.dogs = dogs;
const cats = (request, response) => {
    let list = pet_Model_1.Pet.getFromType("cat");
    return response.render("../templates/index", {
        menu: (0, createMenuObjects_1.createMenuObject)("cat"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg",
        },
        list,
    });
};
exports.cats = cats;
const fishes = (request, response) => {
    let list = pet_Model_1.Pet.getFromType('fish');
    return response.render("../templates/index", {
        menu: (0, createMenuObjects_1.createMenuObject)("fish"),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg",
        },
        list,
    });
};
exports.fishes = fishes;
