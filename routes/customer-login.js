const Customer = require('../models/customer')
const { customerService } = require('../services')
const router = require('express').Router()

router.get('/', async (req, res) => {
  res.render('customer-login')
})

// login customer account
router.post('/', async (req, res) => {
  const object = JSON.parse(JSON.stringify(req.body))

  let blankInfoCheck = true

  Object.keys(object).map(function (key) {
    if (object[key].trim() === '') {
      blankInfoCheck = false
    }
  })

  if (blankInfoCheck !== true) {
    res.redirect('/customer-login')
  } else {
    const customerCheck = await customerService.availableCustomerCheck(object)
    if (customerCheck !== undefined) {
      res.redirect(`/customer/${customerCheck.id}`)
    } else {
      res.redirect('/customer-login')
    }
  }
})

// create customer account
router.post('/sign-up', async (req, res) => {
  const object = req.body
  const customer = await customerService.save(object)
  res.send(customer)
})

module.exports = router
