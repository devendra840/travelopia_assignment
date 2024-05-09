const express = require("express");
const {
  readAllTravellers,
  createNewTraveller,
} = require("../controllers/traveller.controller.js");
const travellerRouter = express.Router();

travellerRouter.post("/", createNewTraveller);
travellerRouter.get("/", readAllTravellers);

module.exports = travellerRouter;
