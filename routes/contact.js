const expressFunct = require('express')
const expressObj = expressFunct.Router()
const contactdb = require("../model/contact") //ดึงโมเดล


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
    res.send({"data":"บันทึกข้อมูล"}) //api ต้องจบที่อันนี้ไม่งั้นแตก
  })
  module.exports = expressObj