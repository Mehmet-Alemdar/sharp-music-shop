const {instrumentService} = require("../services")



//We pull instrument types from the service. We only return each type once.
function getInstrumentType(instruments) {
  return [...new Set(instruments.map((i) => i.type))]
}

//We pull instrument categorys from the service. We only return each category once.
async function getInstrumentCategory() {
  const instruments = await instrumentService.load()
  return [...new Set(instruments.map((i) => i.category))]
}

//We pull instrument kinds from the service. We only return each kind once.
function getInstrumentKind(instruments) {
  return [...new Set(instruments.map((i) => i.kind))]
}

//We pull instrument brands from the service. We only return each brand once.
async function getInstrumentBrand() {
  const instruments = await instrumentService.load()

  return [...new Set(instruments.map((i) => i.brand))]
}

async function getBrandByName(brandName) {
  return await instrumentService.findBy('brand', brandName)
}

module.exports = { getInstrumentType, getInstrumentCategory, getInstrumentKind,getInstrumentBrand }
