const { instrumentDatabase } = require('../database')
const { getAllBrands } = require('../lib/get-brands')
const router = require('express').Router()

//We pull the brands in the database.
router.get('/', async (req, res) => {
  const objects = await instrumentDatabase.load()

  const brands = getAllBrands(objects)

  res.render('brands', { brands })
})

//we pull the specified brand from the database
router.get('/:brand', async (req, res) => {
  const { brand } = req.params

  const instruments = await instrumentDatabase.findInstrumentByBrand(brand)

  res.render('filtered-instruments', { instruments })
})

module.exports = router
