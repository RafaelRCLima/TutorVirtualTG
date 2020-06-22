const answerService = require('../services/answerService')

let answerController = {
  async analizeAsk(watsonMessage, telegramStudentInfo) {
    let answer = [watsonMessage]
    switch (watsonMessage) {
      case 'if':
        return answerService.answerAboutIf(telegramStudentInfo.first_name)
      case 'while':
        return answerService.answerAboutWhile(telegramStudentInfo.first_name)
      case 'for':
        return answerService.answerAboutFor(telegramStudentInfo.first_name)
      case 'relacional':
        return answerService.answerAboutRelational(telegramStudentInfo.first_name)
      case 'logico':
        return answerService.answerAboutLogical(telegramStudentInfo.first_name)
      case 'aritmetico':
        return answerService.answerAboutArithmetics(telegramStudentInfo.first_name)
      case 'professor':
        return answerService.sendAnEmailToTeacher(telegramStudentInfo.first_name, telegramStudentInfo.id)
      case 'video':
        return answerService.sendVideo(telegramStudentInfo.first_name, telegramStudentInfo.id)
      case 'recursao':
        answer = ['Ainda não estou treinado para responder sobre recursão, mas logo vou aprender, deixa comigo.']
        return answer
      default:
        return answer
    }
  }
}

module.exports = answerController
