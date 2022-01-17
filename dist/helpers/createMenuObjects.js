"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let retrunObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    };
    if (activeMenu !== "") {
        retrunObject[activeMenu] = true;
    }
    return retrunObject;
};
exports.createMenuObject = createMenuObject;
