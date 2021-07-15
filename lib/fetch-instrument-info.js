//We pull instrument types from the database. We only return each type once.
function printType(instruments) {
  if (instruments.length == 0) {
    return console.log('no data of this type')
  }

  let types = []
  instruments.forEach((o) => {
    types.push(o.type)
  })
  return types.filter((e, i, a) => a.indexOf(e) === i)
}

//We pull instrument categorys from the database. We only return each category once.
function printCategory(instruments) {
  if (instruments.length == 0) {
    return console.log('no data in this category')
  }

  let categorys = []
  instruments.forEach((o) => {
    categorys.push(o.category)
  })

  return categorys.filter((e, i, a) => a.indexOf(e) === i)
}

//We pull instrument kinds from the database. We only return each kind once.
function printKind(instruments) {
  if (instruments.length == 0) {
    return console.log('no data in this kind')
  }

  let kinds = []
  instruments.forEach((o) => {
    kinds.push(o.kind)
  })

  return kinds.filter((e, i, a) => a.indexOf(e) === i)
}

module.exports = { printType, printCategory, printKind }
