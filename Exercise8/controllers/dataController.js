const { Retriever } = require("../library/dataLibrary");

let myRetriever = new Retriever();

const Retrieve = async (req, res) => {
  let result = await myRetriever.retrieveData(req, res);
  res.send({ res: result });
};

module.exports = { Retrieve };
