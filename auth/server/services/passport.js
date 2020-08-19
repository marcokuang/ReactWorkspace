const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");

exports.start = function () {
  // ceate local strategy
  const localOptions = {
    usernameField: "email",
    passwordField: "password",
    session: false,
  };
  const localLogin = new LocalStrategy(
    localOptions,
    (email, password, done) => {
      // verify username and password, call done with user
      // if it's the correct username and password,
      // otherwise call done with false
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (user) {
          // if user is found, check the password
          user.comparePassword(password, (err, isMatch) => {
            if (err) {
              return done(err);
            }
            if (!isMatch) {
              return done(null, false);
            }

            return done(null, user);
          });
        } else {
          done(null, false);
        }
      });
    }
  );

  // specify the jwt strategy options
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.secret,
  };
  console.log("setting up JWT Strategy");
  //create JWT strategy
  const jwtLogin = new JWTStrategy(jwtOptions, (payload, done) => {
    // check if the user ID in the payload exists in db
    // if it does, call done with user object
    // otherwise, call done without a user object
    console.log("\tPayload received at passport: ", payload);
    User.findById(payload.sub, (err, user) => {
      if (err) {
        return done(err, false);
      }

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  });

  // Tell passport to use the strategy
  passport.use(jwtLogin);
  passport.use(localLogin);
};
