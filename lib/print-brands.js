//We pull instrument brands from the database. We only return each brand once.
function printAllBrands(objects) {
  if (objects.length == 0) {
    return console.log('brands not found')
  }

  let brands = []
  objects.forEach((o) => {
    brands.push(o.brand)
  })
  return brands.filter((e, i, a) => a.indexOf(e) === i)
}

module.exports = { printAllBrands }
