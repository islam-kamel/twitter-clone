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

const {v4: uuid} = require('uuid')

const withTimeout = (onSuccess, onTimeout, timeout) => {
  let called = false;

  const timer = setTimeout(() => {
    if (called) return;
    called = true;
    onTimeout();
  }, timeout);

  return (...args) => {
    if (called) return;
    called = true;
    clearTimeout(timer);
    onSuccess.apply(this, args);
  }
}


/*
*
* Sample function to privet chat between two user
*
*/
io.on("connection", (socket) => {
  console.log(socket.id)
  /**
   * Vedio Call
   */


  io.on("connection", (socket) => {
    // socket.emit("me", socket.id)

    socket.on('join', (channelId) => {
      if (channelId) {
        socket.join(channelId)
      }
    })

    socket.on('send-notifications', (notify) => {
      const id = uuid();
      socket.to(notify.to).emit('receive-notifications', {...notify, id})
    })

    // socket.on('receive-notifications', (notify) => {
    //   console.log(notify)
    //   socket.to(notify.to).emit(notify)
    // })

  })
})

// Server
server.listen(PORT, () => {
  console.log("listening on localhost:3008");
});

io.listen(4000)
