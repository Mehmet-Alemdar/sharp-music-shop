const BaseDatabase = require('./base-database')
const Instrument = require('../models/instrument')

class InstrumentDatabase extends BaseDatabase {
  async findInstrument() {
    return await this.load()
  }

  async findInstrumentByType(type) {
    const objects = await this.load()

    return objects.filter((o) => o.type == type)
  }

  async findInstrumentByCategory(category) {
    const objects = await this.load()

    return objects.filter((o) => o.category == category)
  }

  async findInstrumentByKind(kind) {
    const objects = await this.load()

    return objects.filter((o) => o.kind == kind)
  }

  async findInstrumentByBrand(brand) {
    const objects = await this.load()

    return objects.filter((o) => o.brand == brand)
  }

  //It is used when creating the order.
  async getFilterInstrument({ type, category, kind, brand, model, shop }) {
    const objects = await this.load()

    return objects.find(
      (o) =>
        o.type == type &&
        o.category == category &&
        o.kind == kind &&
        o.brand == brand &&
        o.model == model &&
        o.shop.name == shop
    )
  }
}

module.exports = new InstrumentDatabase(Instrument)
