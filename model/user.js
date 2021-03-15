const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password fiels id required"],
  },
  farmid: {
    type: String,
    required: [true, "Farm Id is required"],
    unique: true,
  },
});

//static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email: email });
  if (user) {
    const auth = await password.localeCompare(user.password);
    if (!auth) {
      return user;
    } else {
      throw Error("Incorrect password");
    }
  }
  throw Error("Incorrect email");
};

const User = mongoose.model("farmuser", userSchema); //this is the collection name on mongodb

module.exports = User;
