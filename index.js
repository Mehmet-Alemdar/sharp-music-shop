const express = require('express')
const instrumentsRouter = require('./routes/instruments')
const shopsRouter = require('./routes/shops')
const brandsRouter = require('./routes/brands')
const customerRouter = require('./routes/customer')
const customerLoginRouter = require('./routes/customer-login')
require('./mongo-connection')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'pug')

app.use('/instruments', instrumentsRouter)
app.use('/shops', shopsRouter)
app.use('/brands', brandsRouter)
app.use('/customer-login', customerLoginRouter)
app.use('/customer', customerRouter)

app.get('/', async (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('started listening on 3000')
})
