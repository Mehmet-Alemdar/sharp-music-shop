const BaseService = require('./base-service')
const Instrument = require('../models/instrument')

class InstrumentService extends BaseService {
  async findInstrument() {
    return await this.load()
  }

  async findSearchedInstrument(query){
    const instruments = await this.load()
    const searchedInstruments = instruments.filter ((i) => {
      return (
        i.type.match(query) ||
        i.category.match(query) ||
        i.kind.match(query) ||
        i.brand.match(query) ||
        i.model.match(query) ||
        i.shop.name.match(query)
      )
    })
    return searchedInstruments
  }

  getInstrumentByStockInfo(instruments) {
    let instrumentsInStock = []

    instruments.map((i) => {
      if (i.stock > 0) instrumentsInStock.push(i)
    })

    return instrumentsInStock
  }
}

module.exports = new InstrumentService(Instrument)
