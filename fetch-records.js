const {
  customerService,
  shopService,
  instrumentService,
} = require('./services')

async function getInfo() {
  try {
    // customer in service
    const customers = await customerService.findByName('Mehmet')

    // shop in service
    const shops = await shopService.findByShopName('Lion Music')

    const shop = await shopService.load()

    // instruments in service
    const instruments = await instrumentService.findInstrument()

    // instruments of the specified type in the service
    const types = await instrumentService.findInstrumentByType('Wind')

    // instruments of the specified model in the service
    const categorys = await instrumentService.findInstrumentByCategory('guitar')

    console.log(customers.orderHistory)
  } catch (e) {
    console.log(e)
  }
}

getInfo()
