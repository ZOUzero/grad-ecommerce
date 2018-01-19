const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  }
})

module.exports = mongoose.model("user", UserSchema)
