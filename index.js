const Seller = require('./models/seller')
const Customer = require('./models/customer')
const Instrument = require('./models/instrument')
const printOrderHistory = require('./lib/print-order')

const {
  CustomerDatabase,
  SellerDatabase,
  InstrumentDatabase,
} = require('./database')

// satıcı ve müşteri oluşturma işlemi
const seller = Seller.create({ name: 'Panda Müzik' })
const mehmet = Customer.create({
  name: 'Mehmet',
  address: 'izmir/karşıyaka...',
})

// enstrüman oluşturma işlemi
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

// enstrümanı ait olduğu satıcının enstrüman listesine ekleme işlemi
seller.addInstrument(instrument)
seller.addInstrument(instrument2)

// sipariş oluşturma işlemi
const order = mehmet.order(instrument2)
const order2 = mehmet.order(instrument)

// satıcının satış geçmişine ekleme işlemi
seller.addSalesMade(order)
seller.addSalesMade(order2)
// müşteri kaydı
CustomerDatabase.save([mehmet])

// satıcı kaydı
SellerDatabase.save([seller])

// enstrüman kaydı
InstrumentDatabase.save([instrument, instrument2])

// veritabanındaki müşteri
const customers = CustomerDatabase.findByName('Mehmet')

// veritabanındaki satıcı
const sellers = SellerDatabase.findBySellerName('Panda Müzik')

// veritabanındaki enstrümanlar
const instruments = InstrumentDatabase.findInstrument()

// veritabanındaki belirtilen tipteki enstrümanlar
const types = InstrumentDatabase.findInstrumentByType('gitar')

// veritabanındaki belirtilen modeldeki enstrümanlar
const models = InstrumentDatabase.findInstrumentByModel('fender')

printOrderHistory(customers)
