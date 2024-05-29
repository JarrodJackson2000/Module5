const express = require("express");

const myAppRouter = require("./routes/myAppRoutes");
const app = require("./app");
const userRouter = require("./routes/userRoutes");
//const app2 = express()
const cors = require("cors");

const port = 3000;
//const port2 = 3001
let corsOptions = {
  origin: "http://localhost:5500",
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/Test", myAppRouter);

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(
    `Server has started and listening incoming request on port ${port}`
  );
});

/*app2.listen(port2, ()=> {
    console.log(`Server2 has started on port ${port2}`)
})*/
