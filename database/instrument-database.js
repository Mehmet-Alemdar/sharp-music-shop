const BaseDatabase = require('./base-database')
const Instrument = require('../models/instrument')

class InstrumentDatabase extends BaseDatabase {
  async findInstrument() {
    return await this.load()
  }

  async findInstrumentByType(type) {
    const objects = await this.load()

    return objects.filter((o) => o.type == type)
  }

  async findInstrumentByModel(model) {
    const objects = await this.load()
    return objects.filter((o) => o.model == model)
  }
}

module.exports = new InstrumentDatabase(Instrument)
