require('./mongo-connection')
const {
  customerService,
  shopService,
  instrumentService,
  orderService,
} = require('./services')

const printOrderHistory = require('./lib/print-order')

const shop = {
  name: 'Do re',
  email: 'dore@mail.com',
  password: 'dorepass',
  phoneNumber: 234423,
}

const customer = {
  name: 'Teo',
  surname: 'Dere',
  email: 'teo@mail.com',
  phoneNumber: 0067435,
  password: 'teopass',
  addredd: 'izmir ksk',
}

async function main() {
  try {
    const createdShop = await shopService.save(shop)

    const createdCustomer = await customerService.save(customer)

    const createdInstrument = await instrumentService.createInstrument(
      'String',
      'Guitar',
      'Electro',
      'Fender',
      'Stratocaster',
      234423,
      createdShop[0]._id
    )
    const order = await orderService.createOrder(
      createdCustomer[0]._id,
      'izmir göztepe',
      createdInstrument._id
    )

    const customers = await customerService.load()

    customers.forEach(printOrderHistory)
  } catch (e) {
    console.log(e)
  }
}

main()
