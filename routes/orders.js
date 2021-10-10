const { orderService } = require('../services')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const orders = await orderService.load()

    res.send(orders)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const order = await orderService.find(id)

    res.send(order)
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    await orderService.removeBy('_id', id)

    res.send('ok')
  } catch (e) {
    next(e)
  }
})

module.exports = router
