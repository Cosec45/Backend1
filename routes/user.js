const expressFunct = require('express')
const expressObj = expressFunct.Router()
const userdb = require("../model/user")

expressObj.get('/api/users', async function (req, res) {
    res.send(await userdb.find())
  })
  module.exports = expressObj