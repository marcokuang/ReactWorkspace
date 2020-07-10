const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

// setting the session to false is to tell passport do not create a session for the request
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });
passportService.start();
module.exports = function (app) {
  app.get("/", requireAuth, (req, res) => {
    res.send(["1234", "1234jkjasdf", "xxx", "paper", "ss"]);
  });
  app.post("/signup", Authentication.signup);

  app.post("/signin", requireSignin, Authentication.signin);
};
