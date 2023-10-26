const express = require("express");

const app = express();

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

app.listen(8000, ()=>{
    console.log("I'm listening in port 8000");
});