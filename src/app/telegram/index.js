const bot = require('./config')
const message = require('../watson/message')
const watsonSession = require('../watson/session')
const studentController = require('../controllers/studentController')
const answerController = require('../controllers/answerController')
const logController = require('../controllers/logController')

const assistant = require('../../config/watson')
const assistId = 'adc3f697-2399-4eed-bd60-a0cecaabebb0'

let session = watsonSession(assistant, assistId)

bot.on('message', async (msg) => {

  if (msg.text === '/start') {
    session = await watsonSession(assistant, assistId)
    return
  }

  studentController.createStudent(msg.from.id, msg.from.first_name)

  return new Promise(async (resolve, reject) => {
    let mensagem = await message(assistant, msg.text, await session, assistId)

    logController.saveLog(mensagem.output.entities, msg.from.id)

    let answers = await answerController.analizeAsk(mensagem.output.generic[0].text, msg.from)

    if (answers) {
      for (let i = 0; i < answers.length; i++) {
        resolve(await bot.sendMessage(msg.chat.id, answers[i]))
      }
    } else {
      reject({ message: 'Falha' })
    }
  })
})

module.exports = bot
