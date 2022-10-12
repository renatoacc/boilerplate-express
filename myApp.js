let express = require('express');
let app = express();
let bodyParser = require('body-parser');
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

app.use((req, res, next) => {
    bodyParser.urlencoded({ extended: false });
    next();
});

app.use(bodyParser.json());


const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
}

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

app.get("/now", middleware, (req, res, next) => {
    res.json({ "time": req.time });
});

app.get("/:word/echo", (req, res, next) => {
    res.json({ echo: req.params.word });
});

app.get("/name", (req, res, next) => {
    res.json({ name: req.query.first + " " + req.query.last });
});

app.post("/name", (req, res, next) => {
    res.json({ name: req.body.first + " " + req.body.last });
})
























module.exports = app;
