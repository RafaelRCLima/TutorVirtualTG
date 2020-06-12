const Student = require('../models/Student')

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
    const students = await Student.findAll()
    res.json(students)
  }
}

module.exports = studentController
