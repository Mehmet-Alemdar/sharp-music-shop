const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 1 },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 3 },
  phoneNumber: Number,
  instruments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instrument',
      autopopulate: { maxDepth: 1 },
    },
  ],
})

ShopSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Shop', ShopSchema)
