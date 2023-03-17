const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});
const cors = require("cors");
const PORT = 3008;

app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello, Socket")
})

io.on("connection", (socket) => {
    console.log("New connect", socket.id);
    socket.on("message", args => {
        console.log(args)
    });
})

io.listen(PORT, () => {
    console.log('listening on localhost:3000');
});
