const { instrumentService } = require('../services')
const {getInstrumentCategory,getInstrumentBrand, getInstrumentType} = require("../lib/get-instrument-info")
const router = require('express').Router()

router.get('/', async (req, res) => {
  const instruments = await instrumentService.load()

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
  if (model) query.model = models

  const instruments = await instrumentService.query(query)

  res.send(instrumentService.getInstrumentByStockInfo(instruments))
})

router.get("/categories", async(req,res,next) => {
  const categories = await getInstrumentCategory()
  res.send(categories)
})
//We pull the brands in the service.
router.get('/brands', async (req, res) => {
  const brands = await getInstrumentBrand()

  res.send(brands)
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  
  try {
    const instrument = await instrumentService.find(id)
    res.send(instrumentService.getInstrumentByStockInfo([instrument]))
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const object = req.body

  try {
    const instrument = await instrumentService.update(id, object)
    res.send(instrument)
  } catch {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    await instrumentService.removeBy('_id', id)
    res.send('ok')
  } catch (e) {
    next(e)
  }
})

module.exports = router
