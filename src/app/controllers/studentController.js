const Student = require('../models/Student')
const logController = require('../controllers/logController')

let studentController = {
  async createStudent(idTelegram, studentName) {
    const studentExists = await Student.findOne({
      where: {
        idTelegram: idTelegram
      }
    })

    if (!studentExists) {
      try {
        Student.create({
          idTelegram: idTelegram,
          name: studentName
        })
      } catch (error) {
        console.log(error)
      }
    }
  },

  async listStudent(req, res) {
    let students = await Student.findAll()
    let studentsList = []
    students.map(student => studentsList.push({ idTelegram: student.idTelegram, name: student.name }))

    res.json(studentsList)
  },

  async findStudent(req, res) {
    const { idTelegram, name } = await Student.findOne({
      where: {
        idTelegram: req.params.id
      }
    })

    const student = {
      idTelegram,
      name
    }

    const logs = await logController.listStudentLogs(idTelegram)
    const logsList = []
    logs.map(log => logsList.push({ subject: log.subject, data: log.created_at }))
    student.logs = logsList

    res.json(student)
  }
}

module.exports = studentController
