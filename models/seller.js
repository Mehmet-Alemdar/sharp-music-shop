const Instrument = require('./instrument')
const uuid = require('uuid')
class Seller {
  constructor(id = uuid.v4(), name, instruments = [], orderHistory = []) {
    this.id = id
    this.name = name
    this.instruments = instruments
    this.orderHistory = orderHistory
  }

  addInstrument(instrument) {
    this.instruments.push(instrument)
  }

  addSalesMade(order) {
    this.orderHistory.push(order)
  }

  static create({ id, name, instruments, orderHistory }) {
    return new Seller(id, name, instruments, orderHistory)
  }
}

module.exports = Seller
