const expressFunct = require('express')
const expressObj = expressFunct.Router()
const tourForeign = require("../model/tourF")

expressObj.get('/api/tourForeign', async function (req, res) {
    res.send(await tourForeign.find())
  })
  
  expressObj.get('/api/tourForeign/:id', async function (req, res) {
    const id = req.params.id
    const result = await tourForeign.find()
    console.log(result)
    res.send(...result.filter((onetourD) => onetourD.id == id))
  })
  module.exports = expressObj