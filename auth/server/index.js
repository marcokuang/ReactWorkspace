// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");

// app setup
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);
//app.get("/", (req, response) => response.redirect("/login"));
// server setup
const port = 3000;
const server = http.createServer(app);
server.listen(port, () => console.log(`Example app listening at port ${port}`));
