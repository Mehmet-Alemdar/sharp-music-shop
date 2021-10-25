const BaseService = require('./base-service')
const Shop = require('../models/shop')
const instrumentService = require('./instrument-service')

class ShopService extends BaseService {
  findByShopName(name) {
    return this.findBy('name', name)
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
    const shop = await this.find(shopId)

    const instrument = await instrumentService.insert({
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

  async deleteTheShopAndItsInstruments(shopId) {
    const shop = await this.find(shopId)
    const shopInstrumentsId = []

    shop.instruments.map((i) => shopInstrumentsId.push(i._id))

    shopInstrumentsId.map(async (id) => {
      await instrumentService.removeBy('_id', id)
    })

    await this.removeBy('_id', shopId)
  }
}

module.exports = new ShopService(Shop)
