const { shopDatabase } = require('../database')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const shops = await shopDatabase.load()

  res.render('shops', { shops })
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const shop = await shopDatabase.find(id)

  if (shop) {
    res.render('shop', { shop })
  } else {
    res.send('This shop is not available')
  }
})

module.exports = router
