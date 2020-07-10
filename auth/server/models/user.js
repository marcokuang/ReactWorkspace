const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the data model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

//Create the model class
const modelClass = mongoose.model("user", userSchema);

//export the model
module.exports = modelClass;
