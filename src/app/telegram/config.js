const TelegramBot = require('node-telegram-bot-api')
const token = '1135224560:AAGQDooHgtpluYXi92_f1j0k4UTMDRSDbIY'

const bot = new TelegramBot(token, { polling: true })

module.exports = bot
