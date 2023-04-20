const mongoose = require('mongoose')
const tourFSchema = mongoose.Schema(
    {
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
    
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
    }
    )
    const TourForeign = mongoose.model(
        'tourForeign',
        new mongoose.Schema(tourFSchema),
        'tourForeign'
        )
    module.exports = TourForeign
