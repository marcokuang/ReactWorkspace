const express = require("express");
const socket = require("socket.io");

const app = express();
const port = 8080;

let globalRecords = { default: [] };

const server = app.listen(port, () => {
  console.log(`Listening at localhost: ${port}`);
});

app.use(express.static("public"));
const io = socket(server);

io.on("connection", (socket) => {
  console.log(`Made connection with socket ${socket.id}`);
  // when client initially connects to the server, the default chat room is given
  let currentRoom = "default";

  // when the "room" event is requested from client, update the currentRoom id and reset
  // chat records
  socket.on("room", (room) => {
    if (room !== currentRoom) {
      // if the new requested room is different from the current one
      // exit the chat room
      socket.leave(currentRoom);
    }
    currentRoom = room;

    // make sure the chat room record is initialized
    if (globalRecords[room] === undefined) {
      globalRecords[room] = [];
    }

    // client joins the chat room requested
    socket.join(room);
    if (globalRecords[currentRoom].length !== 0) {
      // when the chat records exist, send the records to the client
      io.sockets.in(currentRoom).emit("chat", globalRecords[currentRoom]);
    } else {
      io.sockets.in(currentRoom).emit("chat", []);
    }
  });

  socket.on("chat", (data) => {
    // when the client sends new data to chat room, add it to the chat record
    globalRecords[currentRoom] = [...globalRecords[currentRoom], data];
    // send messages in a givin room
    // console.log("current chat room", currentRoom);
    console.log(globalRecords);
    io.sockets.in(currentRoom).emit("chat", globalRecords[currentRoom]);
  });

  socket.on("typing", (data) => {
    // send messages in a givin room
    socket.broadcast.to(currentRoom).emit("typing", data.userName);
  });

  socket.on("finishTyping", (data) => {
    socket.broadcast.to(currentRoom).emit("finishTyping", data.userName);
  });
});
