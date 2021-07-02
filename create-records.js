const Seller = require('./models/seller')
const Customer = require('./models/customer')
const Instrument = require('./models/instrument')
const printOrderHistory = require('./lib/print-order')

const {
  customerDatabase,
  sellerDatabase,
  instrumentDatabase,
} = require('./database')

// vendor and customer creation process
const seller = Seller.create({ name: 'Panda Müzik' })
const mehmet = Customer.create({
  name: 'Mehmet',
  address: 'izmir/karşıyaka...',
})

// instrument creation process
const instrument = Instrument.create({
  type: 'guitar',
  kind: 'electro',
  model: 'fender',
  price: '1000$',
  seller,
})

const instrument2 = Instrument.create({
  type: 'piano',
  kind: 'classic',
  model: 'yamaha',
  price: '5000$',
  seller,
})

// the process of adding the instrument to the instrument list of the vendor to which it belongs
seller.addInstrument(instrument)
seller.addInstrument(instrument2)

// order creation process
const order = mehmet.order(instrument2)
const order2 = mehmet.order(instrument)

// the process of adding to the seller's sales history
seller.addSalesMade(order)
seller.addSalesMade(order2)

async function main() {
  try {
    // customer registration
    await customerDatabase.save([mehmet])

    // seller registration
    await sellerDatabase.save([seller])

    // instrument recording
    await instrumentDatabase.save([instrument, instrument2])

    const customers = await customerDatabase.load()

    customers.forEach(printOrderHistory)
  } catch (e) {
    console.log(e)
  }
}

main()
