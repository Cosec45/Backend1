const expressFunct = require('express')
const expressObj = expressFunct()
expressObj.use(expressFunct.json())
const mongoose = require('mongoose')
let userdb = null
let tourDomestic = null
let tourForeign = null
let daydb = null
let contactdb =null
let tripbookdb = null


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
expressObj.get('/api/tripdetail', async function (req, res) {
  res.send(await daydb.find())
})

expressObj.get('/api/tripdetail/:id', async function (req, res) {
  const id = req.params.id
  const result = await daydb.find()
  console.log(result)
  res.send(...result.filter((onetrip) => onetrip.id == id))
})

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

expressObj.get('/api/contact', async function (req, res) {
  res.send(await contactdb.find())
})

expressObj.post('/api/contact', async function (req, res) {
  
  const obj = Object.assign({},req.body)
  console.log(obj)
  const contact = {
    name: obj.body.name,
    email: obj.body.email,
    phone: obj.body.phone,
    massage: obj.body.massage,
  }
  contactdb.create(contact).then((result) => {
    console.log(contact)
    console.log(result)
  
  })
  // res.send(req.body)
  res.send({"data":"บันทึกข้อมูล"}) //api ต้องจบที่อันนี้ไม่งั้นแตก
})
expressObj.get('/api/tripbook', async function (req, res) {
  res.send(await tripbookdb.find())
})

expressObj.post('/api/tripbook', async function (req, res) {
  
  const obj = Object.assign({},req.body)
  console.log(obj)
  const tripbook = {
    name: obj.body.name,
    lname: obj.body.lname,
    email: obj.body.email,
    phone: obj.body.phone,
    guest: obj.body.guest,
    numday:obj.body.numday,
    tripdateS:obj.body.tripdateS,
    tripdateE:obj.body.tripdateE,
  }
  tripbookdb.create(tripbook).then((result) => {
    console.log(tripbook)
    console.log(tripbook)
  
  })

  // res.send(req.body)
  res.send({"data":"บันทึกข้อมูลสำเร็จ"}) //api ต้องจบที่อันนี้ไม่งั้นแตก
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
  const userSchema = mongoose.Schema({
    name: { type: String },
    lname: { type: String },
    email: { type: String },
    phone: { type: String },
    username: { type: String },
    password: { type: String },
  })
  const contactSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    massage: { type: String }
  })
  const tripSchema = mongoose.Schema({
    id: { type: Number },
    place: { type: String },
    tourId: { type: String },
    day1: { type: String },
    day2: { type: String },
    day3: { type: String },
    day4: { type: String },
    day5: { type: String },
    day6: { type: String },
    day7: { type: String },
    day8: { type: String },
    day9: { type: String },
    day10: { type: String },
    day11: { type: String }
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
    arrayimg: [{type: String}],
    day: { type: String }
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
    arrayimg: [{type: String}],
    day: { type: String }

    },
    {
      versionKey: false, // You should be aware of the outcome after set to false
    }
  )

  console.log('connection success')
  userdb = mongoose.model('user', new mongoose.Schema(userSchema), 'user') //userตามชื่อ collection ใน db
  daydb = mongoose.model('day', new mongoose.Schema(tripSchema), 'day')
  tripbookdb = mongoose.model('book', new mongoose.Schema(tripbookSchema), 'book')
  contactdb = mongoose.model(
    'contact',
    new mongoose.Schema(contactSchema),
    'contact'
  )
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
