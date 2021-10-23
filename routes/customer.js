const { customerService, orderService } = require('../services')
const router = require('express').Router()

// get customer with id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const customer = await customerService.find(id)
    res.send(customer)
  } catch (e) {
    console.log('hey')
    next(e)
  }
})

// delete customer with id
router.delete('/:id', async (req, res, next) => {
  try {
    await customerService.removeBy('_id', req.params.id)
    res.send('ok')
  } catch (e) {
    next(e)
  }
})

// update customer with id
router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const customer = await customerService.update(id, req.body)
    res.send(customer)
  } catch (e) {
    next(e)
  }
})

// Create order
router.post('/:customerId', async (req, res, next) => {
  const { customerId } = req.params
  const { destination, quantity, instrumentId, shopId } = req.body

  try {
    const order = await orderService.createOrder(
      customerId,
      destination,
      quantity,
      instrumentId,
      shopId
    )

    res.send(order)
  } catch (e) {
    next(e)
  }
})

module.exports = router
