const { instrumentDatabase } = require('../database')

//We pull instrument brands from the database. We only return each brand once.
async function getAllBrands() {
  const instruments = await instrumentDatabase.load()

  return [...new Set(instruments.map((i) => i.brand))]
}

async function getBrandByName(brandName) {
  return await instrumentDatabase.findBy('brand', brandName)
}

module.exports = { getAllBrands, getBrandByName }
