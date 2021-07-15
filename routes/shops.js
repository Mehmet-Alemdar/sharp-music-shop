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

// create shop
router.post('/', async (req, res) => {
  const shop = Shop.create(req.body)
  await shopDatabase.insert(shop)

  res.send(shop)
})

// gey shop
router.get('/:name', async (req, res) => {
  const { name } = req.params
  const shop = await shopDatabase.findByShopName(name)

  res.render('shop', { shop })
})

// create instrument
router.post('/add-instrument', async (req, res) => {
  const shop = await shopDatabase.findByShopName(req.body.shop.name)
  const instrument = req.body.instrument

  //Including shop object into another object.
  const nestedShopObject = {
    shop,
  }

  //We combined instrument and shop objects in order to give them the desired object type.
  const merged = { ...instrument, ...nestedShopObject }

  const createInstrument = Instrument.create(merged)

  await instrumentDatabase.insert(createInstrument)

  shop.addInstrument(createInstrument)

  await shopDatabase.update(shop)

  res.send(flatted.stringify(createInstrument))
})

// create order
router.post('/order', async (req, res) => {
  const customerName = req.body.customer.name
  const desiredInstrument = req.body.instrument

  const customer = await customerDatabase.findByName(customerName)

  const getInstrument = await instrumentDatabase.getFilterInstrument(
    desiredInstrument
  )

  const shop = await shopDatabase.findByShopName(getInstrument.shop.name)

  if (getInstrument) {
    const order = customer.order(getInstrument)

    shop.addSalesMade(order)

    await customerDatabase.update(customer)

    await shopDatabase.update(shop)
  } else {
    console.log('The specified instrument does not exist')
  }
})

module.exports = router
