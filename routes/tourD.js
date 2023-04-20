const expressFunct = require('express')
const expressObj = expressFunct.Router()
const tourDomestic = require("../model/tourD")

expressObj.get('/api/tourDomestic', async function (req, res) {
    res.send(await tourDomestic.find())
  })
  
  expressObj.get('/api/tourDomestic/:id', async function (req, res) {
    const id = req.params.id
    const result = await tourDomestic.find()
    console.log(result)
    res.send(...result.filter((onetourD) => onetourD.id == id))
  })

  module.exports = expressObj
