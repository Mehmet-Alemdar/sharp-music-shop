const uuid = require('uuid')

class Instrument {
  constructor(id = uuid.v4(), type, kind, model, price, seller) {
    this.id = id
    this.type = type
    this.kind = kind
    this.model = model
    this.price = price
    this.seller = seller
  }

  static create({ id, type, kind, model, price, seller }) {
    return new Instrument(id, type, kind, model, price, seller)
  }
}

module.exports = Instrument
