const express = require('express')
const cors = require('cors')
const instrumentRouter = require('./routes/instrument')
const customerRouter = require('./routes/customer')
const customerLoginRouter = require('./routes/customer-login')
const shopLoginRouter = require('./routes/shop-login')
const shopRouter = require('./routes/shop')
const searchRouter = require('./routes/search')
const ordersRouter = require('./routes/orders')
require('./mongo-connection')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'pug')

app.use('/instrument', instrumentRouter)
app.use('/customer-login', customerLoginRouter)
app.use('/customer', customerRouter)
app.use('/shop-login', shopLoginRouter)
app.use('/shop', shopRouter)
app.use('/orders', ordersRouter)
app.use('/search', searchRouter)

app.get('/', async (req, res) => {
  res.render('index')
})

module.exports = app
