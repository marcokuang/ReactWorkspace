// it's the user model class
const User = require("../models/user");
const e = require("express");

exports.signup = function (req, res, next) {
  //res.send({ success: "true" });

  // req.body has everything contained in the request's body
  const email = req.body.email;
  const password = req.body.password;
  //if a user with the given email exists
  User.findOne({ email: email }, (err, existingUser) => {
    // if a user with email exists, return an error
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: "email is in use" });
    }
  });
  // if (req.body.email) {
  //   return res.send({
  //     status: "true",
  //   });
  // }

  // return res.send({
  //   status: "false",
  // });

  // if a user with email does not exist, create and save user record
  const user = new User({
    email: email,
    password: password,
  });

  user.save((err) => {
    if (err) {
      return next(err);
    }
    // respond to request indicating the user was created
    res.json({ success: true });
  });
};
