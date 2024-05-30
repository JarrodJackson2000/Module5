const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const dataRouter = require("./routes/dataRoute");

app.use("/Data", dataRouter);

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
