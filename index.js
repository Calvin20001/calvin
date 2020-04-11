const Discord = require ('discord.js');
const bot = new Discord.Client();

const token = 'Njk4MjExOTM0OTQ4MDMyNTIz.XpCivg.e6ZAFVilx5VJ1z5c9TNCHepe2-s';

const PREFIX = '!';
bot.login(token);

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', message=>{

    //let args = message.content.substring(PREFIX.length).split(" ");
    if(message.content ==  "hi"){
        message.reply('HELLO FRIEND!')
    } 
    if(message.content == "!book"){
        message.reply('https://docs.google.com/document/d/1FHsDuKv10bOqAaXcEeR2VPgy1qaItO8rPlci_3zTkvk/edit?usp=sharing')
    }
    if(message.content ==  "!board"){
        message.reply('https://docs.google.com/document/d/1tCw2NY5VoXpCT-tUTlgSq1nLFihd9vSz3sLt3nj4J18/edit')
    }
    if(message.content == "!help"){
        message.reply('hi for a greeting from book bot!  !book for book link!  !board for board link!')
    }
})
