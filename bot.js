var TelegramBot = require('node-telegram-bot-api');

var token = '291482532:AAEkKodHdD8E_tos79TlSbsW1y2ymkkaiek';

var port = process.env.PORT || 443;
var host = '0.0.0.0';  // probably this change is not required
var externalUrl = process.env.CUSTOM_ENV_VARIABLE || 'https://kimmotherbot.herokuapp.com';

var bot = new TelegramBot(token, { webHook: { port : port, host : host } });

bot.setWebHook(externalUrl + ':443/bot' + token);

// Kim's reply when you ask who is he
bot.onText(/\/whoiskim/, function (msg, match) {
    var fromId = msg.from.id;

    var kimReply = "Hi I am Kim and I have a dig bick.";

    bot.sendMessage(fromId, kimReply );
    bot.sendPhoto(fromId, 'kimpicture.jpg');
});

bot.onText(/\/kimopen (.+)/, function (msg, match){
   var fromId = msg.from.id;
    var dayToSearch = match[1];
    var open;
    var openMessage = "The shop is open on " + dayToSearch +" ! Come come enjoy.";
    var closeMessage = "My Mom's shop does not open on Tuesday? How many times must I tell you? Is it so hard to remember?"
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
    else {
        bot.sendMessage(fromId, closeMessage);
    }


});

bot.onText(/\/kimopentmr/, function (msg, match){
   var fromId = msg.from.id;
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
   var fromId = msg.from.id;
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
