const { customerDatabase } = require('../database')
const router = require('express').Router()

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const customer = await customerDatabase.find(id)

  if (customer === undefined) {
    res.send('This customer does not exist')
  } else {
    res.render('customer-account', { customer })
  }
})

module.exports = router
