const BaseService = require('./base-service')
const Instrument = require('../models/instrument')

class InstrumentService extends BaseService {
  async findInstrument() {
    return await this.load()
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
