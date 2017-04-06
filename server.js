const express = require("express");

const app = express()

app.set('view engine', 'pug');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('index');
});

app.get('/signin', (req, res) => {
    res.render('index');
});

app.listen(3000, (err) => {
    if (err) return console.log("Error on server start"), process.exit(1);
    console.log("Server running at http://localhost:3000");
});
