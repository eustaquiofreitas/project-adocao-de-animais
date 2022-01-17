"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: "./config/variables/.env" });
const server = (0, express_1.default)();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const router = require("./routes/router.js");
server.set("view engine", "ejs");
server.set("views", path_1.default.join(__dirname, "../src/templates/"));
server.use(express_1.default.static(path_1.default.join(__dirname, "../public/")));
// server.use(express.json());
server.use(router);
server.use((request, response) => {
    return response.render("./partials/page-not-found", {
        menu: null,
    });
});
server.listen(PORT, () => {
    try {
        console.log(`Server running: ${HOST}:${PORT}`);
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
});
