const { shopDatabase } = require('../database')

const router = require('express').Router()

// Will not manage store owner information from this page
// Actions taken here Actions taken for customers to see the store page and store information

// Get all shops
router.get('/', async (req, res, next) => {
  try {
    const shops = await shopDatabase.load()
    res.send(shops)
  } catch (e) {
    next(e)
  }
})

// Get shop with id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const shop = await shopDatabase.find(id)
    res.send(shop)
  } catch (e) {
    next(e)
  }
})

module.exports = router
