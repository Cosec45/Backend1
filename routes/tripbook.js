const expressFunct = require('express')
const expressObj = expressFunct.Router()
const tripbookdb = require("../model/tripbook")

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
    res.send({"data":"บันทึกข้อมูลสำเร็จ"}) //api ต้องจบที่อันนี้ไม่งั้นแตก
  })

  module.exports = expressObj