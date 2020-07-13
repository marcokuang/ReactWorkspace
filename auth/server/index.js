// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

// db setup
mongoose.connect("mongodb://localhost:auth/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app setup
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
// it tells server to accept traffic from all
app.use(cors());
router(app);
//app.get("/", (req, response) => response.redirect("/login"));
// server setup
const port = 4000;
const server = http.createServer(app);
server.listen(port, () => console.log(`Example app listening at port ${port}`));
