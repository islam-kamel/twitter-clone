const express = require("express");
const app = express();
const socket = require("socket.io");
const path = require("path");
const PORT = 3008;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.listen(PORT)