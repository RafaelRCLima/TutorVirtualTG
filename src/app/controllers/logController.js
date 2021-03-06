const Log = require('../models/Log')

let logController = {
  saveLog(entitiesList, idTelegram) {
    if (entitiesList[0] && entitiesList[0].value != 'Negativo' && entitiesList[0].value != 'Positivo'
      && entitiesList[0].value != 'video' && entitiesList[0].value != 'professor') {
      if (entitiesList[0].value !== 'Operador') {
        try {
          Log.create({
            idTelegram: idTelegram,
            subject: entitiesList[0].value
          })
        } catch (error) {
          console.log(error)
        }
      }

      if (entitiesList.length === 2) {
        try {
          Log.create({
            idTelegram: idTelegram,
            subject: entitiesList[1].value
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  },

  async listStudentLogs(studentId) {
    const logs = await Log.findAll({
      where: {
        idTelegram: studentId
      }
    })
    return logs
  }
}

module.exports = logController
