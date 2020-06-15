const answerService = require('../services/answerService')

let answerController = {
  async analizeAsk(watsonMessage, name, idTelegram) {
    let answer = [watsonMessage]
    switch (watsonMessage) {
      case 'if':
        return answerService.answerAboutIf(name)
      case 'while':
        return answerService.answerAboutWhile(name)
      case 'for':
        return answerService.answerAboutFor(name)
      case 'relacional':
        return answerService.answerAboutRelational(name)
      case 'logico':
        return answerService.answerAboutLogical(name)
      case 'aritmetico':
        return answerService.answerAboutArithmetics(name)
      case 'professor':
        return answerService.sendAnEmailToTeacher(name, idTelegram)
      case 'video':
        return answerService.sendVideo(name, idTelegram)
      default:
        return answer
    }
  }
}

module.exports = answerController
