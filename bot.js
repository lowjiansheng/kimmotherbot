var TelegramBot = require('node-telegram-bot-api');

var token = '291482532:AAEkKodHdD8E_tos79TlSbsW1y2ymkkaiek';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.sendMessage("hello");

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

bot.onText(/\/"whenopen"/, function(msg, match){
    var fromId = msg.from.id;
    bot.sendMessage(fromId, "You are stupid");

});

// Any kind of message
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // photo can be: a file path, a stream or a Telegram file_id
    var photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});