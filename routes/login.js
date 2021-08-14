const Customer = require('../models/customer')
const { customerDatabase } = require('../database')
const router = require('express').Router()

router.get('/', async (req, res) => {
  res.render('login')
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
    res.redirect('/login')
  } else {
    const customerCheck = await customerDatabase.availableCustomerCheck(object)
    if (customerCheck !== undefined) {
      res.redirect(`/customer-account/${customerCheck.id}`)
    } else {
      res.redirect('/login')
    }
  }
})

// create customer account
router.post('/sign-up', async (req, res) => {
  const object = JSON.parse(JSON.stringify(req.body))

  let blankInfoCheck = true
  Object.keys(object).map(function (key) {
    if (object[key].trim() === '') {
      blankInfoCheck = false
    }
  })

  if (blankInfoCheck !== true) {
    res.redirect('/login')
  } else {
    const customerCheck = await customerDatabase.availableCustomerCheck(object)
    if (customerCheck !== undefined) {
      res.redirect('/login')
    } else {
      const customer = Customer.create(object)
      await customerDatabase.insert([customer])
      res.redirect(`/customer-account/${customer.id}`)
    }
  }
})
module.exports = router
