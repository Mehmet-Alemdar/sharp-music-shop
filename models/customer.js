const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2 },
  surname: { type: String, required: true, minLength: 2 },
  email: String,
  phoneNumber: Number,
  password: String,
  address: String,
  // orders
  // orders: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Order',
  //     autopopulate: { maxDepth: 2 },
  //   },
  // ],
})

CustomerSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Customer', CustomerSchema)
