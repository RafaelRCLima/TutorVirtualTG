const Log = require('../models/Log')

let logController = {
  saveLog(entitiesList, idTelegram) {
    if (entitiesList[0]) {
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

  async listStudentLogs() {
    const logs = await Log.findAll()

    return logs
  }
}

module.exports = logController
