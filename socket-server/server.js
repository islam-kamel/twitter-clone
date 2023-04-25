const {
    server,
    PORT,
    io,
    qs,
    cors,
    app,
    path
} = require("./config");

// OAuth Routers
app.use(cors())
require("./routes/googleCallback");
require("./routes/githubCallback");

/*
*
* Sample function to privet chat between two user
*
*/
io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("joinChat", room => {
        socket.join(room);
        console.log(socket.rooms)
    })

    socket.on("sendMessage", message => {
        socket.broadcast.to(message?.room).emit("newMessage", message);
    })

    /**
     * Vedio Call
     */
    socket.emit('me', socket.id)

    socket.on('disconnect', () => {
        socket.broadcast.emit('callEnd')
    })

    socket.on('callUser', (data) => {
        io.to(data.userToCall).emit("callUser", {signal: data.signalData, from: data.from, name: data.name})
    })

    socket.on('answerCall', (data) => {
        io.to(data.to).emit('callAccepted', data.signal)
    })
})

// Server
server.listen(PORT, () => {
    console.log("listening on localhost:3008");
});

io.listen(4000)
