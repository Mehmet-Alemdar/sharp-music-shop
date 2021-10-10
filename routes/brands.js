const { instrumentService } = require('../services')
const { getAllBrands, getBrandByName } = require('../lib/get-brands')
const router = require('express').Router()

//We pull the brands in the service.
router.get('/', async (req, res) => {
  const brands = await getAllBrands()

  res.render('brands', { brands })
})

//we pull the specified brand from the service
router.get('/:brandName', async (req, res) => {
  const { brandName } = req.params

  const instruments = await getBrandByName(brandName)

  res.render('brand', { instruments })
})

module.exports = router
