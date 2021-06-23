const BaseDatabase = require('./base-database')
const Customer = require('../models/customer')

class CustomerDatabase extends BaseDatabase {
  findByName(name) {
    const objects = this.load()

    return objects.find((o) => o.name == name)
  }
}

module.exports = new CustomerDatabase(Customer)
