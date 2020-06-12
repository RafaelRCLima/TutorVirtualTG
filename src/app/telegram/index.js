const bot = require('./config')
const message = require('../watson/message')
const watsonSession = require('../watson/session')
const studentController = require('../controllers/studentController')
const answerController = require('../controllers/answerController')

const assistant = require('../../config/watson')
const assistId = 'adc3f697-2399-4eed-bd60-a0cecaabebb0'

let session = watsonSession(assistant, assistId)

bot.on('message', async (msg) => {

  studentController.createStudent(msg.from.id, msg.from.first_name)

  if (msg.text === '/start') {
    session = await watsonSession(assistant, assistId)
    return
  }

  return new Promise(async (resolve, reject) => {
    let mensagem = await message(assistant, msg.text, await session, assistId)
    // let teste = mensagem.output.generic[0].text
    let teste = await answerController.analizeAsk(mensagem.output.generic[0].text, msg.from.first_name)

    // if (teste === 'if') {
    //   teste = 'Opa ' + msg.from.first_name + ' o if é uma estrutura de controle bem tranquila, vou te dar alguns exemplos.'
    // }

    if (mensagem) {
      resolve(bot.sendMessage(msg.chat.id, teste))
    } else {
      reject({ message: 'Falha' })
    }
  })
})

module.exports = bot
