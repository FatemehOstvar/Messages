const messages = [
  {
    text: "Hi there",
    user: "Jon",
    added: new Date()
  },
  {
    text: "Hello World",
    user: "Setareh",
    added: new Date()
  },
    {
        text: "I miss you",
        user: "Johnson",
        added: new Date()
    }
];
const express = require("express");
const {join} = require("node:path");
const app= express();
app.use(express.urlencoded({ extended: true }));
// app.js
const assetsPath = join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('index', {messages});
})
app.get('/new', (req, res) => {
    res.render('form');
})

app.post('/new', (req, res) => {
    console.log(req.body);
    messages.push({text : req.body['message'], user : req.body['author'], added: new Date()});
    res.redirect('/');
})
port = 3000;
app.listen(port, () => {
console.log("Server started on port http://localhost:" + port);
})