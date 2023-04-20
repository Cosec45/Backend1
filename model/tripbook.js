const mongoose = require('mongoose')
const tripbookSchema = mongoose.Schema({
    name: { type: String },
      lname: { type: String },
      email: { type: String },
      phone: { type: String },
      guest: { type: String },
      numday:{ type: String },
      tripdateS:{ type:String },
      tripdateE:{ type:String },
    })
    const Tripbookdb = mongoose.model('book', new mongoose.Schema(tripbookSchema), 'book')
    module.exports = Tripbookdb