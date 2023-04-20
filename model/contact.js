const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    massage: { type: String }
  })
  const Contactdb = mongoose.model('contact',new mongoose.Schema(contactSchema),'contact')
  module.exports = Contactdb //export ให้คนอื่นเอาไปใช้ต่อ