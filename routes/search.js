const {instrumentService} = require('../services')
const router = require('express').Router()

router.get('/', async(req,res,next) => {
  const query = req.query.query
  const instruments = await instrumentService.findSearchedInstrument(query)
  res.send(instruments)

})

module.exports = router