const Seller = require('./seller')
const Customer = require('./customer')

const seller = new Seller('panda music')
const mehmet = new Customer('mehmet', 'izmir/karşıyaka...')

const instrument = seller.addInstrument(
  'gitar',
  'elektrik ',
  'gibson les paul',
  '1000$',
  seller
)

const order = mehmet.order(instrument)

seller.addSalesMade(order)

console.log(order)
