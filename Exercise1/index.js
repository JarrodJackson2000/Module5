const express = require("express");
const app = express();
const myAppRouter = require("./routes/routes");
const app2 = express();

const port = 3000;
const port2 = 3001;

let portArray = [port, port2];

function appLive() {
  portArray.forEach((port) => {
    const app = express();
    app.use("/Test", myAppRouter);
    app.listen(port, () => {
      console.log(
        `Server has started and listening incoming request on port ${port}`
      );
    });
  });
}

appLive();
/*app.use("/Test", myAppRouter);
app.listen(port, () => {
  console.log(
    `Server has started and listening incoming request on port ${port}`
  );
});

app2.use("/Test", myAppRouter);

app2.listen(port2, () => {
  console.log(`Server2 has started on port ${port2}`);
});*/
