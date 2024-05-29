const Calculator = require("../library/calcLibrary");

let myCalc = new Calculator();

const Add = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = myCalc.add(number1, number2);
  res.status(200);
  res.send({ res: result });
};

const Multiply = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = myCalc.multiply(number1, number2);
  console.log(result);
  res.status(200);
  res.send({ res: result });
};

const Divide = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = myCalc.divide(number1, number2);
  res.status(200);
  res.send({ res: result });
};

const Subtract = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = myCalc.subtract(number1, number2);
  res.status(200);
  res.send({ res: result });
};

module.exports = { Add, Multiply, Divide, Subtract };
