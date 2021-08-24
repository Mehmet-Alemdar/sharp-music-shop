const { customerDatabase } = require('../database')
const router = require('express').Router()

// get customer with id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const customer = await customerDatabase.find(id)
    res.send(customer)
  } catch (e) {
    console.log('hey')
    next(e)
  }
})

// delete customer with id
router.delete('/:id', async (req, res, next) => {
  try {
    await customerDatabase.removeBy('_id', req.params.id)
    res.send('ok')
  } catch (e) {
    next(e)
  }
})

// update customer with id
router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const customer = await customerDatabase.update(id, req.body)
    res.send(customer)
  } catch (e) {
    next(e)
  }
})

module.exports = router
