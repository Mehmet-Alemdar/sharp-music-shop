const express = require('express')
const instrumentsRouter = require('./routes/instruments')
const shopsRouter = require('./routes/shops')
const brandsRouter = require('./routes/brands')
const { instrumentDatabase } = require('./database')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/instruments-types', instrumentsRouter)
app.use('/shops', shopsRouter)
app.use('/brands', brandsRouter)
app.get('/', async (req, res) => {
  const instruments = await instrumentDatabase.findInstrument()
  res.render('index', { instruments })
})

app.listen(3000, () => {
  console.log('started listening on 3000')
})
