const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  customer: {},
  destinatin: String,
  instrument: {},
  shop: {},
})

mondole.exports = mongoose.model('Order', OrderSchema)
