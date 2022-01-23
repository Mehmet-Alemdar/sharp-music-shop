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
        i.type.toUpperCase().match(query.toUpperCase()) ||
        i.category.toUpperCase().match(query.toUpperCase()) ||
        i.kind.toUpperCase().match(query.toUpperCase()) ||
        i.brand.toUpperCase().match(query.toUpperCase()) ||
        i.model.toUpperCase().match(query.toUpperCase()) ||
        i.shop.name.toUpperCase().match(query.toUpperCase())
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
