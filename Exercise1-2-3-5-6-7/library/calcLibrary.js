const Logger = require("../library/loggingLibrary");
const thisLogger = new Logger();

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1e12);
  }

  add(num1, num2) {
    thisLogger.log(this.id); // public method calling private method
    const value = num1 + num2;
    return value;
  }
  multiply(num1, num2) {
    thisLogger.log(this.id); // public method calling private method
    const value = num1 * num2;
    return value;
  }
  divide(num1, num2) {
    thisLogger.log(this.id); // public method calling private method
    const value = num1 / num2;
    return value;
  }
  subtract(num1, num2) {
    thisLogger.log(this.id); // public method calling private method
    const value = num1 - num2;
    return value;
  }
}

module.exports = Calculator;