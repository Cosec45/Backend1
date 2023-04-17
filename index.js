const expressFunct = require('express')
const expressObj = expressFunct()
expressObj.use(expressFunct.json())
const mongoose = require('mongoose')
let userdb = null
let tourDomestic = null
let tourForeign = null

const cors = require('cors')

expressObj.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
)
expressObj.use(
  cors({
    origin: ['http://localhost:4200/'],
  })
)
expressObj.get('/api/users', async function (req, res) {
  res.send(await userdb.find())
})
expressObj.get('/api/tourDomestic', async function (req, res) {
  res.send(await tourDomestic.find())
})

expressObj.get('/api/tourDomestic/:id', async function (req, res) {
  const id = req.params.id
  const result = await tourDomestic.find()
  console.log(result)
  res.send(...result.filter((onetourD) => onetourD.id == id))
})

expressObj.get('/api/tourForeign', async function (req, res) {
  res.send(await tourForeign.find())
})

expressObj.get('/api/tourForeign/:id', async function (req, res) {
  const id = req.params.id
  const result = await tourForeign.find()
  console.log(result)
  res.send(...result.filter((onetourD) => onetourD.id == id))
})

const port = process.env.PORT || 3000
expressObj.listen(port, async function () {
  console.log(`Listening on port: `, port)
  // mongodb://localhost:27017
  console.log('connecting ...')
  await mongoose.connect(
    'mongodb+srv://tour:tour123456@tourdb.ycba4cx.mongodb.net/tour_db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  const userSchema = mongoose.Schema({
    name: { type: String },
    lname: { type: String },
    email: { type: String },
    phone: { type: String },
    username: { type: String },
    password: { type: String },
  })
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
    arrayimg: [{type: String}]
  })
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
    arrayimg: [{type: String}]
    },
    {
      versionKey: false, // You should be aware of the outcome after set to false
    }
  )

  console.log('connection success')
  userdb = mongoose.model('user', new mongoose.Schema(userSchema), 'user') //userตามชื่อ collection ใน db
  tourForeign = mongoose.model(
    'tourForeign',
    new mongoose.Schema(tourFSchema),
    'tourForeign'
  )
  tourDomestic = mongoose.model(
    'tourDomestic',
    new mongoose.Schema(tourDchema),
    'tourDomestic'
  )
})
