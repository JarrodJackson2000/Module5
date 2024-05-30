const axios = require("axios");

class Retriever {
  constructor() {}
  async retrieveData() {
    let result = await this.#retrieve();
    return result;
  }
  async #retrieve() {
    const response = axios.get("https://fakestoreapi.com/products");
    let result = await response;
    return result.data;
  }
}
module.exports = { Retriever };
