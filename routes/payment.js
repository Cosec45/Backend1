const expressFunct = require('express')
const expressObj = expressFunct.Router()
const paymentdb = require("../model/payment")

expressObj.get('/api/payment', async function (req, res) {
    res.send(await paymentdb.find())
  })
  
  expressObj.post('/api/payment', async function (req, res) {
    
    const obj = Object.assign({},req.body)
    console.log(obj)
    const payment = {
      cardnum: obj.body.cardnum,
      numoncard: obj.body.numoncard,
      exdate: obj.body.exdate,
      cvv: obj.body.cvv,
    }
    paymentdb.create(payment).then((result) => {
      console.log(payment)
      console.log(result)
    
    })
    res.send({"data":"บันทึกข้อมูล"}) //api ต้องจบที่อันนี้ไม่งั้นแตก
  })
  module.exports = expressObj
