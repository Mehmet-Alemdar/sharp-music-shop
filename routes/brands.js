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

  if (instruments.length <= 0) {
    res.send('This brand is not available')
  } else {
    res.render('brand', { instruments, brand })
  }
})

module.exports = router
