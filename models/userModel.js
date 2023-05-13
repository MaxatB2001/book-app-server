const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  images: {
    before: String,
    after: String,
  }
}, 
{
  minimize: false,
  timestamps: true 
})

const User = mongoose.model('User', userSchema)

module.exports = User