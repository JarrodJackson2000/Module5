const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const dataRouter = require("./routes/dataRoute");

app.use("/Data", dataRouter);

module.exports = app;
