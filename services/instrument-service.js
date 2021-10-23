const BaseService = require('./base-service')
const Instrument = require('../models/instrument')
const shopService = require('./shop-service')

class InstrumentService extends BaseService {
  async findInstrument() {
    return await this.load()
  }

  async createInstrument(
    type,
    category,
    kind,
    brand,
    model,
    price,
    stock,
    shopId
  ) {
  async createInstrument(type, category, kind, brand, model, price, shopId) {
    const shop = await shopService.find(shopId)

    const instrument = await this.insert({
      type,
      category,
      kind,
      brand,
      model,
      price,
      stock,
    })

    shop.instruments.push(instrument)

    await shop.save()

    return instrument
  }
}

module.exports = new InstrumentService(Instrument)
