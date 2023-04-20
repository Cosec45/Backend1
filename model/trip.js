const mongoose = require('mongoose')
const tripSchema = mongoose.Schema({
    id: { type: Number },
    place: { type: String },
    tourId: { type: String },
    day:[ { type: String }]
  })
  const Daydb = mongoose.model('day', new mongoose.Schema(tripSchema), 'day')
  module.exports = Daydb