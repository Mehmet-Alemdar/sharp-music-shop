const BaseDatabase = require('./base-database')
const customerDatabase = require('./customer-database')
const instrumentDatabase = require('./instrument-database')
const shopDatabase = require('./shop-database')

const Order = require('../models/order')

class OrderDatabase extends BaseDatabase {
  async createOrder(customerId, destination, instrumentId) {
    const customer = await customerDatabase.find(customerId)
    const instrument = await instrumentDatabase.find(instrumentId)
    //console.log(instrument.shop._id)
    const shopId = instrument.shop._id
    const shop = await shopDatabase.find(shopId)

    const order = await this.insert({ customer, destination, instrument, shop })

    customer.orderHistory.push(order)
    shop.orderHistory.push(order)
    await customer.save()
    await shop.save()

    await instrumentDatabase.removeBy('_id', instrumentId)

    const updatedShop = await shopDatabase.find(shopId)
    await shopDatabase.update(shopId, updatedShop)

    return order
  }
}

module.exports = new OrderDatabase(Order)
