const BaseDatabase = require('./base-database')
const Shop = require('../models/shop')

class ShopDatabase extends BaseDatabase {
  findByShopName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new ShopDatabase(Shop)
