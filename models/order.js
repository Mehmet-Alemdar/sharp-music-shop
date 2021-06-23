class Order {
  constructor(customer, instrument) {
    this.customer = customer
    this.destination = customer.address
    this.instrument = instrument
  }
}

module.exports = Order
