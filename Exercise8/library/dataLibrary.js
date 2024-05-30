const axios = require("axios");

class Retriever {
  constructor() {}
  async retrieveData() {
    let data = await this.#retrieve();
    console.log("Some text");
    return data;
  }
  async #retrieve() {
    await axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log("retrieve called");
      return response.data;
    });
  }
}
module.exports = { Retriever };
