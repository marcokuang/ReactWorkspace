const socket = io("ws://192.168.0.6:8080");

// get dom elements
var message = document.getElementById("message");
var userName = document.getElementById("userName");
var sendBtn = document.getElementById("send");
var messages = document.getElementById("messages");
var typing = document.getElementById("typing");

let room = document.querySelector("#room");
let selectedRoom = room.value;

room.addEventListener("change", (e) => {
  console.log("Room Changed!!!");
  socket.emit("room", room.value);
});

sendBtn.addEventListener("click", (e) => {
  socket.emit("chat", { message: message.value, userName: userName.value });
  socket.emit("finishTyping", { message: userName.value });
  message.value = "";
});

message.addEventListener("keypress", (e) => {
  socket.emit("typing", { userName: userName.value });
});

message.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    sendBtn.click();
  }
});

socket.on("connect", (data) => {
  // either with send()
  console.log("Hello!", data);
  socket.emit("room", selectedRoom);
});

socket.on("chat", (data) => {
  console.log(data);
  messages.innerHTML = data
    .map((msg) => `<p><strong>${msg.userName}:</strong>  ${msg.message}</p>`)
    .join("");
});

socket.on("typing", (data) => {
  typing.innerHTML = `<p><em> ${data} is typing </em></p>`;
});

socket.on("finishTyping", (data) => {
  typing.innerHTML = "";
});
