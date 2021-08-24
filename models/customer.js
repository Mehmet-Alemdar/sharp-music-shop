const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2 },
  surname: { type: String, required: true, minLength: 2 },
  email: String,
  phoneNumber: String,
  password: String,
  address: String,
  orderHistory: [],
})

module.exports = mongoose.model('Customer', CustomerSchema)
