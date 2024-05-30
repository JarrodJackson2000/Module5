const express = require("express");

const app = express();

const cors = require("cors");

const myAppRouter = require("./routes/myAppRoutes");

const userRouter = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
const calRouter = require("./routes/calculatorRoutes");
app.use("/Calculator", calRouter);

app.use("/Test", myAppRouter);

app.use("/users", userRouter);

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
