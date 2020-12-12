const express = require("../express");
const app = express();

app.get("/about",function(req,res){

    res.send("this is about us page");

});

app.listen(90);
