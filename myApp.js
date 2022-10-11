let express = require('express');
let app = express();
require('dotenv').config();

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
    // const objectJSON = { "message": "Hello json" };
    res.json(process.env.MESSAGE_STYLE);
})





























module.exports = app;
