const BaseService = require('./base-service')
const Customer = require('../models/customer')

class CustomerService extends BaseService {
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

module.exports = new CustomerService(Customer)
