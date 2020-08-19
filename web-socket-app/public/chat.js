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
  e.preventDefault();
  console.log("ButtonClick");
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
    console.log("Enter pressed");
    // sendBtn.click();
  }
});

socket.on("connect", (data) => {
  // either with send()
  console.log("Hello!", data);
  socket.emit("room", selectedRoom);
});

socket.on("chat", (data) => {
  console.log(data);
  let fragment = document.createDocumentFragment();
  let HTMLData = data.map((msg) => {
    let node = document.createElement("div");
    node.className = "message";
    node.innerHTML = `<p><strong>${msg.userName}:</strong>  ${msg.message}</p>`;
    fragment.appendChild(node);
    return node;
  });
  if (HTMLData.length > 0) {
    messages.replaceChildren(fragment);
  }
  console.log(fragment.childElementCount);
});

socket.on("typing", (data) => {
  typing.innerHTML = `<p><em> ${data} is typing </em></p>`;
});

socket.on("finishTyping", (data) => {
  typing.innerHTML = "";
});
