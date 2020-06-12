const { Router } = require('express')

const watsonController = require('./app/controllers/watsonController')
const studentController = require('./app/controllers/studentController')

const router = new Router()

router.post('/message', watsonController.sendMessage)

router.get('/students', studentController.listStudent)
router.get('/students/:id', studentController.findStudent)

module.exports = router
