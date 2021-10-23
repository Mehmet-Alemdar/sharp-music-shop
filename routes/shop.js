const { shopService, instrumentService } = require('../services')
const router = require('express').Router()

// Get all shops
router.get('/', async (req, res, next) => {
  try {
    const shops = await shopService.load()
    // res.render('shops', { shops })
    res.send(shops)
  } catch (e) {
    next(e)
  }
})

// Get shop with id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const shop = await shopService.find(id)
    res.send(shop)
  } catch (e) {
    next(e)
  }
})

// Update shop with id
router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const object = req.body

  try {
    const shop = await shopService.update(id, object)
    res.send(shop)
  } catch (e) {
    next(e)
  }
})

// Delete shop with id
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    await shopService.removeBy('_id', id)
    res.send('ok')
  } catch (e) {
    next(e)
  }
})

// Create an instrument
router.post('/:shopId/instrument', async (req, res) => {
  const { shopId } = req.params
  const { type, category, kind, brand, model, price, stock } = req.body

  const instrument = await instrumentService.createInstrument(
    type,
    category,
    kind,
    brand,
    model,
    price,
    stock,
    shopId
  )

  res.send(instrument)
})

module.exports = router
