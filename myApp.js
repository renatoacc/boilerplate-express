let express = require('express');
let app = express();

//Get access to environment variables/settings
require('dotenv').config();
// require('dotenv/config');


// app.listen(()=> 3000);
console.log("Hello World");

app.get('/', (req, res, next) => {
    // res.send("Hello Express");
    const absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res, next) => {
    const objectJSON = { "message": "Hello json" };

    if (process.env.MESSAGE_STYLE === "uppercase") {
        objectJSON.message = objectJSON.message.toUpperCase();
    }

    res.json(objectJSON);
});

app.use(function middleware(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})



























module.exports = app;
