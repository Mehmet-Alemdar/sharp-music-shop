const { shopService } = require('../services')

const router = require('express').Router()

// Will not manage store owner information from this page
// Actions taken here Actions taken for customers to see the store page and store information

// Get all shops
router.get('/', async (req, res, next) => {
  try {
    const shops = await shopService.load()
    res.render('shops', { shops })
  } catch (e) {
    next(e)
  }
})

// Get shop with id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const shop = await shopService.find(id)
    res.render('shop', { shop })
  } catch (e) {
    next(e)
  }
})

module.exports = router
