const express = require("express");

const dataRouter = express.Router();

const dataController = require("../controllers/dataController");

dataRouter.get("/Retrieve", (req, res) => {
  dataController.Retrieve(req, res);
});

module.exports = dataRouter;
