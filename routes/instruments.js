const { instrumentService, shopService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const instruments = await instrumentService.load()

  res.render('instruments', { instruments })
})

router.get('/search', async (req, res) => {
  const type = req.query.type
  const category = req.query.category
  const kind = req.query.kind
  const brand = req.query.brand
  const model = req.query.model
  const shopName = req.query.shopName

  const query = {}

  if (type) query.type = type
  if (category) query.category = category
  if (kind) query.kind = kind
  if (brand) query.brand = brand
  if (model) query.model = model
  if (shopName) {
    const shop = await shopService.findBy('name', shopName)
    query.shop = shop[0]._id
    //shop.map((i) => (query.shop = i._id))
  }

  const instruments = await instrumentService.query(query)

  res.render('instruments', { instruments })
})

module.exports = router
