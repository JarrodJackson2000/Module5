const express = require("express");
const calculatorRouter = express.Router();
const calculatorController = require("../controllers/calculatorController");

calculatorRouter.get("/Add", (req, res) => {
  calculatorController.Add(req, res);
});

calculatorRouter.get("/Multiply", (req, res) => {
  calculatorController.Multiply(req, res);
});

calculatorRouter.get("/Divide", (req, res) => {
  calculatorController.Divide(req, res);
});

calculatorRouter.get("/Subtract", (req, res) => {
  calculatorController.Subtract(req, res);
});

module.exports = calculatorRouter;
