const uuid = require('uuid')

class Instrument {
  constructor(id = uuid.v4(), type, category, kind, brand, model, price, shop) {
    this.id = id
    this.type = type
    this.category = category
    this.kind = kind
    this.brand = brand
    this.model = model
    this.price = price
    this.shop = shop
  }

  static create({ id, type, category, kind, brand, model, price, shop }) {
    return new Instrument(id, type, category, kind, brand, model, price, shop)
  }
}

module.exports = Instrument
