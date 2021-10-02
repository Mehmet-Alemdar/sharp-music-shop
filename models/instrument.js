const mongoose = require('mongoose')

const InstrumentSchema = new mongoose.Schema({
  type: String,
  category: String,
  kind: String,
  brand: String,
  model: String,
  price: Number,
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    autopopulate: { maxDepth: 1 },
  },
})

InstrumentSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Instrument', InstrumentSchema)
