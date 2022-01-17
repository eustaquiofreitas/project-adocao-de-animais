import express, { response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "./config/variables/.env" });

const server = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const router = require("./routes/router.js");

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "../src/templates/"));

server.use(express.static(path.join(__dirname, "../public/")));
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
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
