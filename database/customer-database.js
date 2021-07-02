const BaseDatabase = require('./base-database')
const Customer = require('../models/customer')

class CustomerDatabase extends BaseDatabase {
  findByName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new CustomerDatabase(Customer)
