const BaseDatabase = require('./base-database')
const Instrument = require('../models/instrument')

class InstrumentDatabase extends BaseDatabase {
  findInstrument() {
    return this.load()
  }

  findInstrumentByType(type) {
    const objects = this.load()
    let typeList = []
    objects.forEach((elements) => {
      if (elements.type == type) {
        typeList.push(elements)
      }
    })
    return typeList
  }

  findInstrumentByModel(model) {
    const objects = this.load()
    let modelList = []
    objects.forEach((elements) => {
      if (elements.model == model) {
        modelList.push(elements)
      }
    })
    return modelList
  }
}

module.exports = new InstrumentDatabase(Instrument)
