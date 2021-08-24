const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: Number,
  instruments: [],
  orderHistory: [],
})

module.exports = mongoose.model('Shop', ShopSchema)
