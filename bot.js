var TelegramBot = require('node-telegram-bot-api');

var token = '291482532:AAEkKodHdD8E_tos79TlSbsW1y2ymkkaiek';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});


// Any kind of message
bot.onText('message', function (msg) {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "hi");
});