//We pull instrument types from the database. We only return each type once.
function getInstrumentType(instruments) {
  return [...new Set(instruments.map((i) => i.type))]
}

//We pull instrument categorys from the database. We only return each category once.
function getInstrumentCategory(instruments) {
  return [...new Set(instruments.map((i) => i.category))]
}

//We pull instrument kinds from the database. We only return each kind once.
function getInstrumentKind(instruments) {
  return [...new Set(instruments.map((i) => i.kind))]
}

module.exports = { getInstrumentType, getInstrumentCategory, getInstrumentKind }
