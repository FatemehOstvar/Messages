
const express = require("express");
const app= express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('index', {messages});
})
app.get('/new', (req, res) => {
    res.render('form');
})

app.post('/detail', (req, res) => {
    res.render('detail',{user: req.body.user, text:req.body.text, date: req.body.date});
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