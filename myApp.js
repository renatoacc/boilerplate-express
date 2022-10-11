let express = require('express');
let app = express();

// app.listen(()=> 3000);
console.log("Hello World");

app.get('/', (req, res, next) => {
    // res.send("Hello Express");
    const absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})

app.use(__dirname + "/public");































module.exports = app;
