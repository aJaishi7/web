const express = require('express');
const app = express();
const port = 90;
const path = require('path');

const publicUrl = path.join(__dirname);
app.use(express.static(publicUrl));


const arrExt = ['jpg', 'png', 'jpeg', 'git'];

app.get('/public/:images', (req, res) => {

    const images = req.params.images;
    if (!arrExt) {
        res.send("File Not Found");
    } else {
        res.sendFile(__dirname + "/public/images/" + images + "." + "png");
    }


});


app.listen(port, () => {
    console.log(`Port Listening At: http://localhost:${port}`);
})