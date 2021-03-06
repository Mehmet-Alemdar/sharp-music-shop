const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    autopopulate: { maxDepth: 1 },
  },
  destination: { type: String, required: true, minLength: 2 },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 1 },
  instrument: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instrument',
    autopopulate: { maxDepth: 1 },
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    autopopulate: { maxDepth: 1 },
  },
})

OrderSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Order', OrderSchema)
