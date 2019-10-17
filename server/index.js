const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const port = process.env.port || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require("./router");

io.on("connection", socket => {
  console.log("we have a new connection");

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("left");
  });
});

app.use(router);

server.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
