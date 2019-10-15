const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjMzNTUyODcxNzk4ODY1OTQ3.XaVotQ.VJWKgZU2kp7ICcPB3I_Fm-4MOzc';

const PREFIX = '$';

bot.on('ready', () => {
    console.log("this Bot is online !");
})

bot.on('message', msg =>{
    let x = msg.content;
    switch (x){
        case 'hi':
            msg.reply("S'up")
            break;
        case 'hello':
            msg.reply("Hello Friend")
            break;
        case 'salut':
            msg.reply('Any attempts of communicating in french will not be treated, Mais salut a toi aussi')
            break;
        case 'prefix':
            msg.reply(PREFIX)
            break;
         case 'help':
                msg.channel.sendMessage("use the prefix followed by:\nwebsite = our website link \nping = ...just try it and you'll see\nclear = delete an amount of msges\nembed = create an embed.")
               break;
    }
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'ping':
            msg.channel.sendMessage("pong!")
            break;
        case 'website':
            msg.channel.send("Http://dev-geeks.tech")
            break;
        case 'help':
                msg.channel.sendMessage("use the prefix followed by:\nwebsite = our website link \nping = ...just try it and you'll see\nclear = delete an amount of msges\nembed = create an embed.")
            break;
        case 'clear':
            if (Number.isNaN(args[1])) return msg.reply('this fnc needs an int')
            else if (!args[1]) return msg.reply('this fnc needs 2 args')
            msg.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('UserInfo')
            .addField('UserName', msg.author.username)
            .setColor(0xFB2D01)
            .addField('ID', msg.author.id)
            .setThumbnail(msg.author.avatarURL);
            msg.channel.sendEmbed(embed)
            break;
    }
})

bot.login(token);