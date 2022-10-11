let express = require('express');
let app = express();

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
    res.json({ "message": "Hello json" });
})





























module.exports = app;
