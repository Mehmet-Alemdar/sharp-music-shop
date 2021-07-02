const {
  customerDatabase,
  sellerDatabase,
  instrumentDatabase,
} = require('./database')

async function getInfo() {
  try {
    // customer in database
    const customers = await customerDatabase.findByName('Mehmet')

    // seller in database
    const sellers = await sellerDatabase.findBySellerName('Panda Müzik')

    // instruments in database
    const instruments = await instrumentDatabase.findInstrument()

    // instruments of the specified type in the database
    const types = await instrumentDatabase.findInstrumentByType('gitar')

    // instruments of the specified model in the database
    const models = await instrumentDatabase.findInstrumentByModel('yamaha')
  } catch (e) {
    console.log(e)
  }
}

getInfo()
