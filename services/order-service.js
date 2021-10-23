const BaseService = require('./base-service')
const customerService = require('./customer-service')
const instrumentService = require('./instrument-service')
const shopService = require('./shop-service')

const Order = require('../models/order')

class OrderService extends BaseService {
  async createOrder(customerId, destination, quantity, instrumentId, shopId) {
    const customer = await customerService.find(customerId)
    const instrument = await instrumentService.find(instrumentId)
    //console.log(instrument.shop._id)
    const shop = await shopService.find(shopId)

    if (quantity <= 0) return 'invalid'

    const price = instrument.price * quantity

    let stock = instrument.stock
    if (stock >= quantity) {
      const order = await this.insert({
        customer,
        destination,
        quantity,
        price,
        instrument,
        shop,
      })
      stock -= quantity
      await instrumentService.update(instrumentId, { stock })

      return order
    }

    return 'not enough stock'
    await instrumentService.removeBy('_id', instrumentId)


    return order
  }
}

module.exports = new OrderService(Order)
