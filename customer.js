const Order = require('./order')

class Customer {
  constructor(name, address) {
    this.name = name
    this.address = address
    this.orderHistory = []
  }

  order(instrument) {
    const ordering = new Order(this, instrument)

    this.orderHistory.push(ordering)

    return ordering
  }
}

module.exports = Customer
