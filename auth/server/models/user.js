const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
// define the data model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// on Save Hook, encrypt password
// Note: don't use arrow function here as 'this' would point to global scope
userSchema.pre("save", function (next) {
  // get access to the user model, which is the instance of the model class
  console.log(this);
  const user = this;

  // generate a salt then run the callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    // hass the password using the generated salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }

      //overwrite plain text with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePwd, callback) {
  bcrypt.compare(candidatePwd, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

//Create the model class
const modelClass = mongoose.model("user", userSchema);

//export the model
module.exports = modelClass;
