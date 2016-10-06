var TelegramBot = require('node-telegram-bot-api');

var token = '291482532:AAEkKodHdD8E_tos79TlSbsW1y2ymkkaiek';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/whattime (.+)/, function (msg, match) {
    var fromId = msg.from.id;

    bot.sendMessage(fromId, "hi test");
});