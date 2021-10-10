const BaseService = require('./base-service')
const customerService = require('./customer-service')
const instrumentService = require('./instrument-service')
const shopService = require('./shop-service')

const Order = require('../models/order')

class OrderService extends BaseService {
  async createOrder(customerId, destination, instrumentId) {
    const customer = await customerService.find(customerId)
    const instrument = await instrumentService.find(instrumentId)
    //console.log(instrument.shop._id)
    const shopId = instrument.shop._id
    const shop = await shopService.find(shopId)

    const order = await this.insert({ customer, destination, instrument, shop })

    customer.orderHistory.push(order)
    shop.orderHistory.push(order)
    await customer.save()
    await shop.save()

    await instrumentService.removeBy('_id', instrumentId)

    const updatedShop = await shopService.find(shopId)
    await shopService.update(shopId, updatedShop)

    return order
  }
}

module.exports = new OrderService(Order)
