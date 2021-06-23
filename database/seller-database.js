const BaseDatabase = require('./base-database')
const Seller = require('../models/seller')

class SellerDatabase extends BaseDatabase {
  findBySellerName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new SellerDatabase(Seller)
