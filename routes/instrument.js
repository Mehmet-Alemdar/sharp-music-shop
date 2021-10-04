const { instrumentDatabase } = require('../database')
const router = require('express').Router()

router.get('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const instrument = await instrumentDatabase.find(id)
    res.send(instrument)
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const object = req.body

  try {
    const instrument = await instrumentDatabase.update(id, object)
    res.send(instrument)
  } catch {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    await instrumentDatabase.removeBy('_id', id)
    res.send('ok')
  } catch (e) {
    next(e)
  }
})

module.exports = router
