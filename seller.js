const Instrument = require('./instrument')

class Seller {
  constructor(name) {
    this.name = name
    this.instruments = []
    this.salesMade = []
  }

  addInstrument(type, kind, model, price) {
    const instrument = new Instrument(type, kind, model, price, this)

    this.instruments.push(instrument)

    return instrument
  }

  addSalesMade(order) {
    this.salesMade.push(order)
  }
}

module.exports = Seller
