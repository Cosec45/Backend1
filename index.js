const expressFunct = require('express')
const expressObj = expressFunct()
expressObj.use(expressFunct.json())
const mongoose = require('mongoose')
let userdb = null;

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
    res.send(await userDb.find())
  })


const port = process.env.PORT || 3000
expressObj.listen(port, async function () {
  console.log(`Listening on port: `, port)
  // mongodb://localhost:27017
  console.log('connecting ...')
  await mongoose.connect('mongodb+srv://tour:tour123456@cluster0.smhvlzt.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const userSchema = mongoose.Schema(
    {
      name: { type: String },
      lname: { type: String },
      email: { type: String },
      tol: { type: String }
    },
    {
        versionKey: false, // You should be aware of the outcome after set to false
      }
    )

  console.log('connection success')
  userdb = mongoose.model('users', new mongoose.Schema(userSchema), 'users')
})