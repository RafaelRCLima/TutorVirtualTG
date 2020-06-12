const { Router } = require('express')

const studentController = require('./app/controllers/studentController')

const router = new Router()

router.get('/students', studentController.listStudent)
router.get('/students/:id', studentController.findStudent)


module.exports = router
