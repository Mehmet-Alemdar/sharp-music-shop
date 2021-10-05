const { instrumentDatabase } = require('../database')
const router = require('express').Router()

router.get('/', async (req, res) => {
  const instruments = await instrumentDatabase.load()

  res.send(instruments)
})

router.get('/search', async (req, res) => {
  const type = req.query.type
  const category = req.query.category
  const kind = req.query.kind
  const brand = req.query.brand
  const model = req.query.model

  const query = {}

  if (type) query.type = type
  if (category) query.category = category
  if (kind) query.kind = kind
  if (brand) query.brand = brand
  if (model) query.model = model

  const instruments = await instrumentDatabase.query(query)

  res.send(instruments)
})

module.exports = router
