const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello, Express!");
});

app.get("/hello", (req, res)=>{
    res.send("Hello, world!");
});

app.post("/addComment", (req, res)=>{
    res.send("POST on addComment");
});

app.delete("/testingDelete", (req, res)=>{
    console.log("Delete request");
});

app.get("/findSummation/:n/:m", (req, res) => {
    const n = req.params.n;
    const m = req.params.m;
    const total = Number(n) + Number(m);
    console.log(`The sum of ${n} and ${m} is ${total}.`);
    
    // Send the response back to the client
    res.send(`The sum of ${n} and ${m} is ${total}.`);
  });

  app.get("/sayHelloTo", (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    
    // Send the response back to the client
    res.send(`Hello, ${name}.`);
  });


app.listen(8000, ()=>{
    console.log("I'm listening in port 8000");
});