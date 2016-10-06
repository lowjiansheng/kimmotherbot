var TelegramBot = require('node-telegram-bot-api');

var token = '291482532:AAEkKodHdD8E_tos79TlSbsW1y2ymkkaiek';

var bot = new TelegramBot(token, {polling:{interval:200}});


// Kim's reply when you ask who is he
bot.onText(/\/whoiskim/, function (msg, match) {
    var fromId = msg.chat.id;

    var kimReply = "Hi I am Kim and I have a dig bick.";

    bot.sendMessage(fromId, kimReply );
    bot.sendPhoto(fromId, 'kimpicture.jpg');
});

bot.onText(/\/kimopen (.+)/, function (msg, match){
   var fromId = msg.chat.id;
    var dayToSearch = match[1];
    var open;
    var openMessage = "The shop is open on " + dayToSearch +" ! Come come enjoy.";
    var closeMessage = "My Mom's shop does not open on Tuesday? How many times must I tell you? Is it so hard to remember?";
    var stupidMessage = null;

    switch (dayToSearch){
        case "monday" :
            open = true;
            break;
        case "tuesday" :
            open = false;
            break;
        case "wednesday" :
            open = true;
            break;
        case "thursday" :
            open = true;
            break;
        case "friday" :
            open = true;
            break;
        case "saturday" :
            open = true;
            break;
        case "sunday" :
            open = true;
            break;
        default :
            stupidMessage = "Wtf you don't know how to type in days?";
    }
    if (stupidMessage != null){
        bot.sendMessage(fromId, stupidMessage);
    }

    else if (open){
        bot.sendMessage(fromId, openMessage);
    }
    else if (!open){
        bot.sendMessage(fromId, closeMessage);
    }


});

bot.onText(/\/kimopentmr/, function (msg, match){
   var fromId = msg.chat.id;
    var day = new Date();
    var today = day.getDay();
    var message;

    if(today == 1){
        message = "My Mom's shop does not open on Tuesday? How many times must I tell you? Is it so hard to remember?";
    }
    else {
        message = "The shop is open tmr. Come come enjoy.";
    }


    bot.sendMessage(fromId, message);

});

bot.onText(/\/kimopentoday/, function (msg, match){
   var fromId = msg.chat.id;
    var day = new Date();
    var today = day.getDay();
    var message;

    if (today == 2){
        message = "My Mom's shop does not open on Tuesday? How many times must I tell you? Is it so hard to remember?";
    }
    else {
        message = "The shop is open today! Come come enjoy.";
    }

    bot.sendMessage(fromId, message);
});

bot.onText(/\/kimentertainme/, functionmsg,match){
    var fromId = msg.chat.id;
    var message = ["I have a digger bick than you.", "I do wushu.", "Lemon."];

    var chosenMessage = message[Math.floor(Math.random() * message.length)];

    bot.sendMessage(fromId, message);

}