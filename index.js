const path = require("path");
const express = require("express");
const app = express(); // create express app

const compress = require("compression");

app.use(compress());

app.use(express.static("src"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server started on port " + port);
});
