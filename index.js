const express = require('express')
const instrumentRouter = require('./routes/instrument')
const brandsRouter = require('./routes/brands')
const customerRouter = require('./routes/customer')
const customerLoginRouter = require('./routes/customer-login')
const shopLoginRouter = require('./routes/shop-login')
const shopRouter = require('./routes/shop')
const ordersRouter = require('./routes/orders')
require('./mongo-connection')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'pug')

app.use('/instrument', instrumentRouter)
app.use('/brands', brandsRouter)
app.use('/customer-login', customerLoginRouter)
app.use('/customer', customerRouter)
app.use('/shop-login', shopLoginRouter)
app.use('/shop', shopRouter)
app.use('/orders', ordersRouter)

app.get('/', async (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('started listening on 3000')
})
