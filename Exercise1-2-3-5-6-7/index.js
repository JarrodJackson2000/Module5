const app = require("./app");

const port = 3000;

app.listen(port, () => {
  console.log(
    `Server has started and listening incoming request on port ${port}`
  );
});

/*app2.listen(port2, ()=> {
    console.log(`Server2 has started on port ${port2}`)
})*/
