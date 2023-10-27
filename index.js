const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, NodeJs users!");
});

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

app.post("/addComment", (req, res) => {
  res.send("POST on addComment");
});


app.get("/findSummation/:n/:m", (req, res) => {
  const n = req.params.n;
  const m = req.params.m;
  const total = Number(n) + Number(m);
  console.log(`The sum of ${n} and ${m} is ${total}.`);

  // Send the response back to the client as a json
  res.json({ num1: n, num2: m, total: total });
});

app.get("/sayHelloTo", (req, res) => {
  const name = req.body.name;
  console.log(req.body);

  // Send the response back to the client
  res.send(
    `Hello, ${name}. Your name has ${name.length} letters. And your Age should be ${req.query.age} years old.`
  );
});

app.listen(8000, () => {
  console.log("I'm listening in port 8000");
});
