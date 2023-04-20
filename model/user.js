const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: { type: String },
    lname: { type: String },
    email: { type: String },
    phone: { type: String },
    username: { type: String },
    password: { type: String },
  })
  const Userdb = mongoose.model('user', new mongoose.Schema(userSchema), 'user')
  module.exports = Userdb