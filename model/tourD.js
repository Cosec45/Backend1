const mongoose = require('mongoose')
const tourDchema = mongoose.Schema({
    id: { type: Number },
    domesticOrForeign: { type: String },
    location: { type: String },
    place: { type: String },
    pricePerPerson: { type: String },
    amountReceived: { type: String },
    ageRange: { type: String },
    tourOperator: { type: String },
    operatedIn: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    booker: { type: String },
    img: { type: String },
    tourId: { type: String },
    arrayimg: [{type: String}],
    day: { type: String }
  })
  const TourDomestic = mongoose.model('tourDomestic',new mongoose.Schema(tourDchema),'tourDomestic')
  module.exports = TourDomestic
