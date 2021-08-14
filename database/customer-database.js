const BaseDatabase = require('./base-database')
const Customer = require('../models/customer')

class CustomerDatabase extends BaseDatabase {
  findByName(name) {
    return this.findBy('name', name)
  }

  async availableCustomerCheck(customer) {
    const customers = await this.load()

    return customers.find(
      (o) => o.email == customer.email && o.password == customer.password
    )
  }
}

module.exports = new CustomerDatabase(Customer)
