const Order = require('./order')
const uuid = require('uuid')
class Customer {
  constructor(
    id = uuid.v4(),
    name,
    surname,
    email,
    phoneNumber,
    password,
    address,
    orderHistory = []
  ) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phoneNumber = phoneNumber
    this.password = password
    this.address = address
    this.orderHistory = orderHistory
  }

  order(instrument) {
    const order = new Order(this, instrument)

    this.orderHistory.push(order)

    return order
  }

  static create({
    id,
    name,
    surname,
    email,
    phoneNumber,
    password,
    address,
    orderHistory,
  }) {
    return new Customer(
      id,
      name,
      surname,
      email,
      phoneNumber,
      password,
      address,
      orderHistory
    )
  }
}

module.exports = Customer
