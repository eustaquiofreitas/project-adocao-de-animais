// import { Router } from "express";
// import * as SearchController from "../Controller/search.Controller";
// import * as PageController from "../Controller/page.Controlle";
const express = require("express");
const PageController = require("../Controller/page.Controlle");
const SearchController = require("../Controller/search.Controller");
const router = express.Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

router.get("/search", SearchController.search);

module.exports = router;
