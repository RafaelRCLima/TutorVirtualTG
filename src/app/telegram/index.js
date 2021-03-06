const bot = require('./config')
const message = require('../watson/message')
const watsonSession = require('../watson/session')
const studentController = require('../controllers/studentController')
const answerController = require('../controllers/answerController')
const logController = require('../controllers/logController')
const studentService = require('../services/studentService')

const assistant = require('../../config/watson')
const assistId = 'adc3f697-2399-4eed-bd60-a0cecaabebb0'

let session = watsonSession(assistant, assistId)

bot.on('message', async (msg) => {

  studentController.createStudent(msg.from.id, msg.from.first_name)
  const student = await studentService.findStudentByIdTelegram(msg.from.id)
  studentService.saveWatsonSession(await session, student, assistant, assistId)

  if (msg.text === '/start') {
    session = await watsonSession(assistant, assistId)
    student.watsonSession = await session
    await student.save()
    return
  }

  try {

    let mensagem = await message(assistant, msg.text, await student.watsonSession, assistId)

    logController.saveLog(mensagem.output.entities, msg.from.id)

    let answers = await answerController.analizeAsk(mensagem.output.generic[0].text, msg.from)

    if (answers) {
      for (let i = 0; i < answers.length; i++) {
        await bot.sendMessage(msg.chat.id, answers[i])
      }
    }
  } catch (err) {
    console.log('Falha')
    return
  }
})

module.exports = bot
