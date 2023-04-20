const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    cardnum: { type: String },
    numoncard: { type: String },
    exdate: { type: String },
    cvv: { type: String }
  })
  const Paymentdb = mongoose.model('payment', new mongoose.Schema(paymentSchema), 'payment')
  module.exports = Paymentdb