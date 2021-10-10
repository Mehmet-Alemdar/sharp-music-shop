const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    autopopulate: { maxDepth: 1 },
  },
  destination: String,
  instrument: {},
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    autopopulate: { maxDepth: 1 },
  },
})

OrderSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Order', OrderSchema)
