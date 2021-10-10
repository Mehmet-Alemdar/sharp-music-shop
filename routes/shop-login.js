const { shopService } = require('../services')
const router = require('express').Router()

// create shop account
router.post('/sign-up', async (req, res, next) => {
  const object = req.body
  try {
    const shop = await shopService.save(object)
    res.send(shop)
  } catch (e) {
    next(e)
  }
})

module.exports = router
