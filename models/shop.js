const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: Number,
  instruments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instrument',
      autopopulate: { maxDepth: 1 },
    },
  ],
  orderHistory: [],
})

module.exports = mongoose.model('Shop', ShopSchema)
