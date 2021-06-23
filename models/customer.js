const Order = require('./order')
const uuid = require('uuid')
class Customer {
  constructor(id = uuid.v4(), name, address, orderHistory = []) {
    this.id = id
    this.name = name
    this.address = address
    this.orderHistory = orderHistory
  }

  order(instrument) {
    const order = new Order(this, instrument)

    this.orderHistory.push(order)

    return order
  }

  static create({ id, name, address, orderHistory }) {
    return new Customer(id, name, address, orderHistory)
  }
}

module.exports = Customer
