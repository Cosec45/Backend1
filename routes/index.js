const expressFunct = require('express')
const expressObj = expressFunct.Router()

const contact = require("./contact")
const trip = require("./trip")
const tourD = require("./tourD")
const tourF = require("./tourF")
const payment = require("./payment")
const tripbook = require("./tripbook")
const user = require("./user")

//เพิ่ม route แต่ละ route
expressObj.use(contact)
expressObj.use(trip)
expressObj.use(tourF)
expressObj.use(tourD)
expressObj.use(payment)
expressObj.use(tripbook)
expressObj.use(user)

module.exports = expressObj //ส่งไปหน้า index ดึงทุกหน้า
 
  
  
  
  
  
  
  
  
  
  