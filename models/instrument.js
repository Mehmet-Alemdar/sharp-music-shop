const mongoose = require('mongoose')

const InstrumentSchema = new mongoose.Schema({
  type: String,
  category: String,
  kind: String,
  brand: String,
  model: String,
  price: Number,
  shop: {},
})

module.exports = mongoose.model('Instrument', InstrumentSchema)
