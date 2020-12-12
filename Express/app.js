// Importing Libraries 
const express = require("express");
const app = express();
const path = require("path");

const publicDir = path.join(__dirname);
app.use(express.static(publicDir));
//Importing Libraries 


app.get("/about", function (req, res) {

    res.send("this is about us page");

})

app.get("/contact", function (req, res) {

    res.send("this is contact us page");

})

app.get("/", function (req, res) {

    res.send("this is home page");

})


const capitalize = (str) => {

if(typeof str !=='string') return ""
return str.charAt(0).toUpperCase() + str.slice(1);

}


app.get("/users/:username/:id", function (req, res) {
    const username = req.params.username;
    const id = req.params.id;
    res.send("Welcome " +capitalize(username) + " Id :" + id);
})


app.get("/gallery", function (req, res) {

    res.sendFile(__dirname + "/gallery.html");

})


app.get("/help", (req, res) => {

    res.sendFile(__dirname + "/help.html");

});
app.listen(90);