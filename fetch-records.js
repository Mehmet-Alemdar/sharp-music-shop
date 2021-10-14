require('./mongo-connection')
const {
  customerService,
  shopService,
  instrumentService,
} = require('./services')

async function getInfo() {
  try {
    // customer in service
    const customers = await customerService.findByName('Teo')

    // shop in service
    const shop = await shopService.findByShopName('Do re')

    const shops = await shopService.load()

    // instruments in service
    const instruments = await instrumentService.findInstrument()

    // instruments of the specified type in the service
    const types = await instrumentService.findInstrumentByType('Strings')

    // instruments of the specified model in the service
    const categorys = await instrumentService.findInstrumentByCategory('guitar')

    console.log(instruments)
  } catch (e) {
    console.log(e)
  }
}

getInfo()
