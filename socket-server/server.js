const express = require("express");
const app = express();
const socket = require("socket.io");
const path = require("path");
const PORT = 3008;

app.get("/", (req, res) => {
    res.send("Hello, Socket")
})
app.listen(PORT)