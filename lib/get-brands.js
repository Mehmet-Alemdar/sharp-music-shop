const { instrumentService } = require('../services')

//We pull instrument brands from the service. We only return each brand once.
async function getAllBrands() {
  const instruments = await instrumentService.load()

  return [...new Set(instruments.map((i) => i.brand))]
}

async function getBrandByName(brandName) {
  return await instrumentService.findBy('brand', brandName)
}

module.exports = { getAllBrands, getBrandByName }
