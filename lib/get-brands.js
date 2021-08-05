//We pull instrument brands from the database. We only return each brand once.
function getAllBrands(objects) {
  return [...new Set(objects.map((i) => i.brand))]
}

module.exports = { getAllBrands }
