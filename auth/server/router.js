const Authentication = require("./controllers/authentication");

module.exports = function (app) {
  app.get("/", (req, res) => {
    console.log(typeof req);
    res.send(["1234", "1234jkjasdf", "xxx", "paper", "ss"]);
  });
  app.post("/signup", Authentication.signup);
};
