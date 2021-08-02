const { instrumentDatabase } = require('../database')

const {
  getInstrumentType,
  getInstrumentCategory,
} = require('../lib/get-instrument-info')

const router = require('express').Router()

//instrument types and categories in database
router.get('/', async (req, res) => {
  const instruments = await instrumentDatabase.load()

  const instrumentsTypes = getInstrumentType(instruments)
  const instrumentsCategories = getInstrumentCategory(instruments)

  res.render('instruments', { instrumentsTypes, instrumentsCategories })
})

//we pull the instruments of the specified type from the database
router.get('/type/:type', async (req, res) => {
  const { type } = req.params

  const instruments = await instrumentDatabase.findInstrumentByType(type)

  const instrumentsCategorys = getInstrumentCategory(instruments)

  res.render('instruments-types', { instrumentsCategorys, type })
})

//we pull the instruments of the specified category from the database
router.get('/category/:category', async (req, res) => {
  const { category } = req.params

  const instruments = await instrumentDatabase.findInstrumentByCategory(
    category
  )

  res.render('filtered-instruments', { instruments })
})

router.get('/instrument/:id', async (req, res) => {
  const { id } = req.params
  const instrument = await instrumentDatabase.find(id)

  res.render('instrument', { instrument })
})

module.exports = router
