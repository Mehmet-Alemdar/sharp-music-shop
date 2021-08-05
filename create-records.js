const Shop = require('./models/shop')
const Customer = require('./models/customer')
const Instrument = require('./models/instrument')
const printOrderHistory = require('./lib/print-order')

const {
  customerDatabase,
  shopDatabase,
  instrumentDatabase,
} = require('./database')

// vendor and customer creation process
const shop = Shop.create({ name: 'Panda Music' })
const shop2 = Shop.create({ name: 'Lion Music' })
const mehmet = Customer.create({
  name: 'Mehmet',
  address: 'izmir/karşıyaka...',
})

// instrument creation process
const instrument = Instrument.create({
  type: 'Stringed',
  category: 'Guitar',
  kind: 'Electronic',
  brand: 'Fender',
  model: 'Stratocaster',
  price: '1000$',
  shop,
})

const instrument2 = Instrument.create({
  type: 'Keyboard',
  category: 'Stage Keyboards',
  kind: 'Electronic',
  brand: 'Yamaha',
  model: 'YC Series',
  price: '7899$',
  shop,
})

const instrument3 = Instrument.create({
  type: 'Wind',
  category: 'Saxophones',
  kind: 'Tenor saxophones',
  brand: 'Thomann',
  model: 'Special series',
  price: '598$',
  shop,
})
const instrument4 = Instrument.create({
  type: 'Percussion',
  category: 'Drum',
  kind: 'Bass Drum',
  brand: 'Trick',
  model: 'Trick AL13 Bass Drum 24 x 18 in. Black Cast',
  price: '1467,65$',
  shop: shop2,
})
const instrument5 = Instrument.create({
  type: 'Stringed',
  category: 'Guitar',
  kind: 'Classical',
  brand: 'Yamaha',
  model: 'NX Series',
  price: '4467$',
  shop: shop2,
})

//the process of adding the instrument to the instrument list of the vendor to which it belongs
shop.addInstrument(instrument)
shop.addInstrument(instrument2)
shop.addInstrument(instrument3)
shop2.addInstrument(instrument4)
shop2.addInstrument(instrument5)

//order creation process
const order = mehmet.order(instrument2)
const order2 = mehmet.order(instrument)

// the process of adding to the shop's sales history
shop.addSalesMade(order)
shop.addSalesMade(order2)

async function main() {
  try {
    // customer registration
    await customerDatabase.save([mehmet])

    // shop registration
    await shopDatabase.save([shop, shop2])

    // instrument recording
    await instrumentDatabase.save([
      instrument,
      instrument2,
      instrument3,
      instrument4,
      instrument5,
    ])

    const customers = await customerDatabase.load()

    customers.forEach(printOrderHistory)
  } catch (e) {
    console.log(e)
  }
}

main()
