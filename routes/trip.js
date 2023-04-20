const expressFunct = require('express')
const expressObj = expressFunct.Router()
const daydb = require("../model/trip")

expressObj.get('/api/tripdetail', async function (req, res) {
    res.send(await daydb.find())
  })
  expressObj.get('/api/tripdetail/:id', async function (req, res) {
    const id = req.params.id
    const result = await daydb.find()
    console.log(result)
    res.send(...result.filter((onetrip) => onetrip.id == id))
  })

  module.exports = expressObj
  