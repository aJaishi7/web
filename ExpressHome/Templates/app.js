const fs = require("fs");
const path = require("path");
const express = require("express");
const hbs = require('hbs');

const app = express();
const publicDir = path.join(__dirname);
app.use(express.static(publicDir));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    // res.sendFile(__dirname + '/home.html');
    const weather = "cool','windy','humid";
    const temp = "10 deg celcius";
    res.render('home', {
        'ww': weather,
        'temp': temp
    });

});

app.get('/student', (req, res) => {

    // res.sendFile(__dirname + '/student.html');
    res.render('student')

});

app.get('/teacher', (req, res) => {

    // res.sendFile(__dirname + '/teacher.html');
    res.render('teacher');

});

app.listen(90);