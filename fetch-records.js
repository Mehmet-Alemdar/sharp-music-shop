const {
  customerDatabase,
  shopDatabase,
  instrumentDatabase,
} = require('./database')

async function getInfo() {
  try {
    // customer in database
    const customers = await customerDatabase.findByName('Mehmet')

    // shop in database
    const shops = await shopDatabase.findByShopName('Lion Music')

    const shop = await shopDatabase.load()

    // instruments in database
    const instruments = await instrumentDatabase.findInstrument()

    // instruments of the specified type in the database
    const types = await instrumentDatabase.findInstrumentByType('Wind')

    // instruments of the specified model in the database
    const categorys = await instrumentDatabase.findInstrumentByCategory(
      'guitar'
    )

    console.log(customers.orderHistory)
  } catch (e) {
    console.log(e)
  }
}

getInfo()
