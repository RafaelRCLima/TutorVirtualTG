const { Router } = require('express')

const watsonController = require('./app/controllers/watsonController')

const router = new Router()

router.get('/', (req, res) => {
  return res.json({ message: 'Hello Tutor!' })
})

router.post('/message', watsonController.sendMessage)

module.exports = router
