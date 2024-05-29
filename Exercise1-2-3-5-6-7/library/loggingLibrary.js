class Logger {
  constructor() {}
  #log = (id) => {
    // private method
    console.log(`Test: ${id}`);
  };
  log = (id) => {
    this.#log(id);
  };
}

module.exports = Logger;
