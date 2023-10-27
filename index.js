const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const Article = require('./models/Article'); // Import the Article model.

const app = express();

const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;

const uri = `mongodb+srv://${userName}:${password}@nodejscluster.fies2xa.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log("Error in connecting with th DB ",err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, NodeJs users!");
});

//Read Prams and Query
app.get("/sayHelloTo", (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    res.send(
      `Hello, ${name}. Your name has ${name.length} letters. And your Age should be ${req.query.age} years old.`
    );
  });

//Server side rendered pages
app.get("/hello", (req, res) => {
  res.sendFile(__dirname + "/views/hello.html");
});

app.get("/welcome", (req, res) => {
    res.render("welcome.ejs", { name: req.query.name , age: req.query.age});
});

//Client side rendered pages
app.get("/findSummation/:n/:m", (req, res) => {
  const n = req.params.n;
  const m = req.params.m;
  const total = Number(n) + Number(m);
  console.log(`The sum of ${n} and ${m} is ${total}.`);

  // Send the response back to the client as a json
  res.json({ num1: n, num2: m, total: total });
});


//CRUD Operations on Article entity
//Create
app.post("/articles", (req, res) => {
    const article = new Article({
        title: req.body.title,
        body: req.body.body,
        NumberOfLikes: req.body.NumberOfLikes,
    });
    article
        .save()
        .then((result) => {
        console.log("New article added ",result);
        res.json(result);
        })
        .catch((err) => console.log(err));
    } );

//Read with async/await
app.get("/articles", async (req, res) => {
    try{
        const articles = await Article.find();
        console.log("All articles ",articles);
        res.render("articles.ejs", { articles: articles });
    }catch(err){
        console.log("Error when reading articles ", err);
    }   
} );

//Delete
app.delete("/articles/:id", (req, res) => {
    const id = req.params.id;
    Article.findByIdAndDelete(id)
        .then((result) => {
        console.log("Article deleted ",result);
        res.json(result);
        })
        .catch((err) => console.log(`Error on deleting this article with id : ${id}`,err));
    } );


app.listen(8000, () => {
  console.log("I'm listening in port 8000");
});
