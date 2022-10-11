let express = require('express');
let app = express();

// variables
const absolutePath = __dirname + "/views/index.html";

//Get access to environment variables/settings
require('dotenv').config();

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
//middleware call
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

// app.get('/', (req, res, next) => {
//     res.send("Hello Express");
// });

app.get('/', (req, res, next) => {
    res.sendFile(absolutePath);
});

app.get("/json", (req, res, next) => {
    const objectJSON = { "message": "Hello json" };

    if (process.env.MESSAGE_STYLE === "uppercase") {
        objectJSON.message = objectJSON.message.toUpperCase();
    }

    res.json(objectJSON);
});

app.get("/now", (req, res, next) => {
    const time = new Date().toString();
    console.log(time);
    next();
});

app.get("/now", (req, res, next) => {

});

























module.exports = app;
