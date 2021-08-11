const {
  shopDatabase,
  instrumentDatabase,
  customerDatabase,
} = require('../database')
const Shop = require('../models/shop')
const Instrument = require('../models/instrument')
const flatted = require('flatted')
const router = require('express').Router()

router.get('/', async (req, res) => {
  const shops = await shopDatabase.load()

  res.render('shops', { shops })
})


  res.render('shop', { shop })
})

module.exports = router
