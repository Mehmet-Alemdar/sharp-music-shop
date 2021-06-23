const printOrder = (order) => {
  console.log(
    `${order.customer.name}, bought a ${order.instrument.model} ${order.instrument.type} from ${order.instrument.seller.name}`
  )
}

const printOrderHistory = (customer) => {
  if (customer.orderHistory.length == 0) {
    return console.log(`${customer.name} has no orders yet`)
  }

  customer.orderHistory.forEach(printOrder)
}

module.exports = printOrderHistory
