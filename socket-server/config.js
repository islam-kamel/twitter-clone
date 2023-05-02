const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
});

const qs = require("qs");
const cors = require("cors");
const PORT = 3008;

module.exports = {
    app,
    server,
    io,
    qs,
    cors,
    PORT
}
