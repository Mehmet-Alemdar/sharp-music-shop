const mongoose = require('mongoose')

const InstrumentSchema = new mongoose.Schema({
  type: { type: String, required: true, minLength: 1},
  category: { type: String, required: true, minLength: 1 },
  kind: { type: String, required: true, minLength: 1},
  brand: { type: String, required: true, minLength: 1 },
  model: { type: String, required: true, minLength: 1 },
  price: { type: Number, required: true, minLength: 1 },
  stock: { type: Number, required: true, minLength: 1 },
  imageUrl : {type: String, required:true},
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    autopopulate: { maxDepth: 1 },
  }
})

InstrumentSchema.index({ '$**': 'text' })

InstrumentSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Instrument', InstrumentSchema)
