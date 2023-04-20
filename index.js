const expressFunct = require('express')
const expressObj = expressFunct()
expressObj.use(expressFunct.json())
const route = require('./routes/index') //ดึง route index
const mongoose = require('mongoose')

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
expressObj.use(route) //เพิ่มroute เข้ามาในexpress



// สั่งเปิด sever รับ req ที่ พอร์ต 3000 รันตลอดเวลา
const port = process.env.PORT || 3000
// รัน 3000 ตลอด
expressObj.listen(port, async function () {
  console.log(`Listening on port: `, port)
  console.log('connecting ...')
  await mongoose.connect(
    'mongodb+srv://tour:tour123456@tourdb.ycba4cx.mongodb.net/tour_db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  console.log('connection success')
})
