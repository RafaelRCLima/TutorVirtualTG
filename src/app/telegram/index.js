const TelegramBot = require('node-telegram-bot-api')
const message = require('../watson/message')
const watsonSession = require('../watson/session')

const assistant = require('../../config/watson')
const assistId = 'adc3f697-2399-4eed-bd60-a0cecaabebb0'

const token = '1135224560:AAGQDooHgtpluYXi92_f1j0k4UTMDRSDbIY'
const bot = new TelegramBot(token, { polling: true })

let session = watsonSession(assistant, assistId)

bot.on('message', async (msg) => {
  return new Promise(async (resolve, reject) => {
    let mensagem = await message(assistant, msg.text, await session, assistId)
    if (mensagem) {
      resolve(bot.sendMessage(msg.chat.id, JSON.stringify(mensagem.output.generic[0].text)))
    } else {
      reject({ message: 'Falha' })
    }
  })
})

module.exports = bot
