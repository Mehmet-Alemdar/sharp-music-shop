const { instrumentDatabase } = require('../database')

const { printType, printCategory } = require('../lib/fetch-instrument-info')

const router = require('express').Router()

//instrument types in database
router.get('/', async (req, res) => {
  const instruments = await instrumentDatabase.load()
  //
  const instrumentsTypes = printType(instruments)

  res.render('instruments', { instrumentsTypes })
})

//we pull the instruments of the specified type from the database
router.get('/:type', async (req, res) => {
  const { type } = req.params

  const instruments = await instrumentDatabase.findInstrumentByType(type)

  const instrumentsCategorys = printCategory(instruments)

  res.render('instruments-types', { instrumentsCategorys, type })
})

//we pull the instruments of the specified category from the database
router.get('/category/:category', async (req, res) => {
  const { category } = req.params

  const instruments = await instrumentDatabase.findInstrumentByCategory(
    category
  )

  res.render('filtered', { instruments })
})

module.exports = router
