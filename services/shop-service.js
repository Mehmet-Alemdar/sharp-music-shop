const BaseService = require('./base-service')
const Shop = require('../models/shop')

class ShopService extends BaseService {
  findByShopName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new ShopService(Shop)
