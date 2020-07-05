const Student = require('../models/Student')
const watsonSession = require('../watson/session')

let studentService = {
  async findStudentByIdTelegram(idTelegram) {
    const student = await Student.findOne({
      where: {
        idTelegram: idTelegram
      }
    })
    return student
  },

  async saveWatsonSession(session, student, assistant, assistId) {
    if (!student.watsonSession) {
      const sessionExists = Student.findOne({
        where: {
          watsonSession: await session
        }
      })

      if (sessionExists) {
        session = await watsonSession(assistant, assistId)
      }
      student.watsonSession = await session
      await student.save()
    }

    return
  }
}

module.exports = studentService
